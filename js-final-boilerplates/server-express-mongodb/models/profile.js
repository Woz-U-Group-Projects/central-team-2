const mongoose = require ('mongoose')
const Schema = mongoose.Schema;

let ProfileSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    mobile:{
        type: String,
        required: false,

    },
    email: {
        type: String,
        required: true,
    }
    
    
});



module.exports = mongoose.model('Profile', ProfileSchema) ;