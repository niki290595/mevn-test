import jwt from 'jsonwebtoken'

const secret = 'dz5Y?B9R$.Cw$wR$W^B~3dC)H`RzP#';

export default async function getToken(user) {
  const payload = {
    _id: user._id,
    email: user.email
  };

  return await jwt.sign(payload, secret, {expiresIn: '1d'});
}
