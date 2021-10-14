var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var assert = require('assert');
var signup = require('../models/signup')
const app = express();



router.get('/', function(req, res, next){
  res.render('index', {title: 'Sign up'
  });
});

router.get('/', function(req, res, next) {
  res.send(JSON.stringify(
    signup
   ));
  });

  router.get('/', function(req, res, next){
    res.render('login', {title: 'Log in' 
   });
  });

  
  
 





  module.exports = router;