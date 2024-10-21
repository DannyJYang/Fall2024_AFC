// FOUNDATION
const express = require ('express')
const app = express()
const port = process.env.PORT || 3000
const data = require('./fakdata.json')
let newId = 3;
//built-in body parser
//if json from client
app.use(express.json())
//if url-encoded
app.use(express.urlencoded({extended:true}))


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

// Create:
//     1) Route - /api/items POST method
app.post('/api/items/', (req,res) => {
// 1.5) Get data from client
// 1.75) Database sends something back
// 2) JSON -> client

    let newItem = {
        id: ++newId,
        // description: "Clean the house",
        description: req.body.description,
        isComplete: false
    }
    let items = [...data, newItem]
    res.json(items);
})


// 3) Send back what was put into the database (could be correct, could be incorrect)
// 4) One object - DATA (id, description, is_complete), receipt from database



//listener
app.listen(port, console.log(`Bucket list server on port ${port}`))
