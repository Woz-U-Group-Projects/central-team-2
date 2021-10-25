var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var assert = require('assert');
var signup = require('../models/signup')
const app = express();



const { models } = require('mongoose');






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

router.get('/', async (req, res) => {
  try {
    await sendItems(req.userId, res);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.get('/profile', function(req, res, next){
  res.render('profile', {title: 'Welcome to your profile'
  });
});



 
  app.post('/signup', async (request, response, next) => {
    const user = new signup(request.body);
    
    
    try {
      await user.save();
      response.send(user);
    } catch (error) {
      response.status(500).send(error);
    } 
});

  
  
 





  module.exports = app;