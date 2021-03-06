const { ApolloServer, gql } = require('apollo-server-lambda');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
	# Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

	# This "Book" type defines the queryable fields for every book in our data source.
	type Book {
		id: ID
		title: String
		author: String
	}

	# The "Query" type is special: it lists all of the available queries that
	# clients can execute, along with the return type for each. In this
	# case, the "books" query returns an array of zero or more Books (defined above).
	type Query {
		books: [Book]
	}

	type Mutation {
		updateBookTitle(id: ID, title: String): Book
	}
`;

const books = [
	{
		id: 1,
		title: 'Harry Potter and the Chamber of Secrets',
		author: 'J.K. Rowling',
	},
	{
		id: 2,
		title: 'Jurassic Paaaaaaaaaaaark',
		author: 'Michael Crichton',
	},
];

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
	Query: {
		books: () => books,
	},
	Mutation: {
		updateBookTitle(_, params) {
			return params;
		},
	},
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.

exports.handler = server.createHandler({
	cors: {
		origin: '*',
		credentials: true,
	},
});
