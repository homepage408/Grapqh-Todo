const { gql } = require("apollo-server-express");
const typeDefs = gql`
  extend type Query {
    todo: [Todo]
    findTodo(id:Int):Todo
  }

  type Todo {
    id: Int
    userId: Int
    title: String
    description: String
    attachment: String
    comments:[Comment]
  }

  extend type Mutation {
    createTodo(userId: Int!, title: String!, description: String): Todo
    updateTodo(id: Int!, title: String!, description: String!): Todo
    deleteTodo(id: Int!): Todo
  }
`;

module.exports = {
  typeDefs,
};
