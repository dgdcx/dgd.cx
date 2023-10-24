import 'dotenv/config'
import express from 'express'
import fs from 'fs'
import { app } from './utility.mjs'

import cors from 'cors'
const corsOptions = {
    origin: '*' // TODO: Restrict down the road
}
app.use((req, res, next) => {
    console.log(`${req.ip} ${req.method} ${req.url}`)
    next()
})
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

/*
** STRIPE DONATION SYSTEM
*/
// Get and validate stripe settings from .env
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
        console.log(`${KEY} seems to be invalid, disabling stripe checkout`);
    }
    for (key in settings.prices) {
        if (typeof settings.prices[key] != typeof "" || settings.prices[key].length < 1) {
            settings.valid = false;
            console.log(`${KEY} seems to be invalid, disabling stripe checkout`);
        }
        break;
    }
    return settings;
};
var stripeSettings = getStripeSettings();
// Create a new stripe session
app.post('/api/stripe/checkout', async (req, res) => {
    if (!stripeSettings.valid) res.status(503).end();
    const session = await stripe.checkout.sessions.create
        ({
            line_items
                : [
                    {
                        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                        price
                            : process.env.STRIPE_PRICE_CUSTOM,
                        quantity
                            : 1,
                    },
                ],
            mode: 'payment',
            success_url: stripeSettings.success,
            cancel_url: stripeSettings.cancel
        });

    res.redirect(303, session.url);
});

/*
** DATA
*/
// Currently broken, but was working at one point. Google search!
app.get('/api/search', async (req, res, next) => {
    console.log(req.query)
    let params = new URLSearchParams({
        cx: process.env.SEARCH_ID,
        q: req.query.q,
    })
    let url = `https://www.googleapis.com/customsearch/v1?key=${process.env.SEARCH_KEY}&${params}`
    console.log(url)
    let headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'Referer': 'https://dgd.cx/api/search'
    }
    let fetched = await fetch(url, {
        method: 'GET',
        headers: headers
    })
    let result = await fetched.json()
    console.log(result)
    if (result.items) return res.status(200).json(result.items)
    return res.status(200).json([])
})
// Dummy data for news
app.get('/api/news.json', async (req, res, next) => {
    let news = []
    try {
        news = JSON.parse(fs.readFileSync('./server/news.json', 'utf-8'))
    } catch (err) {
        console.log(err)
    }
    console.log(news)
    return res.status(200).json(news)
})
// Dummy data for chat
app.get('/api/chat.json', async (req, res, next) => {
    let chat = []
    try {
        chat = JSON.parse(fs.readFileSync('./server/chat.json', 'utf-8'))
    } catch (err) {
        console.log(err)
    }
    console.log(chat)
    return res.status(200).json(chat)
})
app.use(express.static('client/public'))
const [HOST, PORT] = ["0.0.0.0", 5173]
app.listen(PORT, HOST, () => console.log(`Listening on ${HOST}:${PORT}`))