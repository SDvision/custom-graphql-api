const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./server/schema/type-defs');
const { resolvers } = require('./server/schema/resolvers');

const apolloServer = new ApolloServer({typeDefs, resolvers});

apolloServer.listen().then(({url}) => {
    console.log(`Server is running : ${url}`);
});