// FOUNDATION
const express = require ('express')
const app = express()
const port = process.env.PORT || 3000
const data = require('./fakdata.json')


//route handlers
app.get("/", (req,res) => {
    res.redirect('/api/items')
})

//Read
// 1) Route - /api/items GET method
app.get('/api/items', (req,res) => {
// 1.5) Get data from DB
// 2) JSON
// 3) Send Everything back
// 4) Array of objects
    res.json(data)
})

//listener
app.listen(port, console.log(`Bucket list server on port ${port}`))
