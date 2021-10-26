
var express = require("express");
const router = express.Router();
var mongo = require('mongodb');
const index = require('./index');
const app = express();
const userModel = require("../models/signup");
const { models } = require("mongoose");
var findOrCreate = require('mongoose-findorcreate')

var url = "http://localhost:3001/signup";

app.get("/",(req, res) => {
  res.render('signup' , {title: 'Signup'})
 
});




  

 

  



  module.exports = app;





  