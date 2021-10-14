
var express = require("express");
var router = express.Router();
var mongo = require('mongodb');
const app = express();
const userModel = require("../models/signup");


app.get('/', function(req, res, next){
    res.render('signup', {title: 'Sign up'
    });
  });

app.post('/', async (request, response) => {
    const user = new userModel(request.body);
    try {
      await user.save();
      response.send(user);
    } catch (error) {
      response.status(500).send(error);
    }
});

app.get("/users", async (request, response) => {
    const users = await userModel.find({});
  
    try {
      response.send(user);
    } catch (error) {
      response.status(500).send(error);
    }
  });

 

  



  module.exports = app;





  