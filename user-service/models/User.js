const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type: String,
        required: true,
        unique: true,  // Email should be unique
        lowercase: true,  // Convert email to lowercase
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,  // Minimum length of password
      },

})

const User = mongoose.model('User',UserSchema)
module.exports = User;