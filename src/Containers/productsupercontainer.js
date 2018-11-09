/* eslint-disable import/first */

import React, {Component} from 'react';
//import ProductSocial from './Product/ProductSocial';
//import ProductOptions from './Product/ProductOptions';
//import ProductDescriptionImage from './Product/ProductDescriptionImage';
import ProductContainerApollo from './productcontainer';
import { graphql, compose, withApollo } from 'react-apollo';
import { Query } from "react-apollo";

// import Info from './Info/Info';
import _ from 'underscore';
import gql from 'graphql-tag';
import { withRouter } from "react-router-dom";


const ProductSuperContainer = ({ match, history, location }) => (
      <Query query={ query } variables={{ id: match.params.id }}>
        {({ loading, error, data, client }) => {
          console.log('product super container client');
          if (loading) {
            return (<div id={'spinner'} style={{'background': 'url(/skye-whalesong8x32.jpg)'}}></div>);
          }

          if (error) {
            return <p>{error.message}</p>;
          }

          if (data) {
            console.log(data.node);
            return (<ProductContainerApollo match={match} client={client} location={location} history={history} firstItem={data.node}/>)
          }
        }}
      </Query>
    );


const query = gql`
query productQuerySuper($id: ID!) {
  node(id: $id) {
    id
    ... on Product {
      title
      vendor
      handle
      productType
      descriptionHtml
      createdAt
      options {
        id
        name
        values
      }
      variants(first: 250) {
        edges {
          node {
            id
            title
            selectedOptions {
              name
              value
            }
            image {
              src
            }
            availableForSale
            price
          }
        }
      }
      images(first:1) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        edges {
          node {
            src
          }
        }
      }
    }
  }
}
`;

const checkoutQuery = gql`query {
    cartDisabled @client
    checkoutCreated @client
    checkoutId @client
    selectedOptions @client
    lineItems @client
    selectedVariant @client
  }`;

const ProductFragment = gql`
fragment ProductFragment on Product {
    variants(first: 250) {
      edges {
        node(selectedOptions: $selectedOptions) {
          id
          title
          image {
            src
          }
          availableForSale
          price
        }
      }
    }
  }`;

const ProductSuperContainerRouter = withRouter(ProductSuperContainer);

const ProductSuperContainerApollo = withApollo(ProductSuperContainerRouter);

export default ProductSuperContainerApollo;
