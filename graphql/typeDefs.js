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

  type Query {
    users: [User]
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
    createUser(input: UserInput): User
    tokenCreate(input: AuthInput): AuthInformation
  }
`

module.exports = typeDefs
