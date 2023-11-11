const { Schema } = require('mongoose');
const mongoose = require('mongoose');



const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
      username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
      password: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
      cpassword: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
      
})

const User = mongoose.model('User', userSchema);

module.exports = User;