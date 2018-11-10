import React from 'react';
import Home from '../Home';
import { ModalContainer } from 'sc-react-router-modal';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import { withApollo } from "react-apollo";
import { Query } from "react-apollo";
import { withRouter } from "react-router-dom";
import gql from 'graphql-tag';
import Cart from '../components/Cart';
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

const CartContainerApollo = ({ removeDonationInCart, removeLineItemInCart, updateLineItemInCart, handleDonations, checkoutId }) => (
    <Query query={ query } variables={{ id: checkoutId }}>
      {({ loading, error, data, client }) => {

        console.log('in query');
      if (loading) {
        return (<div id={'spinner'} style={{'background': 'url(/skye-whalesong8x32.jpg)'}}></div>);
      }

      if (error) {
        return <p>{error.message}</p>;
      }

      console.log("data cart container");
      console.log(data);


      if (data) {
      return(<Cart  data={data}
                    isCartModalOpen={data.isCartModalOpen}
                    checkoutId={data.checkoutId}
                    lineItems={data.node.lineItems}
                    setDonationValue={(value, lineItemId) => { handleDonations(value, lineItemId) }}
                    removeDonationInCart={(lineItemId) => { removeDonationInCart(lineItemId)}}
                    removeLineItemInCart={removeLineItemInCart}
                    updateLineItemInCart={updateLineItemInCart}
                    isCartOpen={true}
                    donationId={null}
                    />);

      }}}
    </Query>
);

const query = gql`
query($id: ID!) {
  node(id: $id) {
    id
    ... on Checkout {
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
  }
}
`;
/*
const CartContainerWithDataAndMutation = compose(
  graphql(query),
  graphql(createCheckout, {name: "createCheckout"}),
  graphql(checkoutLineItemsAdd, {name: "checkoutLineItemsAdd"}),
  graphql(checkoutLineItemsUpdate, {name: "checkoutLineItemsUpdate"}),
  graphql(checkoutLineItemsRemove, {name: "checkoutLineItemsRemove"}),
  graphql(checkoutCustomerAssociate, {name: "associateCustomerCheckout"}),
  graphql(checkoutCustomerAssociate, {name: "checkoutCustomerAssociate"})
)(CartContainer);

const CartContainerApollo = withApollo(CartContainerWithDataAndMutation)
*/
export default CartContainerApollo;
