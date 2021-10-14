var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var assert = require('assert');


const app = express();
var url = 'mongodb:localhost:3000/login';
const loginModel = require("../models/login");

app.get("/", function (req, res) {
    res.render("login");
});






  module.exports = app;