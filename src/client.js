import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ensureReady, After } from '@jaredpalmer/after';
import { AppRegistry } from 'react-native-web';
import { ApolloProvider, withApollo } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { persistCache } from 'apollo-cache-persist';
import * as fetch from 'isomorphic-fetch';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import routes from './routes';
import initApollo from './apollo';

class MyApp extends React.Component {

  constructor() {
    super();
    this.state = { client: null, loaded: false};
  }

  componentWillMount() {


        // query all three channels here.

        const initialState = { cartDisabled: false,
                               checkoutCreated: false,
                               checkoutId: null,
                               currentProduct: [],
                               donationId: '',
                               donationVariantId : '',
                               isProductModalOpen : false,
                               isCartModalOpen: true,
                               isNetworkOffline : false,
                               lineItems: [],
                               selectedOptions: [],
                               selectedVariant: [],
                               selectedVariant2: '',
                               initialVariantBool: true,
                               selectedVariantImage: '',
                               selectedVariantQuantity: 1,
                               whichProductOpen: ''
                              };

        const client = initApollo(initialState);


        this.setState({
          client,
          loaded: true,
        });
  }

    async componentDidMount() {
    let { client } = this.state;

    let checkoutIdCart = client.readQuery({
    query: gql`{
      checkoutId @client
      checkoutCreated @client
    }`})
    if (checkoutIdCart.checkoutId == null) {

      const res = await
      client.mutate({
        mutation: createCheckout,
        variables: {
          input: {}
        }
      });
      console.log('res');
      console.log(res);

      try {
        client.writeData({ data: { checkoutId: res.data.checkoutCreate.checkout.id } });
      } catch(e) {
        console.log(e); // 30
      }

    }
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



const CheckoutFragment = gql`
  fragment CheckoutFragment on Checkout {
    id
    webUrl
    totalTax
    subtotalPrice
    totalPrice
    lineItems (first: 250) {
      edges {
        node {
          id
          title
          variant {
            id
            title
            image {
              src
            }
            price
          }
          quantity
        }
      }
    }
  }
`;

const createCheckout = gql`
  mutation checkoutCreate ($input: CheckoutCreateInput!){
    checkoutCreate(input: $input) {
      userErrors {
        message
        field
      }
      checkout {
        ...CheckoutFragment
      }
    }
  }
${CheckoutFragment}`;

const App = MyApp;

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
