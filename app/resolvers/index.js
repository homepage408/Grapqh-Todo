const lodash = require("lodash");

const { resolvers: todo } = require("./todo");
const { resolvers: user } = require("./user");
const { resolvers: comment } = require("./comment");

const resolvers = lodash.merge(todo, user, comment);

module.exports = {
  resolvers,
};
