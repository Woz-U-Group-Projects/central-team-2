var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
const mongoose = require("mongoose");
const userModel = require("./models/signup");
const bodyParser= require('body-parser');
const handlebars  = require('express-handlebars');


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







 
// place you mongodb user password. ex: dbuser:123niuh2@...
mongoose.connect('mongodb://dbuser:2sQ5OgGYUdqH8slP@cluster0-shard-00-00.f0ul2.mongodb.net:27017,cluster0-shard-00-01.f0ul2.mongodb.net:27017,cluster0-shard-00-02.f0ul2.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-8cxe5c-shard-0&authSource=admin&retryWrites=true&w=majority',
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





module.exports = app;
