var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
const mongoose = require("mongoose");
const userModel = require("./models/signup");
const bodyParser= require('body-parser');
const handlebars  = require('express-handlebars');
var passport = require("passport");

// add user from database
const username = "dbuser";
// add you user password 
const password = "2sQ5OgGYUdqH8slP";
// add cluster name
const cluster = "cluster0";
// add database name
const dbname = "myFirstDatabase";


var usersRouter = require("./routes/users")
var indexRouter = require("./routes/index")
var loginRouter = require("./routes/login")
var tasksRouter = require("./routes/tasks");
var signupRouter = require("./routes/signup")


var app = express();

var corsOptions = {
  origin: "http://localhost:3001"
};

// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});





app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join( __dirname,'./dist/client')));
app.use(cors());

app.use("/users", usersRouter)
app.use("/", indexRouter);
app.use("/tasks", tasksRouter);
app.use("/login", loginRouter);
app.use("/signup", signupRouter);





var mongo = require('mongodb');
const Login = require("./models/login");







 
// place you mongodb user password. ex: dbuser:123niuh2@...
mongoose.connect('mongodb://dbuser:neTOwbaPUpybPooF@cluster0-shard-00-00.f0ul2.mongodb.net:27017,cluster0-shard-00-01.f0ul2.mongodb.net:27017,cluster0-shard-00-02.f0ul2.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-8cxe5c-shard-0&authSource=admin&retryWrites=true&w=majority',
{
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

function initial() {
  Signup.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Signup({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Login({
        name: "moderator"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Signup({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}




module.exports = app;