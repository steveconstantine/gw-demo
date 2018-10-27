import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { ApolloProvider, getDataFromTree } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { CachePersistor } from 'apollo-cache-persist';
import * as fetch from 'isomorphic-fetch';
import { AppRegistry } from 'react-native';
import { render } from '@jaredpalmer/after';
import routes from './routes';
import Document from './Document';

if (!process.browser) {
  global.fetch = fetch
}

var compression = require('compression');
var minify = require('express-minify');
var localStorage = require('web-storage')().localStorage;

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();

server.use(compression({ level: 9 }));
server.use(minify());

server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', async (req, res) => {
    const customRenderer = node => {

      class App extends React.Component {

        constructor(props:props) {
          super(props);
          console.log(props);
          this.state = { client: null, loaded: false };
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
            cache: ssrMode
              ? cache
              : new cache.restore(window.__APOLLO_STATE__),
          });

          this.setState({
            client: client,
            loaded: true,
          });
        }

        render() {
          if (!this.state.loaded) {
           return <div>Loading-Server</div>;
         } else {
           return <ApolloProvider client={this.state.client}>{node}</ApolloProvider>;
         }
       }
     }

      return getDataFromTree(App).then(async data => {
        AppRegistry.registerComponent('App', () => App);
        const { element, getStyleElement } = AppRegistry.getApplication('App');
        const css = getStyleElement();
        const initialApolloState = client.extract();
        const html = renderToString(element);
        return { html, initialApolloState, css };
      });
    };

    try {
      const html = await render({
        req,
        res,
        routes,
        assets,
        customRenderer,
        document: Document,
        // Anything else you add here will be made available
        // within getInitialProps(ctx)
        // e.g a redux store...
        customThing: 'thing',
      });
      res.send(html);
    } catch (error) {
      res.json(error);
      console.log('server instantiation error');
      console.log(error);
    }
  });

  server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

export default server;
