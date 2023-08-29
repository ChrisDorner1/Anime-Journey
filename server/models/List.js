const { Schema, model } = require('mongoose');

const listSchema = new Schema({
    animes: {
        type: Array,
        required: true,
        minLength: 1,
        maxLength: 40,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    createdBy: {
        type: String,
    }
})

const List = model('List', listSchema);

module.exports = List;