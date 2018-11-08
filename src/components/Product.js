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
import ProductAdd from './ProductAdd';
import { graphql, compose, withApollo } from 'react-apollo';
import { Query } from "react-apollo";

// import Info from './Info/Info';
import { Box, Column, TextField, Toast, IconButton, Heading, Button, Image } from 'gestalt';
import Swipeable from 'react-swipeable';
import Rodal from 'sc-rodal';
import isMobile from 'ismobilejs';
import ReactModal from 'react-modal';
import _ from 'underscore';
import BackgroundImage from 'react-background-image-loader';
import gql from 'graphql-tag';
import { withRouter } from "react-router-dom";

ReactModal.setAppElement('#root');

const Product = ({ history, url, match, cartDisabled, addVariantToCart }) => (
      <Query query={ query } variables={{ id: match.params.id }}>
        {({ loading, error, data, client }) => {


          if (loading) {
            return (<div id={'spinner'} style={{'background': 'url(/skye-whalesong8x32.jpg)'}}></div>);
          }

          if (error) {
            return <p>{error.message}</p>;
          }

          // console.log(data.node);

          if (data) {
          const product = data.node;
          const initialVariant = data.node.variants.edges[0];

          const findImage = (images, variantId) => {
            const primary = images[0];

            const image = images.filter(function (image) {
              return image.variant_ids.includes(variantId);
            })[0];

            return (image || primary).src;
          };

          const handleOptionChange = (event, option_name, index) => {

            let selectedNew = {};
            let variantCheck = data.initialVariantBool;
            console.log('check for length');
            console.log(data.selectedVariant);
            console.log(data.selectedVariant.length);
            if (data.selectedVariant.length === product.options.length && product.options.length > 0) {
                variantCheck = false;
                console.log('variantCheckout false? ' + variantCheck);
            }

            if (variantCheck == true) {
              selectedNew = initialVariant;
            } else {
              selectedNew = data.selectedVariant;
            }


            // write query to set all 3 defaults or 2 defaults or default and then select from there.

            selectedNew[option_name] = event;

             if (event !== null && _.isUndefined(product.variants.edges.find((variant) => {
              return  variant.node.selectedOptions.every((selectedOption) => {
                return selectedNew.node.selectedOptions[selectedOption.name] === selectedOption.value;
              });
            })) == false) {

            const selectedVariantLoop = product.variants.edges.find((variant) => {
              return  variant.node.selectedOptions.every((selectedOption) => {
                return selectedNew.node.selectedOptions[selectedOption.name] === selectedOption.value;
              });
            });

            console.log(selectedVariantLoop);
            console.log('selectedVariantLoop ^^^');
            console.log('ProductVariant:' + selectedVariantLoop.node.id);
            let selectedOptions = selectedVariantLoop.node.selectedOptions;
           let query = client.readQuery({query: variantQuery, variables: { selectedOptions: selectedOptions } })
            if (variantCheck == false) {
              client.writeData({ data: { cartDisabled: false, selectedVariant: selectedVariantLoop }})
            } else {
              client.writeData({ data: { cartDisabled: false, selectedVariant: initialVariant }})
            }
          } else {
              client.writeData({ data: { cartDisabled: false } })
          }

          };

          const handleQuantityChange = (event) => {
            let value = event.value;
            if (value < 1) {
              value = 1;
            }
            client.writeData({ data: { selectedVariantQuantity: value } })
          }

          const handleModalClose = () => {
            console.log('handle modal close');
            client.writeData({ data: { isProductModalOpen: false, initialVariantBool: true } })
            history.push('/');
          }

          const handleModalCloseHash = () => {
            console.log('handle modal close hash');
            client.writeData({ data: { isProductModalOpen: false, initialVariantBool: true } })
            history.push('/cart');
          }

          const goPreviousProduct = () => {
          /*  client.writeData({ data: { isProductModalOpen: true } })
            let currentIndex = this.props.productIndex;
            if (currentIndex === 0) {
              currentIndex = this.props.productIDs.length;
            }
            history.push('/art/' + this.props.productIDs[currentIndex - 1]);*/
          }

          const goNextProduct = () => {
            /*
            client.writeData({ data: { isProductModalOpen: true } })
            let currentIndex = this.props.productIndex;
            if (currentIndex === this.props.productIDs.length - 1) {
              currentIndex = -1;
            }
            history.push('/art/' + this.props.productIDs[currentIndex + 1]);*/
          }

          let variant;

          if (data.initialVariantBool == true) {
            variant = data.node.variants.edges[0];
          } else {
            variant = data.selectedVariant;
          }

          console.log('** variant **');
          console.log(variant);
          let variantImage = variant.node.image.src;

          console.log('variant var');
          console.log(variant);
          let variantQuantity = data.selectedVariantQuantity || 1;
          let variant_selectors = [];
          let text_button_variant_selectors = [];
          if (product.variants.edges[0].node.selectedOptions.length > 1) {
          variant_selectors = product.options.map((option, index) => {
            return (
              <Box paddingX={2}>
              <VariantSelector
                handleOptionChange={(event, option_name, index) => handleOptionChange(event, option_name, index)}
                key={option.id.toString()}
                option={option}
                option_name={option.name}
                index={index}
                product={product}
                variant={variant}
              />
              </Box>
            );
          });
          } else {
                variant_selectors = product.options.map((option, index) => {
            return (
              <SingleVariantSelector
                handleOptionChange={(event, option_name, index) => handleOptionChange(event, option_name, index)}
                key={option.id.toString()}
                option={option}
                option_name={option.name}
                index={index}
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
            <ReactModal
      isOpen={true}
      onRequestClose={handleModalClose}
      closeTimeoutMS={50}
      style={{ overlay: {}, content: {          backgroundImage: `url(${variantImage})`,
      backgroudnBlendMode: 'difference',
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
      }}>
            <div style={{'background': 'rgba(255,255,255,0.35)', 'padding': '25px', 'minHeight': '100vh' }}>
            <div className="just-donate" style={{'position': 'fixed', 'right': '12px', 'top': '9px', 'zIndex': '9999'}}>
            <Box padding={2}>
            <IconButton
            accessibilityLabel="Cancel"
            bgColor="white"
            icon="cancel"
            iconColor="darkGray"
            onClick={handleModalClose}
            />
            </Box>
            </div>
              <Swipeable
                      onSwipingRight={goPreviousProduct}
                      onSwipingLeft={goNextProduct} >
                    <Box display="flex" direction="row" paddingY={2}>
                        <Column span={12}>
                        <Box padding={2}>
                        <ProductDescriptionImage variantImage={variantImage} bioDescription={bioDescription} product={product} variant={variant} />
                          {product.images.edges.length ? <img src={variantImage} style={{'maxHeight': '450px', 'paddingTop': '50px'}} alt={`${product.title} product shot`}/> : null}
                          <div className={'mobileOptions'}>
                          <ProductOptions handleQuantityChange={handleQuantityChange} variant_selectors={variant_selectors} />
                          <label className="Product__option">
                            <div style={{'maxWidth': '100%'}}>
                             <TextField
                                id="quantity"
                                min="1"
                                onChange={(value) => handleQuantityChange(value)}
                                placeholder="Quantity"
                                value={data.selectedVariantQuantity}
                                type={"number"}
                              />
                              </div>
                          </label>
                          <p className={'productPriceOptions'}><span style={{'color': 'black'}}> { variant.node.availableForSale == true ? '$' +  variant.node.price.toString() + ' / ea' :  variant.node.title.toString() + ' is Out of Stock'}</span></p>
                          <ProductAdd addVariantToCart={(variantId, selectedVariantQuantity) => addVariantToCart(variantId, selectedVariantQuantity)} variant={variant} selectedVariantQuantity={variantQuantity} history={history} cartDisabled={data.cartDisabled}/>
                          </div>
                        </Box>
                      </Column>
                    </Box>
                  </Swipeable>
                  </div>
                  <div className={'desktopOptions'} style={{'width': '33vw', 'height': '100vh', 'position': 'fixed', 'top': '76px', 'right': '0', 'display': 'block', 'background': 'rgba(0,0,0,0.45)', 'color': 'white'}}>
                    <ProductOptions handleQuantityChange={handleQuantityChange} variant_selectors={variant_selectors} />
                    <div style={{'display': 'inline'}}>
                    <p className={'productPriceOptions'}><span style={{'color': '#222', 'fontFamily': 'LiberationSansRegular'}}> { variant.node.availableForSale == true ? '$' +  variant.node.price.toString() + ' / ea':  variant.node.title.toString() + ' is Out of Stock'}</span></p>
                    </div>
                    <div style={{'display': 'inline', 'width': '33vw'}}>
                    <label className="Product__option">
                      <div style={{'maxWidth': '22vw'}}>
                       <TextField
                          id="quantity"
                          min="1"
                          onChange={(value) => handleQuantityChange(value)}
                          placeholder="Quantity"
                          value={variantQuantity}
                          type={"number"}
                        />
                        </div>
                        <div style={{'width': '9vw', 'marginLeft': 'calc(23vw + 4px)', 'transform': 'translateY(-63px)'}}>
                        <ProductAdd addVariantToCart={(variantId, selectedVariantQuantity) => addVariantToCart(variantId, selectedVariantQuantity)} variant={variant} selectedVariantQuantity={variantQuantity} history={history} cartDisabled={data.cartDisabled}/>
                        </div>
                    </label>
                    </div>
                  </div>
                  <ProductSocial product={product} />
                  </ReactModal>
              </Box>
            </div>
          );
        }
        }}
      </Query>
    );


const query = gql`
query($id: ID!) {
  node(id: $id) {
    id
    ... on Product {
      title
      vendor
      handle
      productType
      descriptionHtml
      createdAt
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
  selectedVariant @client
  selectedVariantQuantity @client
  cartDisabled @client
  initialVariantBool @client
}
`;

const variantQuery = gql`
query($variantId: ID!) {
  node(id: $variantId) {
    id
    ... on ProductVariant {
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
`;

const ProductFragment = gql`
fragment ProductFragment on Product {
    variants(first: 250) {
      edges {
        node(selectedOptions: $selectedOptions) {
          id
          title
          image {
            src
          }
          availableForSale
          price
        }
      }
    }
  }`;
const ProductRouter = withRouter(Product);

export default ProductRouter;
