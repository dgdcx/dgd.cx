import 'dotenv/config'
import express from 'express'
import fs from 'fs'
import {app} from './utility.mjs'

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
app.use(express.urlencoded({extended:false}))
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
        method : 'GET',
        headers : headers
    })
    let result = await fetched.json()
    console.log(result)
    if (result.items) return res.status(200).json(result.items)
    return res.status(200).json([])
})
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