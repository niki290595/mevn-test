import express from 'express'
import User from '../../models/user.model'
import { getToken } from '../../config/jwt'

const router = express.Router();

router.post('/signup', async (req, res, next) => {
  try {
    if (isInvalidData(req.body))
      throw new Error('Invalid data');

    const user = await new User({
      email: req.body.email,
      password: req.body.password
    }).save();

    const token = await getToken(user);
    res.json({ token, user });
  } catch (e) {
    res.status(422);
    next(e);
  }
});

router.post('/login', async (req, res, next) => {
  try {
    if (isInvalidData(req.body))
      throw new Error('Invalid data');

    const user = await User.findOne({ email: req.body.email });
    if (!user || !await user.comparePassword(req.body.password))
      throw new Error('User not found');

    const token = await getToken(user);
    res.json({ token, user });
  } catch (e) {
    res.status(422);
    next(e);
  }

});

function isInvalidData(data) {
  return data === null ||
    data.email === null ||
    data.password === null;
}

module.exports = router;