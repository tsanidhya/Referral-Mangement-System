const jwt = require('jsonwebtoken');

const secretKey = 'secret-key';

async function generateToken(user) {
    //validate username and password from DB
    let validated = true;
    if(validated)
        return jwt.sign(user, secretKey);
    else
        throw new Error('Invalid credentials');
}


async function authenticateToken(req, res, next) {
  const token = req.headers['authorization'];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

module.exports = {
  generateToken,
  authenticateToken
};
