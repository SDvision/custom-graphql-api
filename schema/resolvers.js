const { UserList } = require('./fakeData'); 

const resolvers = {
    Query: {
        users() {
            // TODO : Actual API call will go here.
            return UserList;
        }
    }
}

module.exports = { resolvers };