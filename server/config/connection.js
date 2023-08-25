const {connect, connection, mongoose} = require('mongoose');

const connectionString = mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/watchlistDB');

connect(connectionString);

module.exports = connection;

