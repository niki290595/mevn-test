const express = require('express');
const Joi = require('joi');
const bcrypt = require('bcryptjs');
const User = require('../../models/user.model');

const schema = Joi.object().keys({
  username: Joi.string().regex(/(^[a-zA-Z0-9_]+$)/).min(3).max(30).required(),
  password: Joi.string().min(6).required()
});


const router = express.Router();

router.post('/signup', async (req, res, next) => {
  const result = Joi.validate(req.body, schema);
  if (result.error !== null) {
    next(result.error);
    return
  }

  let user = await User.findOne({
    username: req.body.username
  });
  if (user) {
    const err = new Error('That username already used. Please choose another one.');
    next(err);
    return
  }

  let password = await bcrypt.hash(req.body.password, 12);
  user = new User({
    username: req.body.username,
    password: password
  });
  await user.save();
  res.status(201).send();

});

module.exports = router;