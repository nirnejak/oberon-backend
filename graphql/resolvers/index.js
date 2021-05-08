const userResolvers = require("./users")

const resolvers = {
  Query: {
    users: () => [],
  },
  Mutation: {
    ...userResolvers,
  },
}

module.exports = resolvers
