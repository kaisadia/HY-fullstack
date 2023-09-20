const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { GraphQLError } = require("graphql");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

mongoose.set("strictQuery", false);
const Book = require("./models/book");
const Author = require("./models/author");
const User = require("./models/user");

require("dotenv").config();

const MONGODB_URI = process.env.MONGODB_URI;
console.log("connecting to", MONGODB_URI);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connection to MongoDB:", error.message);
  });

const typeDefs = `
  type Query {
  bookCount: Int!
  authorCount: Int!
  allBooks (author: String, genre: String): [Book!]
  allAuthors: [Author!]
  me: User
  }

  type Book {
    title: String!
    author: Author!
    published: Int!
    genres: [String!]!
    id: ID!
  }

  type Author {
    name: String!
    born: Int
    id: ID!
  }

  type User {
    username: String!
    favoriteGenre: String!
    id: ID!
  }

  type Token {
    value: String!
  }
  
  type Mutation {
    addBook(
      title: String!
      published: Int!
      author: String!
      genres: [String]
    ) : Book!,

    editAuthor (
      name: String!
      setBornTo: Int!
    ): Author

    createUser (
      username: String!
      favoriteGenre: String!
  ): User

  login(
    username: String!
    password: String!
  ): Token
  }
`;

const resolvers = {
  Query: {
    bookCount: () => Book.collection.countDocuments(),
    authorCount: () => Author.collection.countDocuments(),
    allBooks: async (root, args) => {
      if (args.author && args.genre) {
        const author = await Author.findOne({ name: args.author });
        return Book.find({
          $and: [
            { author: { $in: author._id } },
            { genres: { $in: args.genre } },
          ],
        }).populate("author");
      }

      if (args.author) {
        const author = await Author.findOne({ name: args.author });
        return Book.find({ author: { $in: author._id } }).populate("author");
      }

      if (args.genre) {
        return Book.find({ genres: { $in: args.genre } }).populate("author");
      }

      return Book.find({}).populate("author");
    },
    allAuthors: async (root, args) => {
      return Author.find({});
    },
    me: (root, args, context) => {
      return context.currentUser;
    },
  },

  Mutation: {
    addBook: async (root, args, context) => {
      if (!context.currentUser) {
        throw new GraphQLError("not authenticated");
      }
      let author = await Author.findOne({ name: args.author });

      if (!author) {
        author = new Author({ name: args.author });

        try {
          await author.save();
        } catch (error) {
          throw new GraphQLError("adding author failed", {
            extensions: {
              code: "BAD_USER_INPUT",
              invalidArgs: args,
            },
          });
        }
      }

      const book = new Book({ ...args, author });
      try {
        await book.save();
        console.log(author);
      } catch (error) {
        console.log(author);
        throw new GraphQLError("adding book failed", {
          extensions: {
            code: "BAD_USER_INPUT",
            invalidArgs: args,
          },
        });
      }
      return book;
    },

    editAuthor: async (root, args, context) => {
      if (!context.currentUser) {
        throw new GraphQLError("not authenticated");
      }
      const { name, setBornTo } = args;
      const authorToUpdate = await Author.findOne({ name: name });

      if (!authorToUpdate) return null;

      if (authorToUpdate) {
        authorToUpdate.born = setBornTo;
        try {
          await authorToUpdate.save();
        } catch (error) {
          throw new GraphQLError(error.message, {
            extensions: {
              code: "BAD_USER_INPUT",
              invalidArgs: args,
            },
          });
        }
      }
    },
    createUser: async (root, args) => {
      const user = new User({ ...args });
      try {
        await user.save();
      } catch (error) {
        throw new GraphQLError("Creating the user failed", {
          extensions: {
            code: "BAD_USER_INPUT",
            invalidArgs: args,
          },
        });
      }
      return user;
    },
    login: async (root, args) => {
      const user = await User.findOne({ username: args.username });

      if (!user || args.password !== "secret") {
        throw new GraphQLError("wrong credentials", {
          extensions: {
            code: "BAD_USER_INPUT",
          },
        });
      }

      const userForToken = {
        username: user.username,
        id: user._id,
      };

      return { value: jwt.sign(userForToken, process.env.JWT_SECRET) };
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
