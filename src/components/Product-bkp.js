/* eslint-disable import/first */

import React, {Component} from 'react';
//import ProductSocial from './Product/ProductSocial';
//import ProductOptions from './Product/ProductOptions';
//import ProductDescriptionImage from './Product/ProductDescriptionImage';
import VariantSelector from './Product/VariantSelector';
import SingleVariantSelector from './Product/SingleVariantSelector';
import ProductSocial from './Product/ProductSocial';
import ProductOptions from './Product/ProductOptions';
import ProductDescriptionImage from './Product/ProductDescriptionImage';
import { graphql, compose } from 'react-apollo';
import { Query } from "react-apollo";

// import Info from './Info/Info';
import { Box, Column, TextField, Toast, IconButton, Heading, Button, Image } from 'gestalt';
import { ModalLink } from 'sc-react-router-modal';
import Swipeable from 'react-swipeable';
import Rodal from 'sc-rodal';
import isMobile from 'ismobilejs';
import ReactModal from 'react-modal';
import _ from 'underscore';
import BackgroundImage from 'react-background-image-loader';
import gql from 'graphql-tag';
import { withRouter } from "react-router-dom";
import {
  createCheckout,
  checkoutLineItemsAdd,
  checkoutLineItemsUpdate,
  checkoutLineItemsRemove,
  checkoutCustomerAssociate,
  addVariantToCart,
  addDonationToCart,
  updateDonationInCart,
  removeDonationInCart,
  updateLineItemInCart,
  removeLineItemInCart,
  associateCustomerCheckout
} from '../checkout';

ReactModal.setAppElement('#root');


export class ModalLinkProduct extends React.Component {

