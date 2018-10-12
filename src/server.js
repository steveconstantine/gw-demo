import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { ApolloProvider, getDataFromTree } from 'react-apollo';
import { createApolloClient } from './apollo';
import { AppRegistry } from 'react-native';
import { render } from '@jaredpalmer/after';
import routes from './routes';
import Document from './Document';

var compression = require('compression');
var minify = require('express-minify');

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();

server.use(compression({ level: 9 }));
server.use(minify());

server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', async (req, res) => {
    const customRenderer = node => {
      const client = createApolloClient();

      class App extends React.Component {
        render() {
          return <ApolloProvider client={client}>{node}</ApolloProvider>;
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
      console.log(error);
    }
  });

  server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

export default server;
