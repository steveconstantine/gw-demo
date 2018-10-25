import React, {Component} from 'react';
import ShareButton from 'react-social-share-buttons';
import { TextField, Heading, Box } from 'gestalt';

class ProductOptions extends Component {
    render() {
      return (
      <div>
        <div className={'variantSelectors'}>
        <Box color="transparent" padding={1} display="flex" direction="row" alignItems="center">
        {this.props.variant_selectors}
        <Box paddingX={2}>
        </Box>
        <Box paddingX={2}>
        <div style={{'paddingTop': '15px'}}></div>
        </Box>
        </Box>
        </div>
        <div style={{'paddingTop': '15px'}}></div>
      </div>
    );
  }
}
export default ProductOptions;
