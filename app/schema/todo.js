const { gql } = require("apollo-server-express");
const typeDefs = gql`
  extend type Query {
    todo: [Todo]
  }

  type Todo {
    id: Int
    userId: Int
    title: String
    description: String
    attachment: String
  }

  extend type Mutation {
    createTodo(userId: Int!, title: String!, description: String!): Todo
    updateTodo(id: Int!, title: String!, description: String!): Todo
    deleteTodo(id: Int!): Todo
  }
`;

module.exports = {
  typeDefs,
};
