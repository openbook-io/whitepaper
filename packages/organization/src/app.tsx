import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, InMemoryCache, ApolloLink } from 'apollo-boost';
import { useCookies } from 'react-cookie';
import Layout from './layout';
import parseDomain from 'parse-domain';
import { createUploadLink } from 'apollo-upload-client'
import axios from 'axios';
import { buildAxiosFetch } from "@lifeomic/axios-fetch";

function App() {
  const [ cookies ] = useCookies(['token']);

  const parsedDomain = parseDomain(window.location.host)

  const transport = axios.create({

  })

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
      createUploadLink({
        uri: `${process.env.REACT_APP_OPENBOOK_GRAPHQL_URL}`,
        fetch: buildAxiosFetch(transport, (config, _input, init) => ({
          ...config,
          onUploadProgress: init.onUploadProgress,
        }))
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