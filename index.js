const express = require('express');
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
  res.render('./html/my_fun_facts.ejs');
});

app.get('/my_trivia', (req, res) => {
  let initialAnswers = 0;
  res.render('./html/my_trivia.ejs',{
    urAnswer1: initialAnswers,
    urAnswer2: initialAnswers,
    urAnswer3: initialAnswers,
    urAnswer4: initialAnswers,
    urAnswer5: initialAnswers
  });
});


app.post('/my_trivia', (req,res) => {
  let newAnswer1 = req.body.userAnswer;
  let newAnswer2 = req.body.userAnswer2;  
  let newAnswer3 = req.body.userAnswer3;  
  let newAnswer4 = req.body.userAnswer4;  
  let newAnswer5 = req.body.userAnswer5;    
  res.render('./html/my_trivia', {
    urAnswer1: newAnswer1,
    urAnswer2: newAnswer2,
    urAnswer3: newAnswer3,
    urAnswer4: newAnswer4,
    urAnswer5: newAnswer5,
  });
});

// Setup server ports
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
