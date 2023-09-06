const mongoose = require('mongoose');
//edit mongodb link from mern shopping
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/anime-journey', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
