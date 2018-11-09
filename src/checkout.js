import gql from 'graphql-tag';
import _ from 'underscore';


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

const query = gql`
  query checkoutFunctionsQuery {
  lineItems @client
  checkoutId @client
}
`;


export function addVariantToCart(variantId, quantity) {
  this.props.checkoutLineItemsAdd(
    { variables: { checkoutId: null, lineItems:  [{variantId, quantity: parseInt(quantity, 10)}] }
    }).then((res) => {
      console.log('res');
      console.log(res);
    if (_.isNull(variantId) || _.isUndefined(variantId)) {
          console.log('null / undefined variantId');
    } else {
      console.log('res.id');
      console.log(res.data.checkoutLineItemsAdd.checkout.lineItems);
      this.setState({ checkoutId: res.data.checkoutLineItemsAdd.checkout.id })
      this.props.client.writeData({ data: { isCartModalOpen: true, checkoutId: res.data.checkoutLineItemsAdd.checkout.id } });
    }
  }, this).catch((e) => {
    console.log('addVariantToCart error');
    console.log(e);
  });
  this.props.history.push('/cart');
}

export function updateDonationInCart(variantId, lineItemId, quantity) {
  console.log("updating donation");
  this.props.checkoutLineItemsAdd(
    { variables: { checkoutId: this.state.checkout.id, lineItems:  [{variantId, quantity: parseInt(quantity * 100, 10)}] }
    }).then((res) => {
    if (lineItemId != null) {
      this.setState({ checkoutId: res.id });
      this.props.client.writeData({ data: { isCartModalOpen: true, checkoutId: res.id } });

    }
  }, this);
}

export function addDonationToCart(variantId, quantity) {
  console.log("adding donation");
  console.log(variantId);
    this.props.checkoutLineItemsAdd(
      { variables: { checkoutId: this.props.data.checkout.id, lineItems:  [{variantId, quantity: parseInt(quantity, 10)}] }
      }).then((res) => {
      this.props.client.writeData({ data: { isCartModalOpen: true } });
      });
}

export function removeDonationInCart(lineItemId) {
  console.log("removing donation");
  console.log(lineItemId);
  this.props.checkoutLineItemsRemove(
    { variables: { checkoutId: this.state.checkout.id, lineItems: [lineItemId] }
    }).then((res) => {
    console.log('remove donation in cart res');
    console.log(res);
    this.props.client.writeData({ data: { isCartModalOpen: true } });
  });
}

export function updateLineItemInCart(lineItemId, quantity) {
  var checkout = this.props.client.readQuery({ query: query });
  this.props.checkoutLineItemsUpdate(
    { variables: { checkoutId: checkout.checkoutId, lineItems: [{id: lineItemId, quantity: parseInt(quantity, 10)}] }
    }).then((res) => {
      console.log(res);
      this.props.client.writeData({ data: { isCartModalOpen: true }, lineItems: res.data.checkoutLineItemsAdd.checkout.lineItems.edges.node });
  });
}

export function removeLineItemInCart(lineItemId) {
  var checkout = this.props.client.readQuery({ query: query });
  this.props.checkoutLineItemsRemove(
    { variables: { checkoutId: checkout.checkoutId, lineItemIds: [lineItemId] }
    }).then((res) => {
    this.props.client.writeData({ data: { isCartModalOpen: true }, lineItems: res.data.checkoutLineItemsAdd.checkout.lineItems.edges.node });
  });
}

export function associateCustomerCheckout(customerAccessToken) {
  this.props.checkoutCustomerAssociate(
    { variables: { checkoutId: this.props.data.checkout.id, customerAccessToken: customerAccessToken }
    }).then((res) => {
      this.props.client.writeData({ data: { isCartModalOpen: true} });
  });
}
