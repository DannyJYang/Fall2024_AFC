const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

///all fruits and vegetables E

app.get("/", (req, res) => {
  res.redirect("/home");
});
app.get("/home", (req, res) => {
  res.send("I am home!");
});
app.get("/about", (req, res) => {
  res.send("I am about!");
});
app.get("/contact", (req, res) => {
  res.send("I am contact!");
});
app.get("/name/:name/bank/:money", (req, res) => {
  const { name, money } = req.params; //destructured
  //   if (isNaN(money))
  //     res.send("Money needs to be a number");
  //   res.send(`I am ${name} and I have $${money} in the bank`);
  res.send(
    isNaN(money)
      ? res.send("Money needs to be a number")
      : res.send(`I am ${name} and I have ${Intl.NumberFormat("en-IN", {style: "currency", currency: "USD",}).format(money)} in the bank`)
  );
});

app.get("/fruit/:doggy", (req, res) => {
  // console.log(req.params.doggy)
  res.end(`I am the ${req.params.doggy} page`);
});

//Catch all. Must put this on bottom as the code is read top down
app.get("*", (req, res) => {
  res.send("No matching route");
});

app.listen(port, console.log(`Basic Server app runnning on port ${port}`));
