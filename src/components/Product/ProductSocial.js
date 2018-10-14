import React, {Component} from 'react';
import ShareButton from 'react-social-share-buttons';
import { Box } from 'gestalt';

class ProductSocial extends Component {
    render() {
      return (
      <div className={'socialOptions'}>
        <div style={{'paddingTop': '25px'}}></div>
          <Box display="flex" alignContent="center" justifyContent="center">
        ``  <Box display="flex" column={6} alignContent="center" justifyContent="center" flexGrow="2">
               <ShareButton
                  compact
                  socialMedia={'facebook'}
                  url={'https://floating-woodland-46616.herokuapp.com' + this.props.location.pathname}
                  media={this.props.variantImage}
                  text={this.props.product.vendor + ' / ' + this.props.product.title}
              />
                <ShareButton
                  compact
                  socialMedia={'google-plus'}
                  url={'https://floating-woodland-46616.herokuapp.com' + this.props.location.pathname}
                  media={this.props.variantImage}
                  text={this.props.product.vendor + ' / ' + this.props.product.title}
              />
               <ShareButton
                  compact
                  socialMedia={'twitter'}
                  url={'https://floating-woodland-46616.herokuapp.com' + this.props.location.pathname}
                  media={this.props.variantImage}
                  text={this.props.product.vendor + ' / ' + this.props.product.title}
              />
               <ShareButton
                  compact
                  socialMedia={'pinterest'}
                  url={'https://floating-woodland-46616.herokuapp.com' + this.props.location.pathname}
                  media={this.props.variantImage}
                  text={this.props.product.vendor + ' / ' + this.props.product.title}
              />
            </Box>
          </Box>
        <div style={{'paddingTop': '124px'}}></div>
      </div>
    );
  }
}
export default ProductSocial;
