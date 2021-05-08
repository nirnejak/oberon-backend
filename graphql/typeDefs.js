const { gql } = require("apollo-server")

const typeDefs = gql`
  type User {
    email: String
    fullName: String
    age: Int
    isActive: Boolean
    careerScore: Int
    drinkingFrequency: Int
    isNightOwl: Int
    livingSituation: Int
    profession: String
  }

  type AuthInformation {
    token: String
    email: String
  }

  type Book {
    slug: String
    title: String
    author: String
  }

  type Query {
    books: [Book]
    book(slug: String): Book
  }

  input BookInput {
    title: String
    author: String
  }

  input AuthInput {
    login: String
    password: String
  }

  input UserInput {
    email: String
    fullName: String
    age: Int
    careerScore: Int
    drinkingFrequency: Int
    isNightOwl: Int
    livingSituation: Int
    profession: String
  }

  type Mutation {
    addBook(input: BookInput): Book
    updateBook(slug: String, input: BookInput): Book
    createUser(input: UserInput): User
    tokenCreate(input: AuthInput): AuthInformation
  }
`

module.exports = typeDefs
