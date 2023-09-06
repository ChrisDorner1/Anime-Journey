const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    username: {
        type: String, 
        required: true, 
        trim: true,
        unique: true,
    },
    email: {
        type: String, 
        required: true, 
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    password: {
        type: String, 
        required: true, 
        minlength: 6,
    },
    lists: [{type: Schema.Types.ObjectId, ref: 'List'}],
    watched: [{type:Schema.Types.ObjectId}]
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
  
const User = model('User', userSchema);
  
module.exports = User;