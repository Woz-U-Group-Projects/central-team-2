const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const authJwt = require("./authJwt");
const verifySignUp = require("./verifySignUp");

const db = {};

db.mongoose = mongoose;

db.user = require("../models/signup");

db.login = require("../models/login");

db.LOGIN = ["user", "admin", "moderator"];

module.exports = {
    db, 
    authJwt,
    verifySignUp
};