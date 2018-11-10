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
    this.startAddVariant = this.startAddVariant.bind(this);
  }

  handleModalCloseHash() {
    const { history, client } = this.props;
    console.log('handle modal close hash');
    client.writeData({ data: { isProductModalOpen: false } })
    history.push('/cart');
  }

  startAddVariant() {
    const { data } = this.props;
    this.props.addVariantToCart(data.selectedVariant.id, data.selectedVariantQuantity);
  }

  render() {

    if (this.props.data.loading) {
      return (<div id={'spinner'} style={{'background': 'url(/skye-whalesong8x32.jpg)'}}></div>);
    }
    if (this.props.data.error) {
      console.log('data error in product add');
      return <div></div>;
    }


    const { variant, data } = this.props;
    console.log('product add');
    console.log(data.selectedVariant);
    return (
          <Button color="gray" disabled={ variant.availableForSale === false ? true : false } text={ variant.availableForSale === true ? "Add to Cart" : "Out of Stock" } onClick={() => {this.startAddVariant(); this.handleModalCloseHash()}} style={{'marginBottom':'12px', 'position': 'fixed', 'right': '5px', 'bottom': '0', 'left': '5px'}} />
    );
  }
}

const query = gql`
  query cartSuperContainerQuery {
  selectedVariantQuantity @client
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
}
`;


const ProductAddWithDataAndMutation = compose(
  graphql(query)
)(ProductAdd);

const ProductAddApollo = withApollo(ProductAddWithDataAndMutation)


export default ProductAddApollo;
