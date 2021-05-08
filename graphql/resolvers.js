const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
]

const resolvers = {
  Query: {
    books: () => books,
    book: (title) => {
      const index = books.find((book) => title === book.title)
      if (index !== -1) {
        return books[index]
      } else {
        return {}
      }
    },
  },
}

module.exports = resolvers
