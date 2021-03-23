const jwt = require("jsonwebtoken");

const generateJWT = (user) => {
  const token = jwt.sign(user, process.env.JWT_SECRET_KEY, {
    algorithm: "HS256",
    expiresIn: 60 * 60 * 12,
  });
  return token;
};

const verifyJWT = (tokenParam) => {
  // const auth = req.headers.authorization;

  const token = tokenParam.split(" ")[1];
  const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
  //   req.user = { ...payload };
  return payload;
};

module.exports = { generateJWT, verifyJWT };
