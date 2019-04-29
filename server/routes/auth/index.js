const express = require('express');

const Joi = require('joi');
const schema = Joi.object().keys({
  username: Joi.string().regex(/(^[a-zA-Z0-9_]+$)/).min(3).max(30).required(),
  password: Joi.string().min(6).required()
});

const db = require('../../config/db'); //подключение не работает
const users = db.get('users');
users.createIndex('username', { unique: true });

const router = express.Router();

router.get('/', async (req, res) => {
  res.json({
    message: "cool"
  });
});

router.post('/signup', (req, res, next) => {
  const result = Joi.validate(req.body, schema);
  if (result.error === null) {
    users.findOne({
      username: req.body.username
    }).then(user => {
      res.json({ user });
    });
  } else {
    next(result.error);
  }
});

module.exports = router;