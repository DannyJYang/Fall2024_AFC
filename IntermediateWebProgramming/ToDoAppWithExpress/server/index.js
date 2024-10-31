//FOUNDATION
//Where is all my stuff coming from?
//What do I need to run my server?
const express = require("express")
const app = express()
const port = process.env.PORT || 3000

if(!process.env.NODE_ENV || process.env.NODE_ENV !== "production") { //if deployed, do not run the logger
    const logger = require ("morgan")
    app.use(logger("dev"));
}

// body-parser
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//When working with a database you need to know 3 things:
// 1: Connection: at pgconnection.js file
const conn = require("./connections/pgconnection")

// 2: Blueprints
// Already done by the DBA
// {
//     id: Number,
//     note: string - 255,
//     is_completed: boolean
// }

// 3: Queries

//ROUTE HANDLERS
//When we go to a certain route, what happens?
app.get("/", (req,res) => {
    res.send("server running")
})

app.get("/api/todos", (req,res) => {
    let query = `SELECT * FROM todo;`

    conn.query(query)
        .then(data => res.status(200).json(data.rows))
        .catch(err => {
            console.log("Error reading data from database: ", err.message)
            res.status(400).json({message: "Error reading data from database!!!!!!!"})
        })
})

//CRUD
//READ
app.get("/api/todos", (req,res) => {
    res.send("API Todos Route")
})

//CREATE
app.post("/api/todos", (req,res) => {
    let query = `INSERT INTO todo (note, is_completed)
                        VALUES('${req.body.note}', false)
                        RETURNING *;`
    conn.query(query)
        .then(data => res.status(200).json(data.rows[0]))
        .catch(err => {
            console.log("Error creating data to database: ", err.message)
            res.status(445).json({message: "Unable to CREATE data in database at this time"})
        })
})


//LISTENER
app.listen(port, console.log(`Todo App with Express on port ${port}`))