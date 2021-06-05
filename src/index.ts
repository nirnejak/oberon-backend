import dotenv from "dotenv"

import { ApolloServer } from "apollo-server"

import resolvers from "./graphql/resolvers"
import typeDefs from "./graphql/typeDefs"

const server = new ApolloServer({ typeDefs, resolvers })

dotenv.config({ path: ".env" })

server.listen({ port: process.env.PORT }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
