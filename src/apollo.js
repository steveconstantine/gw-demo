import * as fetch from 'cross-fetch'
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import { setContext, getContext } from 'apollo-link-context';
import { persistCache } from 'apollo-cache-persist';
import { withClientState } from 'apollo-link-state';
import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';
import { onError } from "apollo-link-error";
import { ApolloLink, Observable } from 'apollo-link'; // <-- Add Observable
import { compose } from 'react-apollo';
import gql from 'graphql-tag';
import introspectionQueryResultData from './shopifyFragmentTypes.json';

if (!process.browser) {
  global.fetch = fetch;
}

var uuid = require("uuid");
var token = uuid.v4();

const typeDefs = `
  type LineItem {
    id: [ID]
    quantity: Int
    title: String
    variant: [ProductVariant]
  }

  type WeightUnit {
    WeightUnit: ENUM
  };

  type DateTime {
    DateTime: Scalar
  }

  type Money {
    Money: Scalar
  }

  type ID {
    id: ID
  }

  type Image {
    altText: String
    id: [ID]
    src: [URL]
  }

  type PageInfo {
    hasNextPage: Boolean
    hasPreviousPage: Boolean
  }

  type ProductVariantConnection {
    edges: ProductVariantEdge
    pageInfo: [PageInfo]
  }

  type ProductVariant {
    availableForSale: Boolean
    id: [ID]
    image: [Image]
    price: [Money]
    selectedOptions: [SelectedOption]
    title: String
  }

  type ProductConnection {
    edges: [ProductEdge]
    pageInfo: [PageInfo]
  }

  type ProductEdge {
    cursor: String
    node: [Product]
  }

  type Product {
    collections: [CollectionConnection]
    createdAt: [DateTime]
    description: String
    descriptionHtml: String
    descriptionPlainSummary: String
    handle: String
    id: [ID]
    images: [ImageConnection]
    options: [ProductOption]
    productType: String
    publishedAt: [DateTime]
    tags: String
    title: String
    updatedAt: [DateTime]
    variants: [ProductVariantConnection]
    vendor: String
  }

  type CollectionConntection {
    edges: [CollectionEdge]
    pageInfo: [PageInfo]
  }

  type CollectionEdge {
    cursor: String
    node: [Collection]
  }

  type Collection {
    description: String
    descriptionHtml: [HTML]
    descriptionPlainSummary: String
    handle: String
    id: [ID]
    image: [Image]
    products: [ProductConnection]
    title: String
    updatedAt: [DateTime]
  }

  type CheckoutLineItemConnection {
    edges: [CheckoutLineItemEdge]
    pageInfo: PageInfo
  }

  type CheckoutLineItemEdge {
      cursor: String,
      node: [CheckoutLineItem]
  }

  type CheckoutLineItem {
    customAttributes: [Attribute]
    id: [ID]
    quantity: Int
    title: String
    variant: [ProductVariant]
  }

  type VariantInitConnection {
    edges: [VariantInitEdge]
  }

  type VariantInitEdge {
    cursor: String,
    node: [VariantInit]
  }

  type VariantInit {
    default: Boolean
  }

  type CheckoutLineItemEdge {
      cursor: String,
      node: [CheckoutLineItem]
  }

  type CheckoutLineItem {
    customAttributes: [Attribute]
    id: [ID]
    quantity: Int
    title: String
    variant: [ProductVariant]
  }

  type AppliedGiftCard {
    amountUsed: [Money]
    balance": [Money]
    id: [ID]
    lastCharacters: String
  }

  type AvailableShippingRates {
    ready: Boolean
    shippingRates: [ShippingRate]
  }

  type ShippingRate {
    handle: String
    price: [Money]
    title: String
  }

  type Attribute {
    key: String
    value: String
  }

  type URL {
    URL: Scalar
  }

  type Query {
    cartDisabled: Boolean
    checkoutCreated: String
    checkoutId: String
    currentProduct: [Product]
    donationVariantId : String
    isCartModalOpen: Boolean
    isProductModalOpen : Boolean
    lineItems: [CheckoutLineItemEdge]
    selectedOptions: [selectedOption]
    selectedVariant: [ProductVariantEdge]
    selectedVariant2: String
    initialVariantBool: Boolean
    selectedVariantImage: [Image]
    selectedVariantQuantity: Int
    whichProductOpen: String
  }
`;

