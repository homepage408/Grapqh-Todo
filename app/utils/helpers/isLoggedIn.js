const { verifyJWT } = require("./../middleware/authJwt");

const isLoggedIn = (token) => {
  const result = verifyJWT(token);
  return {
    loggedIn: true,
    user: result,
  };
};

module.exports = {
  isLoggedIn,
};
