var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var mongoose = require("mongoose");

var tasksRouter = require("./routes/tasks");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');



app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/tasks", tasksRouter);

//var mongoDB = "mongodb://127.0.0.1/database";
var mongoDB =
  "mongodb://dbuser:zyKfuq68R8L4wgDk@cluster0-shard-00-00.f0ul2.mongodb.net:27017,cluster0-shard-00-01.f0ul2.mongodb.net:27017,cluster0-shard-00-02.f0ul2.mongodb.net:27017/tasks?ssl=true&replicaSet=atlas-8cxe5c-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("connected", () => console.log(`Mongoose connection open to ${mongoDB}`));
db.on("disconnected", () => console.log("Mongoose connection disconnected"));
db.on("error", console.error.bind(console, "Mongoose connection error:"));

module.exports = app;
