import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from 'apollo-boost';
import { useCookies } from 'react-cookie';
import Layout from './layout';
import parseDomain from 'parse-domain';

function App() {
  const [ cookies ] = useCookies(['token']);

  const parsedDomain = parseDomain(window.location.host)

  const client = new ApolloClient({
    link: new ApolloLink((operation, forward) => {
      operation.setContext({
        headers: {
          authorization: `Bearer ${cookies.token}`,
          'w-organization': parsedDomain && parsedDomain.subdomain
        }
      });
      return forward(operation);
    }).concat(
      new HttpLink({
        uri: process.env.REACT_APP_OPENBOOK_GRAPHQL_URL, // Server URL
      })
    ),
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client}>
      <Layout />
    </ApolloProvider>
  )
}

export default App;