var express = require('express');
var router = express.Router();
const app = express();
var jwt = require("jsonwebtoken"); 

var models = require('../models/signup');
/* GET users listing. */
app.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
  


  
app.get('/profile/:id', function (req, res, next) {
  models.signup
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

app.post('/login', function(req, res, next) {
  models.users
    .findOne({
      where: {
        username: req.body.username,
        password: req.body.password
      }
    })
    .then(user => {
      if (user) {
        res.redirect('profile/' + user.UserId); //<---Change this line to redirect to the profile
      } else {
        res.send('Invalid login!');
      }
    });
});

router.get('/logout', function (req, res, next) {
  res.cookie('jwt', "", { expires: new Date(0) });
  res.send('Logged out');
  });

module.exports = app;