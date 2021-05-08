const userResolvers = require("./users")

const resolvers = {
  AllowedLivingSituation: {
    SINGLE: "Single",
    SPOUSE: "Spouse",
    ROOMMATES: "Roommates",
    FAMILY: "Family",
  },
  AllowedProfession: {
    UNEMPLOYED: "Unemployed",
    EMPLOYED: "Employed",
    STUDENT: "Student",
  },
  Query: {
    users: () => [],
  },
  Mutation: {
    ...userResolvers,
  },
}

module.exports = resolvers
