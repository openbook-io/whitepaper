import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createUploadLink } from 'apollo-upload-client'
import cookie from 'cookie'
import fetch from 'isomorphic-unfetch';
import getConfig from 'next/config'

const {publicRuntimeConfig} = getConfig()
const {openbookGraphqlUrl} = publicRuntimeConfig

let apolloClient = null;

function parseCookies (headers, options = {}) {
  const documentCookie = process.browser ? document.cookie : '';
  return cookie.parse(process.browser ? documentCookie : headers.cookie || '', options)
}

const create = (initialState, headers) => {
  const fetchOptions = {}
  
  const enchancedFetch = (url, init) => {
    const token = parseCookies(headers)['token'];

    return fetch(url, {
      ...init,
      headers: {
        ...init.headers,
        authorization: token ? `Bearer ${token}` : ''
      }
    }).then(response => response)
  }
  
  const httpLink = new createUploadLink({
    uri: `${openbookGraphqlUrl}`, // Server URL (must be absolute)
    credentials: 'same-origin',
    fetch: enchancedFetch,
    fetchOptions
  })

  const cache = new InMemoryCache({

  }).restore(initialState || {});

  cache.writeData({
    data: {}
  });

  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    link: httpLink,
    cache: cache,
    resolvers: {}
  })
};

export default (initialState, headers?) => {
  if (!process.browser) {
    return create(initialState, headers);
  }
  if (!apolloClient) {
    apolloClient = create(initialState, headers);
  }

  return apolloClient;
};