const { gql } = require('apollo-server-express');

// Required Query and Mutation types:

const typeDefs = gql`

  type Query {
    me: User
    users: [User]
    user(username: String!): User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(
        authors: [String],
        description: String!,
        title: String,
        bookId: String!,
        image: String,
        link: String,
      ): Auth
      removeBook(bookId: String!): User
  }

    type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;
