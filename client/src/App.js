import './App.css';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import { UserListWrapper } from './components/UserListWrapper';

function App() {
    const client = new ApolloClient({
        cache: new InMemoryCache({
            addTypename: false
        }),
        uri: "http://localhost:4000/graphql",
    })
    return (
        <ApolloProvider client={client}>
            <div className="App">
                <h1> User Info From Graphql Server </h1>
                <UserListWrapper />
            </div>
        </ApolloProvider>
    );
}

export default App;
