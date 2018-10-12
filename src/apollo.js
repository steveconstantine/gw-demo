import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'isomorphic-fetch';

var localStorage = require('web-storage')().localStorage;

export function createApolloClient() {
  const ssrMode = !process.browser;
  const httpLink = createHttpLink({ uri: 'https://giftingwildol.myshopify.com/api/graphql', fetch, })

  const token = localStorage.get('token');

  const middlewareLink = setContext(() => ({
    headers: {
      'X-Shopify-Storefront-Access-Token': '59c82aa2392bd12a49dbfd459c04b5b9'
    },
    authorization: token ? `Bearer ${token}` : "",
  }))

  return new ApolloClient({
    ssrMode,
    link: middlewareLink.concat(httpLink),
    cache: ssrMode
      ? new InMemoryCache()
      : new InMemoryCache().restore(window.__APOLLO_STATE__),
  });
}
