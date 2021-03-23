const lodash = require("lodash");

const { resolvers: todo } = require("./todo");
const { resolvers: user } = require("./user");

const resolvers = lodash.merge(todo, user);

module.exports = {
  resolvers,
};
