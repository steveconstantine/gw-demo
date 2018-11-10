import React from 'react';
import Home from '../Home';
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
  addDonationToCart,
  updateDonationInCart,
  removeDonationInCart,
  updateLineItemInCart,
  removeLineItemInCart,
  associateCustomerCheckout
} from '../checkout';
import { withApollo } from "react-apollo";
import _ from 'underscore';


class ProductContainer extends React.Component {

  constructor() {
    super();
    this.addVariantToCart = addVariantToCart.bind(this);
    this.addThisVariantToCart = this.addThisVariantToCart.bind(this);
    this.associateCustomerCheckout = associateCustomerCheckout.bind(this);
  }

  componentWillMount() {
    console.log('firstItem');
    console.log(this.props.firstItem);
  //  this.props.client.writeData({ data: { variants: this.props.firstItem.node.variants } });
    this.props.client.writeData({ data: { currentProduct: this.props.firstItem.node } });
    this.props.client.writeData({ data: { selectedVariant: this.props.firstItem.node.variants.edges[0].node } });
    this.props.client.writeData({ data: { selectedVariantQuantity: 1 } });
    this.props.client.writeData({ data: { selectedOptions: this.props.firstItem.node.variants.edges[0].node.selectedOptions }});
  }

  addThisVariantToCart(variantId, selectedVariantQuantity) {
    this.addVariantToCart(variantId, selectedVariantQuantity);
  }

  render() {
    if (this.props.data.loading) {
      return (<div id={'spinner'} style={{'background': 'url(/skye-whalesong8x32.jpg)'}}></div>);
    }

    if (this.props.data.error) {
      return <p>{this.props.data.error.message}</p>;
    }


    const { data, history, match, client } = this.props;
    const { url } = this.props.location;

    if (data) {
      console.log('product container');
      console.log(data.currentProduct);
      return (
          <div className="appcontainer">
              <ProductRouter
              history={ this.props.history }
              match={ this.props.match }
              url={ url }
              client={client}
              addVariantToCart={(variantId, selectedVariantQuantity) => this.addThisVariantToCart(variantId, selectedVariantQuantity)}
              />
          </div>
      );
    }
  }
}

const checkoutQuery = gql` {
    cartDisabled @client
    checkoutCreated @client
    checkoutId @client
    selectedVariant @client {
      availableForSale
      id
      image {
        src
      }
      price
      selectedOptions {
        name
        value
      }
      title
    }
    selectedOptions @client {
      name
      value
    }
    currentProduct @client {
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
    }
  }`;

function addVariantToCart(variantId, quantity) {

  var checkout = this.props.client.readQuery({ query: checkoutQuery });
    console.log(checkout);
    this.props.checkoutLineItemsAdd(
      { variables: { checkoutId: checkout.checkoutId, lineItems:  [{variantId, quantity: parseInt(quantity, 10)}] }
      }).then((res) => {
        console.log('res');
        console.log(res);
      if (_.isNull(variantId) || _.isUndefined(variantId)) {
            console.log('null / undefined variantId');
      } else {
        console.log('res.id');
        console.log(res.data.checkoutLineItemsAdd.checkout.lineItems);
        this.setState({ checkoutId: res.data.checkoutLineItemsAdd.checkout.id })
        this.props.client.writeData({ data: { isCartModalOpen: true, checkoutId: res.data.checkoutLineItemsAdd.checkout.id, lineItems: res.data.checkoutLineItemsAdd.checkout.lineItems.edges.node } });
      }
    }, this).catch((e) => {
      console.log('addVariantToCart error');
      console.log(e);
    });
    this.props.history.push('/cart');
  }

const ProductContainerWithDataAndMutation = compose(
  graphql(checkoutQuery),
  graphql(checkoutLineItemsAdd, {name: "checkoutLineItemsAdd"}),
  graphql(checkoutLineItemsUpdate, {name: "checkoutLineItemsUpdate"}),
  graphql(checkoutLineItemsRemove, {name: "checkoutLineItemsRemove"}),
  graphql(checkoutCustomerAssociate, {name: "associateCustomerCheckout"}),
  graphql(checkoutCustomerAssociate, {name: "checkoutCustomerAssociate"})
)(ProductContainer);

const ProductContainerApollo = withRouter(ProductContainerWithDataAndMutation)

export default ProductContainerApollo;
