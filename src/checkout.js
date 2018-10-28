import gql from 'graphql-tag';
import _ from 'underscore';

var localStorage = require('web-storage')().localStorage;

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

export const createCheckout = gql`
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
  ${CheckoutFragment}
`;

export const checkoutLineItemsAdd = gql`
  mutation checkoutLineItemsAdd ($checkoutId: ID!, $lineItems: [CheckoutLineItemInput!]!) {
    checkoutLineItemsAdd(checkoutId: $checkoutId, lineItems: $lineItems) {
      userErrors {
        message
        field
      }
      checkout {
        ...CheckoutFragment
      }
    }
  }
  ${CheckoutFragment}
`;

export const checkoutLineItemsUpdate = gql`
  mutation checkoutLineItemsUpdate ($checkoutId: ID!, $lineItems: [CheckoutLineItemUpdateInput!]!) {
    checkoutLineItemsUpdate(checkoutId: $checkoutId, lineItems: $lineItems) {
      userErrors {
        message
        field
      }
      checkout {
        ...CheckoutFragment
      }
    }
  }
  ${CheckoutFragment}
`;

export const checkoutLineItemsRemove = gql`
  mutation checkoutLineItemsRemove ($checkoutId: ID!, $lineItemIds: [ID!]!) {
    checkoutLineItemsRemove(checkoutId: $checkoutId, lineItemIds: $lineItemIds) {
      userErrors {
        message
        field
      }
      checkout {
        ...CheckoutFragment
      }
    }
  }
  ${CheckoutFragment}
`;

export const checkoutCustomerAssociate = gql`
  mutation checkoutCustomerAssociate($checkoutId: ID!, $customerAccessToken: String!) {
    checkoutCustomerAssociate(checkoutId: $checkoutId, customerAccessToken: $customerAccessToken) {
      userErrors {
        field
        message
      }
      checkout {
        ...CheckoutFragment
      }
    }
  }
  ${CheckoutFragment}
`;

export function addVariantToCart(variantId, quantity) {
  this.props.checkoutLineItemsAdd(
    { variables: { checkoutId: this.state.checkout.id, lineItems:  [{variantId, quantity: parseInt(quantity, 10)}] }
    }).then((res) => {
    if (_.isNull(variantId) || _.isUndefined(variantId)) {
          // toast message
    } else {
    localStorage.set('checkout', JSON.stringify(res.data.checkoutLineItemsAdd.checkout));
    this.setState({
      checkout: res.data.checkoutLineItemsAdd.checkout
    });
    }
  });

  this.handleCartOpen();
}

export function updateDonationInCart(variantId, lineItemId, quantity) {
  console.log("updating donation");
  this.props.checkoutLineItemsAdd(
    { variables: { checkoutId: this.state.checkout.id, lineItems:  [{variantId, quantity: parseInt(quantity * 100, 10)}] }
    }).then((res) => {
    if (lineItemId != null) {
      localStorage.set('checkout', JSON.stringify(res.data.checkoutLineItemsAdd.checkout));
      this.setState({
        checkout: res.data.checkoutLineItemsAdd.checkout
      });
    }
  }, this);
}

export function addDonationToCart(variantId, quantity) {
  console.log("adding donation");
  console.log(variantId);
    this.props.checkoutLineItemsAdd(
      { variables: { checkoutId: this.state.checkout.id, lineItems:  [{variantId, quantity: parseInt(quantity, 10)}] }
      }).then((res) => {
      localStorage.set('checkout', JSON.stringify(res.data.checkoutLineItemsUpdate.checkout));
      this.setState({
        checkout: res.data.checkoutLineItemsUpdate.checkout
      });
    });
}

export function removeDonationInCart(lineItemId) {
  console.log("removing donation");
  console.log(lineItemId);
  this.props.checkoutLineItemsRemove(
    { variables: { checkoutId: this.state.checkout.id, lineItems: [lineItemId] }
    }).then((res) => {
    console.log(res);
    localStorage.set('checkout', JSON.stringify(res.data.checkoutLineItemsUpdate.checkout));
    this.setState({
      checkout: res.data.checkoutLineItemsUpdate.checkout
    });
  });
}

export function updateLineItemInCart(lineItemId, quantity) {
  this.props.checkoutLineItemsUpdate(
    { variables: { checkoutId: this.state.checkout.id, lineItems: [{id: lineItemId, quantity: parseInt(quantity, 10)}] }
    }).then((res) => {
    localStorage.set('checkout', JSON.stringify(res.data.checkoutLineItemsUpdate.checkout));
    this.setState({
      checkout: res.data.checkoutLineItemsUpdate.checkout
    });
  });
}

export function removeLineItemInCart(lineItemId) {
  this.props.checkoutLineItemsRemove(
    { variables: { checkoutId: this.state.checkout.id, lineItemIds: [lineItemId] }
    }).then((res) => {
    localStorage.set('checkout', JSON.stringify(res.data.checkoutLineItemsRemove.checkout));
    this.setState({
      checkout: res.data.checkoutLineItemsRemove.checkout
    });
  });
}

export function associateCustomerCheckout(customerAccessToken) {
  this.props.checkoutCustomerAssociate(
    { variables: { checkoutId: this.state.checkout.id, customerAccessToken: customerAccessToken }
    }).then((res) => {
    localStorage.set('checkout', JSON.stringify(res.data.checkoutCustomerAssociate.checkout));
    this.setState({
      checkout: res.data.checkoutCustomerAssociate.checkout,
      isCustomerAuthOpen: false,
      loggedIn: true,
    });
  });
}
