const express = require("express");
// const mysql = require("mysql");
const ejs = require("ejs");

// Create express app
const app = express();

// Initialize Body Parser Middleware to parse data sent by users in the request object
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // to parse HTML form data

// Initialize ejs Middleware
app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));

// routes
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/my_resume", (req, res) => {
  res.render("./html/my_resume.ejs");
});

app.get("/my_fun_facts", (req, res) => {
  res.render("./html/my_fun_facts");
});

app.get("/my_trivia", (req, res) => {
  res.render("./html/my_trivia");
});

app.post("/my_trivia", (req,res) => {
  let userAnswer = req.body.userAnswer1
  if (userAnswer == "D") {
    res.send(`Correct`);  
  }
  else {
    res.send(`Incorrect`);
  }
});

// Setup server ports
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
