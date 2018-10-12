import React, {Component} from 'react';
import ShareButton from 'react-social-share-buttons';
import { TextField, Heading, Box } from 'gestalt';

class ProductOptions extends Component {
    render() {
      return (
      <div>
        <div id="2" style={{'paddingTop': '15px'}}></div>
        {this.props.variant_selectors}
        <label className="Product__option">
           <span className="product_quantity" style={{'color': 'black', 'textAlign': 'left', 'opacity': '1'}}><Heading color="lightGray" size="xs">Quantity</Heading></span>
           <TextField
              id="quantity"
              min="1"
              onChange={(value) => this.props.handleQuantityChange(value)}
              placeholder="Quantity"
              value={this.props.selectedVariantQuantity}
              type={"number"}
            />
        </label>
        <div id="3" style={{'paddingTop': '15px'}}></div>
      </div>
    );
  }
}
export default ProductOptions;
