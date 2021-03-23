const { gql } = require("apollo-server-express");
const { typeDefs: user } = require("./user");
const { typeDefs: todo } = require("./todo");
const { typeDefs: comment } = require("./comment");

const root = gql`
  type Query {
    root: String
  }

  type Mutation {
    root: String
  }
`;

const typeDefs = [root, user, todo, comment];
module.exports = {
  typeDefs,
};
