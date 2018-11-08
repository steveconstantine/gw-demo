import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ensureReady, After } from '@jaredpalmer/after';
import { AppRegistry } from 'react-native-web';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { persistCache } from 'apollo-cache-persist';
import * as fetch from 'isomorphic-fetch';
import routes from './routes';
import initApollo from './apollo';

var localStorage = require('web-storage')().localStorage;

class App extends React.Component {

  constructor() {
    super();
    this.state = { client: null, loaded: false};
  }



    async componentDidMount() {



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

/*    this.props.createCheckout({
      variables: {
        input: {}
      }}).then((res) => {
      let resSave =  res.data.checkoutCreate.checkout;
      client.writeData({ data: { checkout: resSave } });
    });*/

    this.setState({
      client,
      loaded: true,
    });
  }


  render() {
    if (!this.state.loaded) {
      return <div id={'spinner'} style={{'background': 'url(/skye-whalesong8x32.jpg)'}}></div>;
    } else {
      const { client } = this.state;
      return (
      <ApolloProvider client={client}>
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
