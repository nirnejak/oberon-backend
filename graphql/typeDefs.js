const { gql } = require("apollo-server")

const typeDefs = gql`
  enum AllowedLivingSituation {
    SINGLE
    ROOMMATES
    FAMILY
  }

  enum AllowedProfession {
    UNEMPLOYED
    EMPLOYED
    STUDENT
  }

  type User {
    email: String
    fullName: String
    age: Int
    isActive: Boolean
    careerScore: Int
    drinkingFrequency: Int
    isNightOwl: Boolean
    livingSituation: AllowedLivingSituation
    profession: AllowedProfession
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
