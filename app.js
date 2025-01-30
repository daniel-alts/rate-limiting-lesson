const express = require('express');
const rateLimiter = require('express-rate-limit')

const port = 4000

const app = express()

const limiter = rateLimiter({
    windowMs: 1 * 60 * 1000,
    limit: 1,
    message: { message: 'too many requests'},
    keyGenerator: (req, res) => req.ip,
})

// app.use(limiter) // use globally


app.get('/', (req, res) => {
    return res.json({
        message: 'successful response'
    })
})

app.get('/blogs', limiter, (req, res) => {
    return res.json({
        message: 'blogs successful response'
    })
})


app.listen(port, () => {
    console.log(`app is listening on port ${port}`)
})
