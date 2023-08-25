const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const List = require('./List');

const userSchema = new Schema({
    firstName: {
        type: String, 
        required: true, 
        trim: true,
    },
    lastName: {
        type: String, 
        required: true, 
        trim: true,
    },
    email: {
        type: String, 
        required: true, 
        unique: true,
    },
    password: {
        type: String, 
        required: true, 
        minlength: 6,
    },
    lists: [List.schema]
});

userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
      this.password = await bcrypt.hash(this.password, 10);
    }
  
    next();
});

userSchema.methods.isCorrectPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};
  
const User = mongoose.model('User', userSchema);
  
module.exports = User;