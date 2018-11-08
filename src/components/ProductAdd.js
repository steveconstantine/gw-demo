import React, {Component} from 'react';
import { ApolloConsumer } from 'react-apollo';
import { Button } from 'gestalt';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { withApollo } from "react-apollo";

class ProductAdd extends Component {
  constructor(props) {
    super(props);
    this.handleModalCloseHash = this.handleModalCloseHash.bind(this);
  }

  handleModalCloseHash(history, client) {
    console.log('handle modal close hash');
    client.writeData({ data: { isProductModalOpen: false } })
    history.push('/cart');
  }

  startAddVariant() {
    this.props.addVariantToCart(this.props.variant.node.id, this.props.selectedVariantQuantity);
  }

  render() {

    if (this.props.data.loading) {
      return (<div id={'spinner'} style={{'background': 'url(/skye-whalesong8x32.jpg)'}}></div>);
    }
    if (this.props.data.error) {
      console.log('data error in cart super');
      return <div></div>;
    }


    const { variant, selectedVariantQuantity, history, client, data, cartDisabled } = this.props;
    console.log('variant.id');
    console.log(variant.node.id);
    return (
          <Button color="gray" disabled={ variant.availableForSale === false ? true : false } text={ variant.availableForSale === true ? "Add to Cart" : "Out of Stock" } onClick={() => {this.startAddVariant(); this.handleModalCloseHash(history, client)}} style={{'marginBottom':'12px', 'position': 'fixed', 'right': '5px', 'bottom': '0', 'left': '5px'}} />
    );
  }
}

const query = gql`
  query cartSuperContainerQuery {
  lineItems @client
}
`;


const ProductAddWithDataAndMutation = compose(
  graphql(query)
)(ProductAdd);

const ProductAddApollo = withApollo(ProductAddWithDataAndMutation)


export default ProductAddApollo;
