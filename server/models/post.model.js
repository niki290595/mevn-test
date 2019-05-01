const mongoose = require('../config/db');

let PostSchema = new mongoose.Schema({
  text: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Post', PostSchema);
