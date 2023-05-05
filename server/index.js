const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./schema/type-defs');
const { resolvers } = require('./schema/resolvers');

const apolloServer = new ApolloServer({typeDefs, resolvers});

apolloServer.listen().then(({url}) => {
    console.log(`Server is running : ${url}`);
});