import React from 'react';
import App, {AppContext} from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ApolloProvider } from '@apollo/react-hooks';
import { CloudinaryContext } from 'cloudinary-react';
import Layout from '../components/layout';
import {theme} from '@whitepaper/ui';
import withApolloClient from '../lib/with-apollo-client';
import getConfig from 'next/config'

const {publicRuntimeConfig} = getConfig()
const {cloudinaryCloudName} = publicRuntimeConfig

interface Props extends AppContext {
  apolloClient: any
}

class MyApp extends App<Props> {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, apolloClient } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>Whitepaper.io - Search and find all whitepapers on whitepaper.io</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
        <CloudinaryContext cloudName={cloudinaryCloudName}>
          <ThemeProvider theme={theme}>
            <ApolloProvider client={apolloClient}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ApolloProvider>
          </ThemeProvider>
        </CloudinaryContext>
      </React.Fragment>
    );
  }
}

export default withApolloClient(MyApp);