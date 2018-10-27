import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ensureReady, After } from '@jaredpalmer/after';
import { AppRegistry } from 'react-native-web';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { persistCache } from 'apollo-cache-persist';
import * as fetch from 'isomorphic-fetch';
import routes from './routes';

if (!process.browser) {
  global.fetch = fetch
}

var localStorage = require('web-storage')().localStorage;


class App extends React.Component {

  constructor() {
    super();
    this.state = { client: null, loaded: false};
  }

  async componentDidMount() {
    const cache = new InMemoryCache();

    const ssrMode = !process.browser;
    const httpLink = createHttpLink({ uri: 'https://giftingwildinc.myshopify.com/api/graphql', fetch: fetch })

    const token = localStorage.get('token');

    const middlewareLink = setContext(() => ({
      headers: {
        'X-Shopify-Storefront-Access-Token': 'e533f252f3a673c02f85798859530319'
      },
      authorization: token ? `Bearer ${token}` : "",
    }))

    const client = new ApolloClient({
      ssrMode,
      link: middlewareLink.concat(httpLink),
      cache: cache.restore(window.__APOLLO_STATE__),
    });

    this.setState({
      client,
      loaded: true,
    });
  }


  render() {
    if (!this.state.loaded) {
      return <div></div>;
    } else {
    console.log(this.props.data);
    return (
      <ApolloProvider client={this.state.client}>
        <BrowserRouter>
          <After data={this.props.data} routes={routes} />
        </BrowserRouter>
      </ApolloProvider>
    );
    }
  }
}

ensureReady(routes).then(data => {
  AppRegistry.registerComponent('App', () => App);
  AppRegistry.runApplication('App', {
    initialProps: {
      data,
    },
    rootTag: document.getElementById('root'),
  });
});

if (module.hot) {
  module.hot.accept();
}
