import React from 'react';
import CartContainerApollo from './cartcontainer';
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

class CartSuperContainer extends React.Component {

  constructor() {
    super();

    this.addVariantToCart = addVariantToCart.bind(this);
    this.removeLineItemInCart = removeLineItemInCart.bind(this);
    this.updateLineItemInCart = updateLineItemInCart.bind(this);
    this.handleDonations = this.handleDonations.bind(this);
    this.associateCustomerCheckout = associateCustomerCheckout.bind(this);
  }

  handleDonations(donationVariantId, value, lineItemId) {
    console.log('lineitems');
    if (lineItemId != null) {
      console.log("handleDonations 1st if");
      this.removeDonationInCart(lineItemId);
      this.updateDonationInCart(donationVariantId, lineItemId, value);
    } else {
      console.log("handleDonations 2nd if");
      this.removeDonationInCart(lineItemId);
      this.updateDonationInCart(donationVariantId, lineItemId, value);
    }
  }

    render() {

      if (this.props.data.loading) {
        return (<div id={'spinner'} style={{'background': 'url(/skye-whalesong8x32.jpg)'}}></div>);
      }
      if (this.props.data.error) {
        console.log('data error in cart super');
        return <div></div>;
      }

      const { data } = this.props;
      const checkout = this.state;


      console.log('cart super container modal open / checkout data')
      console.log(data.checkoutId);

      if (data) {
      return (
          <div className="appcontainer cartcontainer">
             <CartContainerApollo
                          checkoutId={data.checkoutId}
                          isCartModalOpen={data.isCartModalOpen}
                          lineItems={data.lineItems}
                          setDonationValue={(value, lineItemId) => { this.handleDonations(value, lineItemId) }}
                          removeDonationInCart={(lineItemId) => { this.props.removeDonationInCart(lineItemId)}}
                          removeLineItemInCart={this.removeLineItemInCart}
                          updateLineItemInCart={this.updateLineItemInCart}
                          />
            </div>
        );
      }
    }
  }


const query = gql`
  query cartSuperContainerQuery {
  lineItems @client
  checkoutCreated @client
  checkoutId @client
  isCartModalOpen @client
}
`;


const CartSuperContainerWithDataAndMutation = compose(
  graphql(query),
  graphql(checkoutLineItemsAdd, {name: "checkoutLineItemsAdd"}),
  graphql(checkoutLineItemsUpdate, {name: "checkoutLineItemsUpdate"}),
  graphql(checkoutLineItemsRemove, {name: "checkoutLineItemsRemove"})
)(CartSuperContainer);

export default CartSuperContainerWithDataAndMutation;
