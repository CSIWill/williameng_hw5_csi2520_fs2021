// // console.log('placeholder');
// const http = require('http');
// const path = require('path');
// const fs = require('fs');

// const server = http.createServer((req,res) => {
//     // create a dynamic file path
//     // === is like if else
//     let filePath = path.join(__dirname, 'public', req.url === '/'?'index.html' : req.url);

//     // create dynamic Content-Type using extension of the files to be served
//     let extName = path.extname(filePath);

//     // Initial Content-Type
//     let contentType = 'text/html';

//     // check ext and set content type 
//     switch (extName) {
//         case '.js': 
//             contentType = 'text/javascript';
//             break;
//         case '.css':
//             contentType = 'text/css';
//             break;
//         case '.json':
//             contentType = 'application/json';
//             break;
//         case '.png': 
//             contentType = 'image/png';
//             break;
//         case '.jpg': 
//             contentType = 'image/jpg';
//             break; 
//     }



//     // Load the files 
//     fs.readFile(filePath, (err, content)=>{
//         if (err) {
//             if (err.code == 'ENOENT') { // page not found
//                 // Load an error page say 404 html
//                 fs.readFile(path.join(__dirname, 'public', '404.html'), (err,content) => {
//                     res.writeHead(200, { 'Content-Type': 'text/html' });
//                     res.end(content, 'utf8');
//                 });
//             } else {
//                 // some sort of server error like 500
//                 res.writeHead(500);
//                 res.end(`Server Error ${err.code}`)
//             } 

//         } else{ // No error success loading
//             res.writeHead(200, { 'Content-Type': contentType });
//             res.end(content, 'utf8');
//         }
//     })
// });





// /**
//          * Note Imp - Instead of running in terminal node index.js to start the server 
//          * // Use -- nodemon index.js [However you cannot use this in terminal since we didn't install globally]
//          * // This way you don't have to manually restart the server everytime your update your backend
//          * So go to package.json and locate the scripts part and add the scripts as shown in the package.json file
//          * 
//          * To run ascript, in terminal type -- npm run scriptName 
//          * So for us we want to use -- npm run dev
//          * Now if you change anything in the backend, you dont have to restart your server as nodemon is monitoring it 
//          *  */ 

// // Let host decide the port or use 3000
// const PORT = process.env.PORT || 3000; 

// // Start the server and give the prompt
// server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require("express");
const mysql = require("mysql");
const ejs = require("ejs");

// Create express app
const app = express();

// // Create a database connection configuration
// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root123",
//   database: "testfullstack_students", // comment out if running example 1
// });

// // Establish connection with the DB
// db.connect((err) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log(`Successful connected to the DB....`);
//   }
// });

// Initialize Body Parser Middleware to parse data sent by users in the request object
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // to parse HTML form data

// Initialize ejs Middleware
app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));

// routes
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/insertstudents", (req, res) => {
  let data = { name: req.body.studentName, email: req.body.studentEmail };
  let sql = `INSERT INTO students SET ?`;
  let query = db.query(sql, data, (err, result) => {
    if (err) {
      throw err;
    }
    res.send(`student entry was inserted to the db...`);
  });
});

app.post("/updatestudents", (req, res) => {
  let sql = `UPDATE students SET email = '${req.body.studentNewEmailUpdate}'  WHERE id = ${req.body.studentID}`;
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.send(`student entry was updated in the db...`);
  });
});

app.post("/deletestudents", (req, res) => {
  let sql = `DELETE FROM students WHERE email = '${req.body.studentEmail}'`;
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.send(`student entry was deleted in the db...`);
  });
});

app.get("/readstudents", (req, res) => {
  let sql = `SELECT * FROM students`;
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.render("readData", { data: result });
  });
});

// Setup server ports
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
