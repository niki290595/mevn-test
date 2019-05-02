import db from '../config/db'

module.exports = db.model('Post',
  new db.Schema({
    text: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
  })
);
