const mongoose = require ('mongoose')

const UserSchema = new mongoose.Schema({
    
    username: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    mobile:{
        type: String,
        required: false,

    },
    email: {
        type: String,
        requires: true,
    }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;