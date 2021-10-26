var express = require("express");
var router = express.Router();
var mongo = require("mongodb");
var assert = require("assert");
const loginModel = require("../models/login");
const app = express();

var url = "http://localhost:3001/login";

app.get('/', function(req, res){
  res.render('login');
});


  

  

  

module.exports = app;
