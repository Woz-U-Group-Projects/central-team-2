const mongoose = require ('mongoose')
var Schema = mongoose.Schema;

const LoginSchema = new mongoose.Schema({
    
    username: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
    
});

const Login = mongoose.model("Login", LoginSchema);

module.exports = Login;