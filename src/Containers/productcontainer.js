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


let CHECKOUT_ID;

var localStorage = require('web-storage')().localStorage;

var params_for_query = {};

class ProductContainer extends React.Component {

  constructor() {
    super();

    this.state = {
      checkoutId: null,
      checkout: { lineItems: { edges: [] } }
    };

    this.addVariantToCart = addVariantToCart.bind(this);
    this.addThisVariantToCart = this.addThisVariantToCart.bind(this);
    this.associateCustomerCheckout = associateCustomerCheckout.bind(this);
  }

  componentWillMount() {
    let theProduct = this.props.client.readQuery({ query: query, variables: { id: this.props.match.params.id } });
    this.props.client.writeData({ data: { initialVariant: theProduct.variants.edges[0] } });
    let checkoutIdCart = this.props.client.readQuery({
    query: checkoutQuery});
      console.log(checkoutIdCart.selectedOptions);
      console.log(theProduct);

  //    let theProduct = this.props.client.readQuery({
  //    query: query, variables: { id: this.props.match.params.id } });
  //      console.log(theProduct);
    /*  let selectedOptions = this.props.client.readQuery({
      query: gql`query($id: ID!, $selectedOptions: selectedOption) {
        ...ProductFragment
      }${ProductFragment}`, variables: { id: this.props.match.params.id, selectedOptions: theProduct.node.variants.edges.node } });*/
    if (checkoutIdCart.checkoutId == null) {
      console.log('createCheckout');
      this.props.createCheckout({
        variables: {
          input: {}
        }}).then((res) => {
        let resSave = res.data.checkoutCreate.checkout;
        console.log(res.data.checkoutCreate.checkout);
        this.props.client.writeData({ data: { checkoutId: res.data.checkoutCreate.checkout.id } })
        this.setState({checkoutIdQuery: res.data.checkoutCreate.checkout.id});
        this.setState({checkoutCreatedQuery: true });
      }, this);
    } else {
      this.setState({checkoutCreatedQuery: true });
      }
  }

  componentDidMount() {

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

      const { data, history, match } = this.props;
      const { url } = this.props.location;

      console.log('data.checkout product container');
      console.log(data);

      return (
          <div className="appcontainer">
              <ProductRouter
              history={ history }
              match={ match }
              location={ url }
              cartDisabled={data.cartDisabled}
              addVariantToCart={(variantId, selectedVariantQuantity) => this.addThisVariantToCart(variantId, selectedVariantQuantity)}
              />
          </div>
      );
    }
}

const query = gql`query($id: ID!) {
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
    }
  }
}`;


const checkoutQuery = gql`query {
    checkoutCreated @client
    checkoutId @client
    selectedOptions @client
    lineItems @client
  }`

function addVariantToCart(variantId, quantity) {

  var checkout = this.props.client.readQuery({ query: checkoutQuery });

  if (checkout.checkoutId == null) {
    console.log('createCheckout');
    this.props.createCheckout({
      variables: {
        input: {}
      }}).then((res) => {
      let resSave = res.data.checkoutCreate.checkout;
      console.log(res.data.checkoutCreate.checkout);
      this.props.client.writeData({ data: { checkoutId: res.data.checkoutCreate.checkout.id } })
      this.setState({checkoutIdQuery: res.data.checkoutCreate.checkout.id});
      this.setState({checkoutCreatedQuery: true });
    }, this);
  }
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
  graphql(createCheckout, {name: "createCheckout"}),
  graphql(checkoutLineItemsAdd, {name: "checkoutLineItemsAdd"}),
  graphql(checkoutLineItemsUpdate, {name: "checkoutLineItemsUpdate"}),
  graphql(checkoutLineItemsRemove, {name: "checkoutLineItemsRemove"}),
  graphql(checkoutCustomerAssociate, {name: "associateCustomerCheckout"}),
  graphql(checkoutCustomerAssociate, {name: "checkoutCustomerAssociate"})
)(ProductContainer);

const ProductContainerRouter = withRouter(ProductContainerWithDataAndMutation)


const ProductContainerApollo = withApollo(ProductContainerRouter)

export default ProductContainerApollo;
