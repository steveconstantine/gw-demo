import React, {Component} from 'react';
import ShareButton from 'react-social-share-buttons';
import { TextField, Heading, Box } from 'gestalt';

class ProductDescriptionImage extends Component {
    render() {
      return (
        <div>
            <Heading size="sm"><p style={{'color':'rgba(0,0,0, 1)', 'position': 'fixed', 'width': 'auto', 'transform': 'translateY(-99px)'}}>{this.props.product.vendor} - {this.props.product.title}</p></Heading>
            <p className={'productPriceOptions'}> {this.props.variant.availableForSale == true ? '$' + this.props.variant.price.toString() : this.props.variant.title.toString() + ' is Out of Stock'}</p>
        </div>
    );
  }
}
export default ProductDescriptionImage;