  render() {
    const { product, cartOpen } = this.props;

    let variantImage = product.images.edges[0].node.src

    const styles = {
      homeBackground: {
        backgroundImage: `url(${variantImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: 'calc(200px + 25vh)',
        minWidth: '185px',
        minHeight: '200px',
        maxHeight: '400px'
      },
      titleAppearance: {
        borderRadius: '0 5px 5px 0',
        transform:'translateY(200px)',
        marginRight: '5%',
        padding: '1px 0px 1px 0px',
        background: 'rgba(255,255,255,0.44)'
      },
      titleHide: {
        display: 'none'
      }
    };


    return (
      <div>
        <ModalLink
          path={`/art/${product.id}`}
         >
                <BackgroundImage style={styles.homeBackground} src={variantImage} placeholder={variantImage} key={product.name}>
                  <div style={ cartOpen == true ? styles.titleHide : styles.titleAppearance}>
                  <h5 className="Product__title" style={{'paddingLeft':'16px', 'marginBottom': '0', 'zIndex':'4', 'color' : 'rgba(0,0,0,0.8)'}}>{product.title}</h5>
                  <h5 className="Product__vendor" style={{'paddingLeft':'16px', 'marginTop': '2px', 'zIndex': '4','color' : 'rgba(0,0,0,0.8)'}}>{product.vendor}</h5>
                  </div> }
                  <Box alignItems="center" display="flex" alignSelf="center" justifyContent="center" >
                    <Box padding={1}>
                    </Box>
                  </Box>
                </BackgroundImage>
        </ModalLink>
      </div>
    );
  }
}

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = { order: null };

   let defaultOptionValues = {};
    this.props.product.options.forEach((selector) => {
      defaultOptionValues[selector.name] = selector.values[0].value;
    });
    this.state = { cartDisabled: false, scrollElement: 0, isOpen: false, selectedVariantQuantity: 1, showConfirmationToast: 0, selectedOptions: defaultOptionValues, modalOpen: false, modalRunning: true};
    this.handleModalClose = this.handleModalClose.bind(this);
    this.handleModalCloseHash = this.handleModalCloseHash.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.findImage = this.findImage.bind(this);
    this.goPreviousProduct = this.goPreviousProduct.bind(this);
    this.goNextProduct = this.goNextProduct.bind(this);
    this.scrollDiv = this.scrollDiv.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
  }

  componentWillMount() {
    localStorage.remove('checkout');
    this.props.createCheckout({
      variables: {
        input: {}
      }}).then((res) => {
      let resSave = localStorage.get('checkout') || res.data.checkoutCreate.checkout;
      this.setState({
        checkout: resSave
      });
    });

    this.props.product.options.forEach((selector) => {
      this.setState({
        selectedOptions: { [selector.name]: selector.values[0] }
      });
    });
  }

  componentDidMount() {
  //  let focusElement = document.getElementsByClassName('rodal-dialog')[0].firstChild;
 //   focusElement.focus();
  }

  findImage(images, variantId) {
    const primary = images[0];

    const image = images.filter(function (image) {
      return image.variant_ids.includes(variantId);
    })[0];

    return (image || primary).src;
  }

  handleOptionChange(event, name) {
    let selectedOptions = this.state.selectedOptions;
    selectedOptions[name] = event;

     if (event !== null && _.isUndefined(this.props.product.variants.edges.find((variant) => {
      return variant.node.selectedOptions.every((selectedOption) => {
        return selectedOptions[selectedOption.name] === selectedOption.value;
      });
    })) == false) {
    const selectedVariant = this.props.product.variants.edges.find((variant) => {
      return variant.node.selectedOptions.every((selectedOption) => {
        return selectedOptions[selectedOption.name] === selectedOption.value;
      });
    }).node;
      this.setState({cartDisabled: false});
      this.setState({
      selectedVariant: selectedVariant,
      selectedVariantImage: selectedVariant.image.src
    });
      } else {
        this.setState({cartDisabled: true});
      }

  }

  handleQuantityChange(event) {
    let value = event.value;
    if (value < 1) {
      value = 1;
    }
    this.setState({
      selectedVariantQuantity: value
      });
  }


  handleModalClose() {
    this.props.history.push('/');
    this.setState({modalOpen: false, modalRunning: false});
  }

  handleModalCloseHash() {
    this.props.history.push('/cart');
    this.setState({modalOpen: false, modalRunning: false});
  }

  goPreviousProduct() {
    this.setState({modalRunning: true});
    let currentIndex = this.props.productIndex;
    if (currentIndex === 0) {
      currentIndex = this.props.productIDs.length;
    }
    this.props.history.push('/art/' + this.props.productIDs[currentIndex - 1]);
  }

    goNextProduct() {
    this.setState({modalRunning: true});
    let currentIndex = this.props.productIndex;
    if (currentIndex === this.props.productIDs.length - 1) {
      currentIndex = -1;
    }
    this.props.history.push('/art/' + this.props.productIDs[currentIndex + 1]);
  }

  scrollDiv() {
  //   console.log(document.activeElement);
  //    document.getElementById('rodal-modal').firstChild.click();
  }

  render() {
   let { singleProductQuery, product } = this.props;

  let dataResult = singleProductQuery({});

  console.log(dataResult);

 let variantImage = this.state.selectedVariantImage || product.images.edges[0].node.src
      let variant = this.state.selectedVariant || product.variants.edges[0].node
      let variantQuantity = this.state.selectedVariantQuantity
      let variant_selectors = [];
      let text_button_variant_selectors = [];
      if (product.variants.edges[0].node.selectedOptions.length > 1) {
      variant_selectors = product.options.map((option) => {
        return (
          <Box paddingX={2}>
          <VariantSelector
            handleOptionChange={this.handleOptionChange}
            key={option.id.toString()}
            option={option}
            product={product}
            variant={variant}
          />
          </Box>
        );
      });
      } else {
            variant_selectors = product.options.map((option) => {
        return (
          <SingleVariantSelector
            handleOptionChange={this.handleOptionChange}
            key={option.id.toString()}
            option={option}
            product={product}
            variant={variant}
          />
        );
      });
      }

      const styles = {
      modalBackground: {
      backgroundImage: `url(${variantImage})`,
      height: '100vh',
      minHeight: '100%',
      width: '100vw',
      marginBottom: '0 !important',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      marginTop: '0 !important',
      marginLeft:'auto',
      marginRight: 'auto',
      padding: '0',
      zIndex: '5 !important',
      overflowY: 'scroll',
      overflowX: 'hidden',
      },
      desktopBackground: {
      backgroundImage: `url(${variantImage})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      padding: '0',
      zIndex: '5 !important',
      overflowY: 'scroll',
      overflowX: 'hidden',
      minHeight: '80vh',
      maxWidth: '40vw',
      },
      homeBackground: {
      backgroundImage: `url(${variantImage})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '100vh',
      minWidth: '100vw',
      },
      modalContent: {
      height: '90vh',
      width: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.6)',
      }
      };
      let bioDescription = "";

      return (
        <div id="top-level-modal" style={{'height':'100vh', 'width': '100vw'}}>
        <Box display="flex" direction="row" paddingY={2}>
        <div style={{ overlay: {}, content: {          backgroundImage: `url(${variantImage})`,
        backgroundBlendMode: 'difference',
                height: '100vh',
                minHeight: '100vh',
                marginBottom: '0 !important',
                backgroundPosition: 'bottom center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                marginTop: '0 !important',
                marginLeft:'auto',
                marginRight: 'auto',
                width: '100vw',
                zIndex: '5 !important',} }}>
        <div style={{'background': 'rgba(255,255,255,0.35)', 'padding': '25px', 'minHeight': '100vh' }}>
        <div className="just-donate" style={{'position': 'fixed', 'right': '12px', 'top': '9px', 'zIndex': '9999'}}>
        <Box padding={2}>
        <IconButton
        accessibilityLabel="Cancel"
        bgColor="white"
        icon="cancel"
        iconColor="darkGray"
        onClick={() => this.handleModalClose()}
        />
        </Box>
        </div>

          <Swipeable
                  onSwipingRight={() => this.goPreviousProduct()}
                  onSwipingLeft={() => this.goNextProduct()} >
                <Box display="flex" direction="row" paddingY={2}>
                    <Column span={12}>
                    <Box padding={2}>
                    <ProductDescriptionImage variantImage={variantImage} bioDescription={bioDescription} product={product} variant={variant} />
                      {product.images.edges.length ? <img src={variantImage} style={{'maxHeight': '450px', 'paddingTop': '50px'}} alt={`${product.title} product shot`}/> : null}
                      <div className={'mobileOptions'}>
                      <ProductOptions handleQuantityChange={this.handleQuantityChange} variant_selectors={variant_selectors} />
                      <label className="Product__option">
                        <div style={{'maxWidth': '100%'}}>
                         <TextField
                            id="quantity"
                            min="1"
                            onChange={(value) => this.handleQuantityChange(value)}
                            placeholder="Quantity"
                            value={this.props.selectedVariantQuantity}
                            type={"number"}
                          />
                          </div>
                      </label>
                      <p className={'productPriceOptions'}><span style={{'color': 'black'}}> {variant.availableForSale == true ? '$' + variant.price.toString() + ' / ea' : variant.title.toString() + ' is Out of Stock'}</span></p>
                      <Button color="gray" disabled={ this.state.cartDisabled == true || variant.availableForSale === false ? true : false } text={ variant.availableForSale === true ? "Add to Cart" : "Out of Stock" } onClick={() => {this.props.addVariantToCart(variant.id, variantQuantity); this.handleModalCloseHash;}} style={{'marginBottom':'12px', 'position': 'fixed', 'right': '5px', 'bottom': '0', 'left': '5px'}} />
                      </div>
                    </Box>
                  </Column>
                </Box>
              </Swipeable>
              </div>
              <div className={'desktopOptions'} style={{'width': '33vw', 'height': '100vh', 'position': 'fixed', 'top': '56px', 'right': '0', 'display': 'block', 'background': 'rgba(0,0,0,0.45)', 'color': 'white'}}>
                <ProductOptions handleQuantityChange={this.handleQuantityChange} variant_selectors={variant_selectors} />
                <div style={{'display': 'inline'}}>
                <p className={'productPriceOptions'}><span style={{'color': '#222', 'fontFamily': 'LiberationSansRegular'}}> {variant.availableForSale == true ? '$' + variant.price.toString() + ' / ea': variant.title.toString() + ' is Out of Stock'}</span></p>
                </div>
                <div style={{'display': 'inline', 'width': '33vw'}}>
                <label className="Product__option">
                  <div style={{'maxWidth': '22vw'}}>
                   <TextField
                      id="quantity"
                      min="1"
                      onChange={(value) => this.handleQuantityChange(value)}
                      placeholder="Quantity"
                      value={this.props.selectedVariantQuantity}
                      type={"number"}
                    />
                    </div>
                    <div style={{'width': '9vw', 'marginLeft': 'calc(23vw + 4px)', 'transform': 'translateY(-63px)'}}>
                    <Button color="gray" disabled={ this.state.cartDisabled == true || variant.availableForSale === false ? true : false } text={ variant.availableForSale === true ? "Add to Cart" : "Out of Stock" } onClick={() => {this.props.addVariantToCart(variant.id, variantQuantity); this.handleModalCloseHash();}} style={{'marginBottom':'12px', 'position': 'fixed !important', 'right': '5px', 'bottom': '0', 'left': '5px'}} />
                    </div>
                </label>
                </div>
              </div>
              <ProductSocial location={this.props.location} product={product} />
              </div>
          </Box>
        </div>
    );
  }
}


const QUERY_SINGLE_PRODUCT = gql`
query singleProductQuery($id: Int!) {
  shop {
  name
  products(first: 15, reverse: false, query: { id: $id } ) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      edges {
        node {
          id
          title
          vendor
          handle
          productType
          descriptionHtml
          options {
            id
            name
            values
          }
          variants(first: 250) {
            edges {
              node {
                id
                title
                selectedOptions {
                  name
                  value
                }
                image {
                  src
                }
                availableForSale
                price
              }
            }
          }
          images(first:250) {
            pageInfo {
              hasNextPage
              hasPreviousPage
            }
            edges {
              node {
                src
              }
            }
          }
        }
      }
    }
  }
}
`;


const ProductWithDataAndMutation = compose(
  graphql(QUERY_SINGLE_PRODUCT, {name: "singleProductQuery"}),
  graphql(createCheckout, {name: "createCheckout"}),
  graphql(checkoutLineItemsAdd, {name: "checkoutLineItemsAdd"}),
  graphql(checkoutLineItemsUpdate, {name: "checkoutLineItemsUpdate"}),
  graphql(checkoutLineItemsRemove, {name: "checkoutLineItemsRemove"}),
  graphql(checkoutCustomerAssociate, {name: "checkoutCustomerAssociate"})
)(Product);

export default withRouter(ProductWithDataAndMutation);

/**
f
gestalt css editting

<Box
   fit
   dangerouslySetInlineStyle={{
     __style: {
       bottom: 50,
       left: '50%',
       transform: 'translateX(-50%)',
       zIndex: 10
     },
   }}
   paddingX={1}
   position='fixed'
 >
</Box>

**/
