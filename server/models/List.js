const { Schema, model } = require('mongoose');
const listSchema = new Schema({
    animes:[{type: Schema.Types.ObjectId, ref: 'Anime'}],
    name: {
        type: String,
        required: true,
        trim: true,
    },
    createdBy: {
        type: String,
    }
});

const List = model('List', listSchema);

module.exports = List;