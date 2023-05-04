const {gql} = require('apollo-server');

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        age: Int!
        username: String!
        nationality: Nationality
        favoriteMovie: [Movie]
    }

    type Movie {
        id: ID!
        name: String!
        publicationYear: Int!
        rating: Float!
    }

    type Query {
        users: [User!]!
        user(id: ID!): [User]
        movies: [Movie!]!
        movie(name: String!): [Movie]
    }

    input createUserInput {
        id: ID!
        name: String!
        age: Int!
        username: String!
    }

    type Mutation {
        createUser(input: createUserInput!): User
        # TODO : Add delete and update user.
    }

    enum Nationality {
        CANADA
        INDIA
        BRAZIL
        CHINA
        UKRAINE
    }
`;

module.exports = { typeDefs }