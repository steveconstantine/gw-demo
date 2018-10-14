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

// import Info from './Info/Info';
import { Box, Column, TextField, Toast, IconButton, Heading, Button, Image } from 'gestalt';
import { ModalLink } from 'sc-react-router-modal';
import Swipeable from 'react-swipeable';
import Rodal from 'sc-rodal';
import isMobile from 'ismobilejs';
import ReactModal from 'react-modal';
import _ from 'underscore';
import BackgroundImage from 'react-background-image-loader';

ReactModal.setAppElement('#root');


class ModalLinkProduct extends React.Component {
  state = { show: false }

  render() {
      let product = this.props.product;
    let variantImage = this.state.selectedVariantImage || this.props.product.images.edges[0].node.src
      const styles = {
        homeBackground: {
          backgroundImage: `url(${variantImage})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: 'calc(200px + 25vh)',
          minWidth: '200px',
          minHeight: '200px',
          maxHeight: '400px'
        }
      };


    return (
      <div>
      {this.props.isSliding == false ?
          <ModalLink
          path={`/art/${product.vendor.replace(" ","-").toLowerCase().toString()}-${product.title.replace(" ","-").toLowerCase().toString()}`}
          parentPath='/'
          component={Product}
          props={{
          addVariantToCart: this.props.addVariantToCart,
          client: this.props.client,
          checkout: this.props.checkout,
          key: product.id.toString(),
          product: product,
          artSize: (Math.random() + 1),
          productIDs: this.props.productIDs,
          productIndex: this.props.productIndex,
          handleImageLoaded: this.props.handleImageLoaded
        }}>
              <BackgroundImage style={styles.homeBackground} src={variantImage} placeholder={variantImage} key={this.props.product.name}>
                <div className="Product_title__overlay" style={{'borderRadius': '0 5px 5px 0', 'transform':'translateY(270px)', 'marginRight': '5%', 'padding': '1px 0px 1px 0px', 'background': 'rgba(255,255,255,0.44)'}}>
                <h5 className="Product__title" style={{'paddingLeft':'16px', 'marginBottom': '0', 'zIndex':'4', 'color' : 'rgba(0,0,0,0.8)'}}>{this.props.product.title}</h5>
                <h5 className="Product__vendor" style={{'paddingLeft':'16px', 'marginTop': '2px', 'zIndex': '4','color' : 'rgba(0,0,0,0.8)'}}>{this.props.product.vendor}</h5>
                </div>
                <Box alignItems="center" display="flex" alignSelf="center" justifyContent="center" >
                  <Box padding={1}>
                  </Box>
                </Box>
              </BackgroundImage>
          </ModalLink> : <BackgroundImage style={styles.homeBackground} src={variantImage} placeholder={variantImage} key={this.props.product.name}>
                          <div className="Product_title__overlay" style={{'borderRadius': '0 5px 5px 0', 'transform':'translateY(270px)', 'marginRight': '5%', 'padding': '1px 0px 1px 0px', 'background': 'rgba(255,255,255,0.44)'}}>
                          <h5 className="Product__title" style={{'paddingLeft':'16px', 'marginBottom': '0', 'zIndex':'4', 'color' : 'rgba(0,0,0,0.8)'}}>{this.props.product.title}</h5>
                          <h5 className="Product__vendor" style={{'paddingLeft':'16px', 'marginTop': '2px', 'zIndex': '4','color' : 'rgba(0,0,0,0.8)'}}>{this.props.product.vendor}</h5>
                          </div>
                          <Box alignItems="center" display="flex" alignSelf="center" justifyContent="center" >
                            <Box padding={1}>
                            </Box>
                          </Box>
                        </BackgroundImage> }
      </div>
    );
  }
}

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = { order: null};

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
    this.props.history.push('/art/' + this.props.productIDs[currentIndex - 1][1].replace(" ","-").toLowerCase().toString() + '-' + this.props.productIDs[currentIndex - 1][2].replace(" ","-").toLowerCase().toString());
  }

    goNextProduct() {
    this.setState({modalRunning: true});
    let currentIndex = this.props.productIndex;
    if (currentIndex === this.props.productIDs.length - 1) {
      currentIndex = -1;
    }
    this.props.history.push('/art/' + this.props.productIDs[currentIndex + 1][1].replace(" ","-").toLowerCase().toString() + '-' + this.props.productIDs[currentIndex + 1][2].replace(" ","-").toLowerCase().toString());
  }

  scrollDiv() {
  //   console.log(document.activeElement);
  //    document.getElementById('rodal-modal').firstChild.click();
  }

  render() {
    let variantImage = this.state.selectedVariantImage || this.props.product.images.edges[0].node.src
    let variant = this.state.selectedVariant || this.props.product.variants.edges[0].node
    let variantQuantity = this.state.selectedVariantQuantity || 1
    let variant_selectors = [];
    let text_button_variant_selectors = [];
    if (this.props.product.variants.edges[0].node.selectedOptions.length > 1) {
    variant_selectors = this.props.product.options.map((option) => {
      return (
        <Box paddingX={2}>
        <VariantSelector
          handleOptionChange={this.handleOptionChange}
          key={option.id.toString()}
          option={option}
          product={this.props.product}
          variant={variant}
          selectedVariant={this.selectedVariant}
        />
        </Box>
      );
    });
    } else {
          variant_selectors = this.props.product.options.map((option) => {
      return (
        <SingleVariantSelector
          handleOptionChange={this.handleOptionChange}
          key={option.id.toString()}
          option={option}
          product={this.props.product}
          variant={variant}
          selectedVariant={this.selectedVariant}
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
    let bioDescription = this.props.product.descriptionHtml.split("<h1><span>BIO</span></h1>");
         return (
      <div id="top-level-modal" style={{'height':'100vh', 'width': '100vw'}}>
      <Box display="flex" direction="row" paddingY={2}>
       <ReactModal
  isOpen={this.state.modalRunning}
  onRequestClose={() => this.handleModalClose()}
  closeTimeoutMS={50}
  style={{ overlay: {}, content: {          backgroundImage: `url(${variantImage})`,
          height: '100vh',
          minHeight: '100vh',
          marginBottom: '0 !important',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          marginTop: '0 !important',
          marginLeft:'auto',
          marginRight: 'auto',
          width: '100vw',
          zIndex: '5 !important',} }}
  contentLabel="Example Modal"
  portalClassName="ReactModalPortal"
  overlayClassName="ReactModal__Overlay"
  className="ReactModal__Content"
  bodyOpenClassName="ReactModal__Body--open"
  htmlOpenClassName="ReactModal__Html--open"
  ariaHideApp={true}
  shouldFocusAfterRender={true}
  shouldCloseOnOverlayClick={true}
  shouldCloseOnEsc={true}
  shouldReturnFocusAfterClose={true}
  role={"dialog"}
  aria={{
    labelledby: "heading",
    describedby: "full_description"
  }}
><div style={{'background': 'rgba(255,255,255,0.35)', 'padding': '50px' }}>
  <div className="just-donate" style={{'position': 'fixed', 'right': '22px', 'top': '22px'}}>
    <Box padding={2}>
    <IconButton
      accessibilityLabel="Cancel"
      bgColor="white"
      icon="cancel"
      iconColor="darkGray"
      onClick={() => {this.handleModalClose()}}
    />
    </Box>
  </div>

        <Swipeable
                onSwipingRight={() => this.goPreviousProduct()}
                onSwipingLeft={() => this.goNextProduct()} >
              <Box display="flex" direction="row" paddingY={2}>
                  <Column span={12}>
                  <Box padding={2}>
                  <ProductDescriptionImage variantImage={variantImage} bioDescription={bioDescription} product={this.props.product} variant={variant} />
                    {this.props.product.images.edges.length ? <img onLoad={this.props.handleImageLoaded} src={variantImage} style={{'maxHeight': '450px'}} alt={`${this.props.product.title} product shot`}/> : null}
                    <div className={'mobileOptions'}>
                    <ProductOptions handleQuantityChange={this.handleQuantityChange} selectedVariantQuantity={this.state.selectedVariantQuantity} variant_selectors={variant_selectors} />
                    <Button color="gray" disabled={ this.state.cartDisabled == true || variant.availableForSale === false ? true : false } text={ variant.availableForSale === true ? "Add to Cart" : "Out of Stock" } onClick={() => {this.props.addVariantToCart(variant.id, variantQuantity); this.handleModalCloseHash();}} style={{'marginBottom':'12px', 'position': 'fixed', 'right': '5px', 'bottom': '0', 'left': '5px'}} />
                    </div>
                  </Box>
                  <ProductSocial location={this.props.location} product={this.props.product} />
                </Column>
              </Box>
            </Swipeable>
            </div>
            <div className={'desktopOptions'} style={{'width': '100vw', 'height': '126px', 'position': 'fixed', 'left': '0', 'bottom': '0', 'right': '0', 'display': 'block', 'background': 'rgba(0,0,0,0.45)', 'color': 'white'}}>
              <ProductOptions handleQuantityChange={this.handleQuantityChange} selectedVariantQuantity={this.state.selectedVariantQuantity} variant_selectors={variant_selectors} />
              <div style={{'position': 'fixed', 'bottom': '26px', 'right': '16px', 'width': '84px'}}>
              <Button color="gray" disabled={ this.state.cartDisabled == true || variant.availableForSale === false ? true : false } text={ variant.availableForSale === true ? "Add to Cart" : "Out of Stock" } onClick={() => {this.props.addVariantToCart(variant.id, variantQuantity); this.handleModalCloseHash();}} style={{'marginBottom':'12px', 'position': 'fixed !important', 'right': '5px', 'bottom': '0', 'left': '5px'}} />
              </div>
            </div>
            </ReactModal>
        </Box>
      </div>
    );
  }
}

export default ModalLinkProduct;

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
