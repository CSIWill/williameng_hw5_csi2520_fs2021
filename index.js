const express = require('express');
// const mysql = require("mysql");
const ejs = require('ejs');

// Create express app
const app = express();

// Initialize Body Parser Middleware to parse data sent by users in the request object
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // to parse HTML form data

// Initialize ejs Middleware
app.set('view engine', 'ejs');
app.use('/public', express.static(__dirname + '/public'));

// routes
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get('/my_resume', (req, res) => {
  res.render('./html/my_resume.ejs');
});

app.get('/my_fun_facts', (req, res) => {
  res.render('./html/my_fun_facts');
});

app.get("/my_trivia", (req, res) => {
  // let initialAnswers = [];
  let initialAnswers = 0;
  let score = 0;
  res.render('./html/my_trivia',{userAnswers: initialAnswers});
});
// let userAnswers = [];
// let userAnswerList = [];
app.post('/my_trivia', (req,res) => {
  // userAnswerList.push(req.body.userAnswer);
  res.render('.html/my_trivia',{userAnswers: req.body.userAnswer})
  // res.render('./html/my_trivia', {userAnswers: userAnswerList});
  // res.send(`Your Answer: ${userAnswer}`);
  // if (userAnswer.toUpperCase() == "D") {
  //   res.send(`Your Answer: ${userAnswer}, Correct`);
    // res.send('Correct');  
  // }
  // else {

  //   res.render("./html/my_fun_facts");
  // }
});

// Setup server ports
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
