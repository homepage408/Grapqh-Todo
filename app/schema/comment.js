const { gql } = require("apollo-server-express");

const typeDefs = gql`
  extend type Query {
    comment: [Comment]
    findComment(id:Int!): Comment
  }

  type Comment {
    id: Int!
    todoId: Int!
    body: String
  }

  extend type Mutation {
    createComment(todoId: Int!, body: String!): Comment
    updateComment(id: Int!, todoId: Int!, body: String): Comment

    deleteComment(id: Int!): Comment
    
  }
`;

module.exports = {
  typeDefs,
};
