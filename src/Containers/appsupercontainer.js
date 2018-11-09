import React from 'react';
import AppContainer from './AppContainer';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import { withRouter } from "react-router-dom";
import gql from 'graphql-tag';
import ProductRouter from '../components/Product';
import {
  createCheckout,
  checkoutLineItemsAdd,
  checkoutLineItemsUpdate,
  checkoutLineItemsRemove,
  checkoutCustomerAssociate,
  addVariantToCart,
  addDonationToCart,
  updateDonationInCart,
  removeDonationInCart,
  updateLineItemInCart,
  removeLineItemInCart,
  associateCustomerCheckout
} from '../checkout';
import { withApollo } from "react-apollo";
import _ from 'underscore';

class AppSuperContainer extends React.Component {

  constructor() {
    super();
    this.updateCartOpen = this.updateCartOpen.bind(this);
    this.handleDonations = this.handleDonations.bind(this);
    this.state = { checkout: null, checkoutIdQuery: null, checkoutCreatedQuery: null, checkoutDataQuery: null};
  }

  handleDonations(donationVariantId, value, lineItemId) {
    /*console.log(lineItemId);
    if (lineItemId != null) {
      console.log("handleDonations 1st if");
      this.removeDonationInCart(lineItemId);
      this.updateDonationInCart(donationVariantId, lineItemId, value);
    } else {
      console.log("handleDonations 2nd if");
      this.removeDonationInCart(lineItemId);
      this.updateDonationInCart(donationVariantId, lineItemId, value);
    }*/
  }

  updateCartOpen(res) {
    this.props.client.writeData({ data: { isCartModalOpen: res } })
  }

  render() {

    if (this.props.data.loading) {
      return (<div id={'spinner'} style={{'background': 'url(/skye-whalesong8x32.jpg)'}}></div>);
    }
    if (this.props.data.error) {
      return <p>{this.props.data.error.message}</p>;
    }

    const { data } = this.props;
    console.log('app super container data');
    console.log(data);

    return (
        <div className="appcontainer">
        <AppContainer
                      updateCartOpen={this.updateCartOpen}
                      data={data}
                      />
        </div>
    );
  }
}

const query = gql`
query appSuperContainerQuery {
  shop {
    name
    products(first:15) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      edges {
        node {
          id
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
          variants(first: 1) {
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
  }
  checkoutCreated @client
  checkoutId @client
  isCartModalOpen @client
}
`;


const AppSuperContainerWithDataAndMutation = compose(
  graphql(query),
  graphql(createCheckout, {name: "createCheckout"}),
  graphql(checkoutLineItemsAdd, {name: "checkoutLineItemsAdd"}),
  graphql(checkoutLineItemsUpdate, {name: "checkoutLineItemsUpdate"}),
  graphql(checkoutLineItemsRemove, {name: "checkoutLineItemsRemove"}),
  graphql(checkoutCustomerAssociate, {name: "associateCustomerCheckout"}),
  graphql(checkoutCustomerAssociate, {name: "checkoutCustomerAssociate"})
)(AppSuperContainer);

const AppSuperContainerApollo = withApollo(AppSuperContainerWithDataAndMutation)

export default AppSuperContainerApollo;
