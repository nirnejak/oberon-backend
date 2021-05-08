const slugify = require("slugify")

const books = [
  {
    slug: "the-awakening",
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    slug: "city-of-glass",
    title: "City of Glass",
    author: "Paul Auster",
  },
]

const resolvers = {
  Query: {
    books: () => books,
    book: (slug) => {
      const index = books.find((book) => book.slug === slug)
      if (index !== -1) {
        return books[index]
      } else {
        return {}
      }
    },
  },
  Mutation: {
    addBook: ({ title, author }) => {
      const slug = slugify(title)
      return {
        slug,
        title,
        author,
      }
    },
    updateBook: ({ slug, title, author }) => {
      return {
        slug,
        title,
        author,
      }
    },
  },
}

module.exports = resolvers
