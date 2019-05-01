const express = require('express');

const Joi = require('joi');
const schema = Joi.object().keys({
  username: Joi.string().regex(/(^[a-zA-Z0-9_]+$)/).min(3).max(30).required(),
  password: Joi.string().min(6).required()
});

const users = require('../../models/user.model');

const router = express.Router();

router.post('/signup', (req, res, next) => {
  const result = Joi.validate(req.body, schema);
  if (result.error === null) {
    users.findOne({
      username: req.body.username
    }).then(user => {
      res.json(user);
    })
  } else {
    next(result.error);
  }
});

module.exports = router;