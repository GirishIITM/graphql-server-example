import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
    # this is a comment 
    type Book {
        title: String,
        author: String
    }

    type Query {
        books: [Book],
    }
`;

const resolvers = {
    Query: {
        books: () => books
    }
}

const books = [
    {
        title: "Harry Potter and the Chamber of Secrets",
        author: "J.K. Rowling",
    },
    {
        title: "Jurassic Park",
        author: "Michael Crichton",
    },
    {
        title: "Maha Bharat",
        author: "Ved Vyas",
    },
    {
        title: "Ramayan",
        author: "Valmiki",
    }
];

const server = new ApolloServer({
    typeDefs,
    resolvers
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 8888 }
})

console.log("started server visit http://localhost:8888")