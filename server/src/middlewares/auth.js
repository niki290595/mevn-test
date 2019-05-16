import {verifyToken} from "../config/jwt";

async function processToken(req, res, next) {
  try {
    const authHeader = req.get('authorization');
    const token = authHeader.split(' ')[1];
    req.user = await verifyToken(token);
  } catch (e) {}

  next();
}

function isLoggedIn(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.status(401);
    throw new Error('Un-Authorized');
  }
}

module.exports = {
  processToken,
  isLoggedIn
};