const { gql } = require("apollo-server")

const typeDefs = gql`
  "Allowed Values for Living Situation"
  enum AllowedLivingSituation {
    SINGLE
    SPOUSE
    ROOMMATES
    FAMILY
  }

  "Allowed Values for Profession"
  enum AllowedProfession {
    UNEMPLOYED
    EMPLOYED
    STUDENT
  }

  "User Details"
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

  "Authentication Response"
  type AuthInformation {
    token: String
    email: String
  }

  type Query {
    users: [User]
  }

  "Authentication Input Data"
  input AuthInput {
    login: String
    password: String
  }

  "Data Required for User Registration"
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

export default typeDefs
