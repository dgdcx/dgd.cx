import express from 'express';
import stripe from 'stripe';

const router = express.Router();

let getStripeSettings = () => {
    let settings = {
        valid: true,
        key: process.env.STRIPE_PUBLISHABLE_KEY,
        prices: {
            donation_onetime_custom: process.env.STRIPE_PRICE_CUSTOM
        },
        success: "https://dgd.cx/stripe/success",
        cancel: "https://dgd.cx/stripe/cancel"
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
    return settings;
};
var stripeSettings = getStripeSettings();

router.post('/checkout', async (req, res) => {
    if (!stripeSettings.valid) res.status(503).end();
    const session = await stripe.checkout.sessions.create
        ({
            line_items: [{
                // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                price
                    : process.env.STRIPE_PRICE_CUSTOM,
                quantity
                    : 1,
            }],
            mode: 'payment',
            success_url: stripeSettings.success,
            cancel_url: stripeSettings.cancel
        });
    res.redirect(303, session.url);
});

export { router };