const mongoose = require ('mongoose');
var Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
    
    
    username: {
        type: String,
        required: true
    },
    firstname:{
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: false

    },
    email: {
        type: String,
        requires: true
    }
});

const User = mongoose.model("User", UserSchema);

// Duplicate the ID field.
UserSchema.virtual("id").get(function() {
    return this._id.toHexString();
  });

  // Ensure virtual fields are serialised.
UserSchema.set("toJSON", {
    virtuals: true
  });

module.exports = User;