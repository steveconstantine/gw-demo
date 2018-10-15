import React, {Component} from 'react';
import ShareButton from 'react-social-share-buttons';
import { TextField, Heading, Box } from 'gestalt';

class ProductDescriptionImage extends Component {
    render() {
      return (
        <div style={{'width': '100vw', 'height': '56px', 'position': 'fixed', 'left': '0', 'top': '0', 'right': '0', 'display': 'block', 'background': 'white', 'color': 'black'}}>
            <Heading size="xs"><p style={{'color':'rgba(0,0,0, 1)', 'position': 'fixed', 'width': '480px', 'transform': 'translate(9px, -9px)'}}>{this.props.product.vendor} - {this.props.product.title}</p></Heading>
        </div>
    );
  }
}
export default ProductDescriptionImage;
