import React, {Component} from 'react';
import ShareButton from 'react-social-share-buttons';
import { TextField, Heading, Box } from 'gestalt';

class ProductOptions extends Component {
    render() {
      return (
      <div>
        <div style={{'paddingTop': '15px'}}></div>
        <Box color="transparent" padding={1} display="flex" direction="row" alignItems="center">
        {this.props.variant_selectors}
        <Box paddingX={2}>
        </Box>
        <Box paddingX={2}>
        <label className="Product__option">
           <div className="product_quantity" style={{'color': 'black', 'textAlign': 'left', 'opacity': '1', 'marginBottom': '12.5px'}}><Heading color="lightGray" size="xs">Quantity</Heading></div>
           <TextField
              id="quantity"
              min="1"
              onChange={(value) => this.props.handleQuantityChange(value)}
              placeholder="Quantity"
              value={this.props.selectedVariantQuantity}
              type={"number"}
            />
        </label>
        </Box>
        </Box>
        <div style={{'paddingTop': '15px'}}></div>
      </div>
    );
  }
}
export default ProductOptions;
