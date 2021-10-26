var express = require("express");
const router = express.Router();
var mongo = require('mongodb');
const index = require('./index');
const app = express();
const profile = require('../models/profile');
const userModel = require("../models/signup");

app.get('/', function(req, res, next){
    res.render('profile', {title: 'Welcome to your profile'
    });
  });




module.exports = app;