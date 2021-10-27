var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var assert = require('assert');
var signup = require('../models/signup')


const app = express();
var findOrCreate = require('mongoose-findorcreate');
const userModel = require("../models/signup");
const loginModel = require("../models/login")
const mongoose = require("mongoose");

const { models } = require('mongoose');
const { db } = require('../models/signup');
const { response } = require('express');







app.get("/",(req, res) => {
  res.render('index' , {title: 'Home'})
 
});

app.get('/login', function(req, res, next){
  res.render('login', {title: 'Login'
  });
});



app.get('/signup', function(req, res, next){
  res.render('signup', {title: 'Sign up'
  });
});







app.post('/signup', async (request, response, next) => {
  const user = new userModel(request.body);
  
  try {
    await user.save();
    response.redirect('/login');
  } catch (error) {
    response.status(500).send(error);
  } 
});




app.post('/login',function(req,res){
  var username = req.body.username;
  var password = req.body.password;
  console.log("User name = "+username+", password is "+password);
  res.redirect("profile")
  });

  app.get('/profile', function(req, res, next){
  res.render('profile', {title: 'Welcome to your profile'
  });
});
 
app.get('/profile', function (req, res, next) {
  models.user
    .findByPk(parseInt(req.params.id))
    .then(user => {
      if (user) {
        res.render('profile', {
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          username: user.username
        });
      } else {
        res.send('User not found');
      }
    });
  });





  module.exports = app;