const contextLink = setContext(() => ({
  headers: {
    'X-Shopify-Storefront-Access-Token': 'e533f252f3a673c02f85798859530319'
  },
  credentials: 'same-origin',
  authorization: token ? `Bearer ${token}` : "",
}));

let apolloClient;

export function create(initialState) {

  const ssrMode = !process.browser;

  const oldHeaders = { 'X-Shopify-Storefront-Access-Token': 'e533f252f3a673c02f85798859530319' };


  const request = async (operation) => {
    operation.setContext({
      headers: {
        authorization: token
      }
    });
  };

const requestLink = new ApolloLink((operation, forward) =>
  new Observable(observer => {
    let handle;
    Promise.resolve(operation)
      .then(oper => request(oper))
      .then(() => {
        handle = forward(operation).subscribe({
          next: observer.next.bind(observer),
          error: observer.error.bind(observer),
          complete: observer.complete.bind(observer),
        });
      })
      .catch(observer.error.bind(observer));

    return () => {
      if (handle) handle.unsubscribe();
    };
  })
);

let cache;

  const fragmentMatcher = new IntrospectionFragmentMatcher({
    introspectionQueryResultData
  });
 cache = new InMemoryCache({ fragmentMatcher }).restore(initialState || window.__APOLLO_STATE__);

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        console.log(graphQLErrors)
      }
      if (networkError && networkError.statusCode === 401) {
          // remove cached token on 401 from the server
      }
    }),
    withClientState({
      defaults: initialState ? initialState : {},
      resolvers: {
        Mutation: {
          updateIsCartModalOpen: (_, { isCartModalOpen }, { cache }) => {
            cache.writeData({ data: { isCartModalOpen }});
            return null;
          }
        },
        Mutation: {
          updateWhichProductOpen: (_, { whichProductOpen }, { cache }) => {
            cache.writeData({ data: { whichProductOpen }});
            return null;
          }
        },
        Mutation: {
          updateDonationVariantId: (_, { donationVariantId }, { cache }) => {
            cache.writeData({ data: { donationVariantId }});
            return null;
          }
        },
        Mutation: {
          updateCartDisabled: (_, { cartDisabled }, { cache }) => {
            cache.writeData({ data: { cartDisabled }});
            return null;
          }
        },
        Mutation: {
          updateSelectedOpts: (_, { selectedOpts }, { cache }) => {
            cache.writeData({ data: { selectedOpts }});
            return null;
          }
        },
        Mutation: {
          updateSelectedVariant: (_, { selectedVariant }, { cache }) => {
            cache.writeData({ data: { selectedVariant }});
            return null;
          }
        },
        Mutation: {
          updateSelectedVariantImage: (_, { selectedVariantImage }, { cache }) => {
            cache.writeData({ data: { selectedVariantImage }});
            return null;
          }
        },
        Mutation: {
          updateSelectedVariantQuantity: (_, { selectedVariantQuantity }, { cache }) => {
            cache.writeData({ data: { selectedVariantQuantity }});
            return null;
          }
        },
        Mutation: {
          updateCheckout: (_, { checkout }, { cache }) => {
            cache.writeData({ data: { checkout }});
            return null;
          }
        },
      },
      cache
    }),
    contextLink,
    new HttpLink({
      uri: 'https://giftingwildinc.myshopify.com/api/graphql',
      credentials: 'same-origin'
    })
  ])
});

return client;

}


export default function initApollo(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState)
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState)
  }

  return apolloClient
}

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
//
/*** link = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query)
    return kind === 'OperationDefinition' && operation === 'subscription'
  },
  wsLink,
  httpLink
)
} **/
