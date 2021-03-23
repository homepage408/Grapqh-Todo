const { gql } = require("apollo-server-express");
const typeDefs = gql`
  extend type Query {
    user: [User]
  }

  type AuthPayload {
    id: Int
    username: String
    email: String!
    token: String
  }

  type User {
    id: Int
    username: String
    email: String
    password: String
    salt: String
    phone: String
    todos: [Todo]
  }

  extend type Mutation {
    createUser(
      username: String!
      email: String!
      password: String!
      salt: String
      photo: String
    ): User

    updateUser(
      id: Int
      username: String!
      email: String!
      password: String!
    ): User

    deleteUser(id: Int): User

    login(email: String!, password: String!): AuthPayload
  }
`;

module.exports = {
  typeDefs,
};
