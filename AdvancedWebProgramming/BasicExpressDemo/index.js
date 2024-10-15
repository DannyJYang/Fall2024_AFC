// FOUNDATION
const express = require("express")  //importing express
const app = express()  //creating an instance of the application
// console.log(process)
const port = process.env.PORT || 3000  //if using hosting sites (AWS or GoDaddy), use the port assigned by that hosting site. Else, use the developer port 3000

// ROUTE HANDLERS
app.get("/", (req, res) => {  //.get takes address and function. In this instance, we are using the root route
    console.log(req)
    // res.end("I am from the backend???")
    res.redirect("/home")
})
app.get("/home", (req,res) => {
    res.end("I am in home! Redirected!")
})

// LISTENERS
app.listen(port, console.log(`Basic Server app runnning on port ${port}`))
