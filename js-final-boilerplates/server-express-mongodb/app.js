var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
const mongoose = require("mongoose");
const userModel = require("./models/signup")



// add user from database
const username = "";
// add you user password 
const password = "";
// add cluster name
const cluster = "";
// add database name
const dbname = "";



var indexRouter = require("./routes/index")
var loginRouter = require("./routes/login")
var tasksRouter = require("./routes/tasks");
var signupRouter = require("./routes/signup")


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});



app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/", indexRouter);
app.use("/tasks", tasksRouter);
app.use('/login', loginRouter);
app.use("/signup", signupRouter);




 
// place you mongodb user password. ex: dbuser:123niuh2@...
mongoose.connect('',
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


app.listen(3000, () => {
  console.log("Server is running at port 3000");
});


module.exports = app;
