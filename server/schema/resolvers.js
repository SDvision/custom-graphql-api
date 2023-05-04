const { UserList, MovieList } = require('./fakeData');
const _ = require('lodash');

const resolvers = {
    Query: {
        users: () => {
            // TODO : Actual API call will go here.
            return UserList;
        },
        user: (parent, args) => {
            const userId = args.id;
            //return UserList.filter()
            return _.filter(UserList, user => user.id === Number(userId));
        },
        movies: () => {
            return MovieList;
        },
        movie: (parent, args) => {
            const movieName = args.name;
            return _.filter(MovieList, movie => movie.name === movieName);
        }
    },
    User: {
        favoriteMovie: () => {
            return _.filter(MovieList, movie => movie.rating >= 8);
        }
    },
    Mutation: {
        createUser: (parent, args) => {
            console.log(args)
            const newUser = args.input;
            /* TODO : add logic for updating list with new user and return single added user
            *          so that fetching Users next time with give updated list with new user.
            */
        }
        // TODO : add resolvers for delete and update data of UserList.
    }
}

module.exports = { resolvers };