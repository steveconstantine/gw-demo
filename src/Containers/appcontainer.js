import React from 'react';
import Home from '../Home';
import { ModalContainer } from 'sc-react-router-modal';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import { withApollo } from "react-apollo";
import { Query } from 'react-apollo';
import { withRouter } from "react-router-dom";
import gql from 'graphql-tag';
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

const AppContainer = ({ data, updateCartOpen }) => (
            <div className="appcontainer">
                <Home data={data} updateCartOpen={(res) => updateCartOpen(res)} isCartModalOpen={data.isCartModalOpen} />
                <ModalContainer />
            </div>
);

const AppContainerWithDataAndMutation = compose(
  graphql(createCheckout, {name: "createCheckout"}),
  graphql(checkoutLineItemsAdd, {name: "checkoutLineItemsAdd"}),
  graphql(checkoutLineItemsUpdate, {name: "checkoutLineItemsUpdate"}),
  graphql(checkoutLineItemsRemove, {name: "checkoutLineItemsRemove"}),
  graphql(checkoutCustomerAssociate, {name: "associateCustomerCheckout"}),
  graphql(checkoutCustomerAssociate, {name: "checkoutCustomerAssociate"})
)(AppContainer);

const AppContainerApollo = AppContainer

export default AppContainerApollo;
