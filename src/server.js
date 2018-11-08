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
import initApollo from './apollo';

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


      const initialState = { cartDisabled: false,
                             checkoutCreated: false,
                             checkoutId: null,
                             donationId: '',
                             donationVariantId : '',
                             isProductModalOpen : false,
                             isCartModalOpen: true,
                             isNetworkOffline : false,
                             lineItems: [],
                             selectedOptions: [],
                             selectedVariant: [],
                             initialVariantBool: true,
                             selectedVariantImage: '',
                             selectedVariantQuantity: 1,
                             whichProductOpen: ''
                            };

      const client = initApollo(initialState);

      class App extends React.Component {

        constructor(){
          super();
          this.state = { loaded: false, client: null };
        }

        componentDidMount() {

        /*  this.props.createCheckout({
            variables: {
              input: {}
            }}).then((res) => {
            let resSave =  res.data.checkoutCreate.checkout;
            client.writeData({ data: { checkout: resSave } });
          });*/
          this.setState({
            loaded: true,
            client
          });
        }

        render() {
          if (!this.state.loaded) {
           return <div id={'spinner'} style={{'background': 'url(/skye-whalesong8x32.jpg)'}}></div>;
         } else {
           return <ApolloProvider client={client}>{node}</ApolloProvider>;
         }
       }
     }

      return getDataFromTree(App).then(async data => {
        AppRegistry.registerComponent('App', () => App);
        const { element, getStyleElement } = AppRegistry.getApplication('App');
        const css = getStyleElement();
        const initialApolloState = client.cache.extract();
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
      });
      res.send(html);
    } catch (error) {
      res.json(error);
      console.log('server instantiation error');
      console.log(error);
    }
  });

  server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://giftingwildinc.myshopify.com/api/graphql");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

export default server;
