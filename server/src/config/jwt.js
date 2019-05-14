import jwt from 'jsonwebtoken'

const secret = 'dz5Y?B9R$.Cw$wR$W^B~3dC)H`RzP#';

async function getToken(user) {
  const payload = {
    _id: user._id,
    email: user.email
  };

  return await jwt.sign(payload, secret, {expiresIn: '1d'});
}

async function verifyToken(token) {
  try {
    return await jwt.verify(token, secret);
  } catch (e) {
    //TODO: нужно как-то отреагировать на просьбу к доступе
    throw new Error("Invalid token");
  }
}

module.exports = {
  getToken,
  verifyToken
};