const { gql } = require("apollo-server")

const typeDefs = gql`
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

  type Mutation {
    addBook(input: BookInput): Book
    updateBook(slug: String, input: BookInput): Book
  }
`

module.exports = typeDefs
