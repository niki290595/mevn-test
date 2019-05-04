import express from 'express'
import User from '../../models/user.model'

const router = express.Router();

router.post('/signup', async (req, res, next) => {
  try {
    await new User({
      email: req.body.email,
      password: req.body.password
    }).save();

    res.status(201).send();
  } catch (e) {
    res.status(409);
    next(e);
  }
});

module.exports = router;