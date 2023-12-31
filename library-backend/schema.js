const typeDefs = `
  type Book {
    title: String!
    published: Int
    author: Author!
    genres: [String]!
  }  

  type Author {
    name: String!
    born: Int
    id: ID!
    bookCount: Int!
    books: [Book!]!
  }

  type User {
    username: String!
    favoriteGenre: String!
    id: ID!
  }
  
  type Token {
    value: String!
  }
  
  type Query {
    bookCount: Int
    authorCount: Int
    allBooks(author: String, genre: String): [Book!]!
    allAuthors: [Author!]
    me: User
  }

  type Subscription {
    bookAdded: Book!
  }

  type Mutation {
    addBook(
        title: String!
        published: Int!
        author: String!
        genres: [String]!
    ): Book
    editAuthor(
        name: String!,
        setBornTo: Int!
    ): Author
    addAuthor(
        name: String!
        born: Int!
    ) : Author
    createUser(
        username: String!
        favoriteGenre: String!
      ): User
      login(
        username: String!
        password: String!
      ): Token
  }
`;

module.exports = typeDefs;
