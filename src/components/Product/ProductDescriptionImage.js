import React, {Component} from 'react';
import ShareButton from 'react-social-share-buttons';
import { TextField, Heading, Box } from 'gestalt';

class ProductDescriptionImage extends Component {
    render() {
      return (
        <div>
            <Heading size="sm"><span style={{'color':'rgba(0,0,0, 1)'}}>{this.props.product.vendor}<br/>{this.props.product.title}</span></Heading>
            <div id="rodal-image" style={{'paddingLeft': '3px', 'maxWidth': window.innerWidth - 136 + 'px', 'paddingBottom': '15px', 'paddingTop': '15px'}} dangerouslySetInnerHTML={{__html: this.props.bioDescription[0]}}></div>
            <span className="Product__price" style={{'fontWeight': 'bold', 'color': '#FFF', 'textAlign': 'center', 'opacity': '1', 'fontSize': '20px'}}>{this.props.variant.availableForSale == true ? '$' + this.props.variant.price.toString() : this.props.variant.title.toString() + ' is Out of Stock'}</span>
        </div>
    );
  }
}
export default ProductDescriptionImage;
