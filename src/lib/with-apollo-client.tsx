import React from 'react';
import Head from 'next/head';
import { getDataFromTree } from '@apollo/react-ssr';
import PropTypes from 'prop-types';
import initApollo from './init-apollo';
import ApolloClient from 'apollo-client';
import { AppProps, default as NextApp } from 'next/app';

type TCache = any;

interface WithApolloState<TCache> {
  data?: TCache;
}

interface WithApolloProps<TCache> {
  apolloState: WithApolloState<TCache>;
  apollo: ApolloClient<TCache>
}

type ApolloProps = WithApolloProps<TCache> & AppProps;

export default (App: typeof NextApp) => {
  return class Apollo extends React.Component<ApolloProps> {  
    public static displayName = 'withApollo(App)';

    public static propTypes = {
      apolloState: PropTypes.object,
      apollo: PropTypes.object
    };

    public static getInitialProps = async (context) => {
      const { Component, router, ctx } = context;

      const headers = ctx.req ? ctx.req.headers : {};
      // Run all GraphQL queries in the component tree
      // and extract the resulting data
      const apollo = initApollo({}, headers);

      let appProps = { pageProps: {} };
      if (App.getInitialProps) {
        ctx.apolloClient = apollo;
        appProps = await App.getInitialProps(context);
      }

      if (!process.browser) {
        try {
          // Run all GraphQL queries
          await getDataFromTree(
            <App {...appProps} Component={Component} router={router} apolloClient={apollo} />
          );
        } catch (error) {
          // Prevent Apollo Client GraphQL errors from crashing SSR.
          // Handle them in components via the data.error prop:
          // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
          console.error('Error while running `getDataFromTree`', error); // eslint-disable-line no-console
        }

        // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        Head.rewind();
      }

      // Extract query data from the Apollo store
      const apolloState = apollo.cache.extract();

      (apollo as any).toJSON = () => {
        return null;
      };

      return {
        ...appProps,
        apolloState,
        apollo
      };
    }

    public apollo: ApolloClient<TCache>;

    constructor(props) {
      super(props);
      this.apollo = initApollo(props.apolloState);
    }

    render() {
      return <App {...this.props} apolloClient={this.apollo} />;
    }
  }
}