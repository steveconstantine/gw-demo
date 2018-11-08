import React, {Component} from 'react';
import ShareButton from 'react-social-share-buttons';
import { Box } from 'gestalt';
import { withRouter } from 'react-router-dom';

class ProductSocial extends Component {
    render() {
      return (
      <div className={'socialOptions'}>
          <Box display="flex" alignContent="flex-end" justifyContent="flex-end">
            <Box display="flex" column={6} alignContent="center" width="100%" justifyContent="flex-end" flexGrow="2">
               <ShareButton
                  compact
                  socialMedia={'facebook'}
                  url={'https://localhost:3000' + this.props.location.pathname}
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

const ProductSocialRouter = withRouter(ProductSocial);

export default ProductSocialRouter;
