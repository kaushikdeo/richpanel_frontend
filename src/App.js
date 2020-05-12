import React, { Component } from "react";
import AppRouter from "./routes";
import ApolloClient from "apollo-client";
import { WebSocketLink } from 'apollo-link-ws';
import { InMemoryCache } from "apollo-cache-inmemory";
import { createUploadLink } from "apollo-upload-client";
import { setContext } from "apollo-link-context";
import { getMainDefinition } from "apollo-utilities";
import { split, ApolloLink } from 'apollo-link';
import { ApolloProvider } from "@apollo/react-hoc";
// import './App.css'

const httpLink = createUploadLink({
  uri: 'https://richpaneldash.herokuapp.com/graphql',
  credentials: "same-origin"
});

const wsLink = new WebSocketLink({
  uri: 'wss://richpaneldash.herokuapp.com',
  options: {
    reconnectionAttempts: 50,
    lazy: true,
    timeout: 20000,
  }
});

// Make Auth Link
const authLink = setContext(async (_, { headers }) => {
  const token = await localStorage.getItem('authToken');
  const authTokenSecret = await localStorage.getItem('authTokenSecret');
  return {
    headers: {
      ...headers,
      authToken: token || null,
      authTokenSecret: authTokenSecret || null,
    }
  };
});

const link = split(
  // split based on operation type
  ({ query }) => {
      const { kind, operation } = getMainDefinition(query);
      return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink,
);

// const link = split(
//   // split based on operation type
//   ({ query }) => {
//     const { kind, operation } = getMainDefinition(query);
//     return (
//         kind === 'OperationDefinition' && operation === 'subscription'
//     );
// },
//   wsLink,
//   htpp,
// );

// Instantiate Client
const client = new ApolloClient({
  link: ApolloLink.from([authLink, link]),
  cache: new InMemoryCache(),
  // everything below is new sending JWT as header
  fetchOptions: {
    credentials: "include"
  },
  onError: ({ networkError }) => {
    if (networkError) {
      if (networkError.statusCode === 401) {
        // remove token
      }
    }
  }
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <AppRouter />
      </ApolloProvider>
    )
  }
}

export default App;