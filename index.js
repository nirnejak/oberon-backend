require("dotenv").config({ path: ".env" })

const { ApolloServer } = require("apollo-server")

const resolvers = require("./graphql/resolvers")
const typeDefs = require("./graphql/typeDefs")

const server = new ApolloServer({ typeDefs, resolvers })

server.listen({ port: process.env.PORT }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
