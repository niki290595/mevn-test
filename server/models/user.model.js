const mongoose = require('../config/db');

let UserSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true
  },
  password: String
});

module.exports = mongoose.model('User', UserSchema);
