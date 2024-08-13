import express from 'express';
import _stripe from 'stripe';

const router = express.Router();

let getStripeSettings = () => {
    let settings = {
        stripe: null,
        valid: true,
        key: process.env.STRIPE_SECRET_KEY,
        prices: {
            donation_onetime_custom: process.env.STRIPE_PRICE_ONETIME_CUSTOM,
            donation_recurring_custom: process.env.STRIPE_PRICE_RECURRING_CUSTOM
        },
        success: "https://dgd.cx/donate?status=successful",
        cancel: "https://dgd.cx/donate?status=cancelled"
    }
    if (typeof settings.key != typeof "" || settings.key.length < 1) {
        settings.valid = false;
        console.log(`settings.key seems to be invalid, disabling stripe checkout`);
    }
    for (let key in settings.prices) {
        if (typeof settings.prices[key] != typeof "" || settings.prices[key].length < 1) {
            settings.valid = false;
            console.log(`settings.prices.${key} seems to be invalid, disabling stripe checkout`);
        }
        break;
    }
    if (settings.valid)
        settings.stripe = _stripe(settings.key);
    return settings;
};
var stripeSettings = getStripeSettings();

router.post('/checkout', async (req, res) => {
    let price = false;
    let line_items = false;

    if (!stripeSettings.valid) {
        return res.status(503).end()
    } else if (!req.body || !req.body.choice) {
        return res.status(400).end()
    } else if (req.body.choice == "onetime_custom") {
        price = stripeSettings.prices.donation_onetime_custom;
        line_items = [{
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: price,
            quantity: 1,
        }]
    } else if (req.body.choice == "recurring_custom") {
        price = stripeSettings.prices.donation_recurring_custom;
        line_items = [{
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: price,
            quantity: 5,
        }]
    } else {
        return res.status(400).end()
    }

    if (price && line_items) {
        const session = await stripeSettings.stripe.checkout.sessions.create({
            line_items: line_items,
            mode: 'payment',
            success_url: stripeSettings.success,
            cancel_url: stripeSettings.cancel
        })
        return res.redirect(303, session.url)
    }
    return res.redirect(400).end()
});

export { router };