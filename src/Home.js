import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
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
} from './checkout';
import Loader from 'react-loader-spinner';
import { Tooltip, SegmentedControl, Heading, Column, Box, IconButton, Text, Flyout, Button } from 'gestalt';
import { Scrollbars } from 'react-custom-scrollbars';
import Headroom from 'react-headroom';
import Drawer from 'rc-drawer-menu';
// import GWInfo from './components/Info/GWInfo';
import ModalLinkProduct from './components/ModalLinkProduct';
import Ionicon from 'react-ionicons';
import Slider from "react-slick";
import { withRouter } from "react-router-dom";
import BackgroundImage from 'react-background-image-loader';
import Scrollable from 'sc-hide-scrollbar-react';
import StickyFooter from 'react-sticky-footer';

import './styles/DonationRadioButtonGroup.css';
import './styles/gestalt.css';
import './styles/RadioButtonGroup.css';
import './styles/rc-drawer-menu.css';
import './styles/react-router-modal.css';
import './styles/rodal.css';
import './styles/slick.css';
import './styles/slick-theme.css';
import './styles/app.css';
import './styles/Scrollable.css';

class Home extends Component {

   responsive = {
      0: {
          items: 2
      },
      1024: {
          items: 4
      }
  };

  constructor() {
    super();

    this.state = {
      opentool: false,
      isFull: false,
      isCartOpen: false,
      isCustomerAuthOpen: false,
      activeIndex: 0,
      isNewCustomer: false,
      loggedIn: false,
      products: [],
      suggestions: [],
      value: '',
      shop: {},
      delta: 5,
      navbarHeight: 69,
      open: false,
      infoOpen: false,
      hasMore: true,
      modalLinks: this.props && this.props.data ? this.generateElements() : [],
      itemIndex: 0,
      items: ['Our Story', 'Campaign'],
      isSliding: false,
      direction: false,
      imagesLoaded: false,
    };

    this.handleCartClose = this.handleCartClose.bind(this);
    this.handleCartOpen = this.handleCartOpen.bind(this);
    this.openCustomerAuth = this.openCustomerAuth.bind(this);
    this.closeCustomerAuth = this.closeCustomerAuth.bind(this);
    this.closeCustomerAuthVerified = this.closeCustomerAuthVerified.bind(this);
    this.addVariantToCart = addVariantToCart.bind(this);
    this.addDonationToCart = addDonationToCart.bind(this);
    this.updateDonationInCart = updateDonationInCart.bind(this);
    this.removeDonationInCart = removeDonationInCart.bind(this);
    this.updateLineItemInCart = updateLineItemInCart.bind(this);
    this.removeLineItemInCart = removeLineItemInCart.bind(this);
    this.showAccountVerificationMessage = this.showAccountVerificationMessage.bind(this);
    this.associateCustomerCheckout = associateCustomerCheckout.bind(this);
    this.handleClick = this._handleClick.bind(this);
    this.handleClickTooltip = this._handleClickTooltip.bind(this);
    this.handleDismiss = this._handleDismiss.bind(this);
    this.handleDismissTooltip = this._handleDismissTooltip.bind(this);
    this.handleInfoClick = this._handleInfoClick.bind(this);
    this.handleInfoDismiss = this._handleInfoDismiss.bind(this);
    this.handleTabsChange = this._handleTabsChange.bind(this);
    this.handleItemChange = this.handleItemChange.bind(this);
    this.preventClickAfter = this.preventClickAfter.bind(this);
    this.setSwipeDirection = this.setSwipeDirection.bind(this);
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
    this.imagesLoaded = this.imagesLoaded.bind(this);
  }
  componentWillMount() {
    this.setState({imagesLoaded: true});
  }

  componentDidMount() {
  }

  handleItemChange({ activeIndex }) {
    this.setState(prevState => ({ itemIndex: activeIndex }));
  };

  handleCartOpen() {
    this.props.updateCartOpen(true);
    this.props.history.push('/cart');
  }

  handleCartClose() {
    this.props.updateCartOpen(false);
    this.props.history.push('/');
  }

  openCustomerAuth(event) {
    if (event.target.getAttribute('data-customer-type') === "new-customer") {
      this.setState({
        isNewCustomer: true,
        isCustomerAuthOpen: true
      });
    } else {
      this.setState({
        isNewCustomer: false,
        isCustomerAuthOpen: true
      });
    }
  }

  showAccountVerificationMessage(){
    this.setState({ accountVerificationMessage: true });
    setTimeout(() => {
     this.setState({
       accountVerificationMessage: false
     })
   }, 5000);
  }

  closeCustomerAuth() {
    this.setState({
      isCustomerAuthOpen: false,
    });
  }

  closeCustomerAuthVerified() {
    this.setState({
      isCustomerAuthOpen: false,
    });
  }


  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

   _handleClick() {
    this.setState(() => ({ open: !this.state.open }));
  }
  _handleDismiss() {
    this.setState(() => ({ open: false }));
  }

    _handleClickTooltip() {
    this.setState(() => ({ opentool: true }));
  }

    _handleDismissTooltip() {
    this.setState(() => ({ opentool: false }));
  }


   _handleInfoClick() {
    this.setState(() => ({ infoOpen: !this.state.infoOpen }));
  }
  _handleInfoDismiss() {
    this.setState(() => ({ infoOpen: false }));
  }

  _handleTabsChange({ activeTabIndex, event }) {
    event.preventDefault();
    this.setState({
      activeIndex: activeTabIndex
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  selectedVariant(selectedVariant) {
    this.setState({selectedVariant: selectedVariant});
  }

  preventClickAfter(event) {
    event.preventDefault();
  }

  setSwipeDirection(event, slick, direction) {
    if (direction == 'left') {
      this.setState({direction: true});
    } else {
      this.setState({direction: false});
    }
  }

  handleImageLoaded(index) {
    this.setState({imagesLoaded: true });
  }

  imagesLoaded() {
    const imagesLoaded = this.state.imagesLoaded;
    return true;
  }

  render() {
    if (this.props.data.loading) {
      return (<div id={'spinner'} style={{'background': 'url(/skye-whalesong8x32.jpg)'}}></div>);
    }

    if (this.props.data.error) {
      return <p>{this.props.data.error.message}</p>;
    }

    let productIDs = this.props.data.shop.products.edges.reduce((result, product) => {
    if (product.node.handle != 'donation') {
        result.push([product.node.id, product.node.vendor, product.node.title]);
      }
      return result;
    }, []);

    var settings = {
      dots: true,
      infinite: true,
      accessibility: true,
      speed: 500,
      autoplay: false,
      autoplaySpeed: 1800,
      slidesToShow: 4,
      slidesToScroll: 4,
      rtl: this.state.direction,
      responsive: [{
       breakpoint: 1024,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 2,
         infinite: true,
         dots: true
          }
      }],
      beforeChange: () => this.setState({isSliding: true}),
      afterChange: () => this.setState({isSliding: false}),
    };


    let donationVariantId = '';
    const productsLinks = this.props.data.shop.products.edges.reduce((result, product, index) => {
      if (product.node.handle != 'donation') {
      result.push(
        <ModalLinkProduct
          addVariantToCart={this.addVariantToCart}
          client={this.props.client}
          key={product.node.id.toString()}
          product={product.node}
          productIDs={productIDs}
          productIndex={index}
          search={this.state.search}
          artSize={(Math.random() + 1)}
          selectedVariant={this.selectedVariant}
          isSliding={this.state.isSliding}
          handleImageLoaded={true}
          cartOpen={this.props.isCartModalOpen == true ? true : false }
        />);
      } else {
        donationVariantId =  product.node.variants.edges[0].node.id;
      }
      return result;
    }, []);

    return (
        <Scrollable>
          <Headroom id={'header'} className={'header nav-down'}
            style={{
            WebkitTransition: 'all .5s ease-in-out',
            MozTransition: 'all .5s ease-in-out',
            OTransition: 'all .5s ease-in-out',
            transition: 'all .5s ease-in-out',
            position: 'fixed',
            height: '0',
            zIndex: '8'
          }}>
            {this.state.open &&
              <Flyout
                anchor={this.anchor}
                idealDirection="down"
                message="Hi There!"
                onDismiss={this.handleDismiss}
                size="md"
              >
                <Box padding={3}>
                  <Text bold align="center">
                    Accounts are coming! Don't worry, by staying logged in we've got your orders on file.
                  </Text>
                  <Box paddingX={2} marginTop={3}>
                    <Button color="red" text="Ask us anything" />
                  </Box>
                  <Box paddingX={2} marginTop={3}>
                    <Button color="blue" text="Log out" onClick={() => {this.setState({loggedIn: false})}}/>
                  </Box>
                </Box>
              </Flyout>}
            {this.state.infoOpen &&
              <Flyout
                anchor={this.infoAnchor}
                idealDirection="down"
                message="Hi There!"
                onDismiss={this.handleInfoDismiss}
                size="md"
              >
                <Box maxWidth={300} marginTop={2} marginBottom={2}>
                  <div style={{'paddingTop': '8px'}}></div>
                  <SegmentedControl
                    items={this.state.items}
                    selectedItemIndex={this.state.itemIndex}
                    onChange={this.handleItemChange}
                  />
                    {this.state.itemIndex === 0 ? <Box paddingY={2}>
                      <Heading size="xs">
                        We feel like helping clean up ocean pollution. <br/>Our goals include enabling participation and innovation with organised cleanup efforts. It is a gift to be part of something good!
                      </Heading>
                </Box> : null }
                {this.state.itemIndex === 1 ?
                  <Box paddingY={2}>
                    <Heading size="xs">
                    Funds raised go to direct action involved with cleaning the ocean. <br/> Our spotlight is on proven action by   ............................
                    You are invited to please visit their website - ............. .com
                    </Heading>
                  </Box> : null }
                </Box>
              </Flyout>}
              <Box color="transparent" padding={1} display="flex" direction="row" alignItems="center">
                <Box paddingX={2}>
                    <img style={{'maxWidth': '55px'}} src="/gw-logo.png" alt="Gifting Wild" border="0" />
                </Box>
                <Box flex="grow" paddingX={5}>
                  <img style={{'maxWidth': '105px', 'transform' : 'translate(-20px,3px)'}} src="/Gift_W_top.png" alt="Gifting Wild" border="0" />
                </Box>
                 <Box paddingX={2}>
                  <div className="questionButton" ref={d => {
                      this.infoAnchor = d;
                  }}>
                    <IconButton
                        accessibilityLabel="Information About Us"
                        icon="question-mark"
                        size="md"
                        iconColor="white"
                        onClick={this.handleInfoClick}
                      />
                    </div>
                  </Box>
              <Box paddingX={2} paddingY={5}>
                <div className="cartButton">
                  <Ionicon icon="ios-cart" fontSize="24px" color={ this.state.isCartOpen ? "#FFF" : "#FFF" } onClick={() => this.handleCartOpen() }/>
                </div>
              </Box>
            </Box>
          </Headroom>
          <div className="App" id="App" style={{'background': 'url(/skye-whalesong8x32.jpg)'}}>
          <div className="Flash__message-wrapper">
              <p className={`Flash__message ${this.state.accountVerificationMessage ? 'Flash__message--open' : ''}`}>We have sent you an email, please click the link included to verify your email address</p>
            </div>
            <div style={{'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'paddingTop': '65px'}}>
              <Box maxWidth={'100vw'}display="flex" direction="row" justifyContent="around">
              <div className="blue">
              <Slider {...settings}>
                       {productsLinks}
                </Slider>
                </div>
              </Box>
            </div>
          <div className="just-donate" style={{'display': 'flex', 'justifyContent': 'flex-end', 'marginTop': '420px'}}>
            <Box padding={2}>
              { this.state.isCartOpen == false ? <Button color="transparent" text="Donate Extra" size="lg" onClick={this.handleCartOpen}/> : null }
            </Box>
          </div>
        </div>
        <StickyFooter
  bottomThreshold={50}
  normalStyles={{
  backgroundColor: "#d3d9e054",
  padding: "0.1rem 2rem 0.1em 100vw",
  }}
  stickyStyles={{
  backgroundColor: "#d3d9e054",
  padding: "0.1rem 2rem 0.1em 100%",
  position: "fixed",
  bottom: "0",
  right: "0",
  }}
>        <Box>
      <div className="sticky-footer"
        ref={c => {
          this.anchortool = c;
        }}
      >
        { this.state.opentool == false ?
          <button className="copyright-button" onClick={() => this.setState({opentool: !this.state.opentool})}>©</button>
          :
          <IconButton
            accessibilityLabel="Close Copyright Information"
            icon="cancel"
            size="sm"
            iconColor="white"
            onClick={() => this.setState({opentool: !this.state.opentool})}
          />
        }
      </div>
        {this.state.opentool && (
          <div>
          <Tooltip
            size="xl"
            anchor={this.anchortool}
            idealDirection="left"
            onDismiss={() => this.setState({opentool: !this.state.opentool})}
          >
            <Text bold color="white" size="md">
              Copyright © 2018 - Gifting Wild Inc. Art and Their Prints Are Trademark / Registered / Copyright of Respective Artist(s).
            </Text>
          </Tooltip>
          </div>
        )}
      </Box>
      </StickyFooter>
      </Scrollable>
    );
  }
}

export default withRouter(Home);

/**

{ this.state.loggedIn === true ?
  <Box paddingX={2}>
    <div ref={c => {
      this.anchor = c;
    }}>
      <IconButton
          accessibilityLabel="Accounts"
          icon="people"
          size="md"
          iconColor="white"
          onClick={this.handleClick}
      />
    </div>
  </Box> :
  <Box paddingX={2}>
    <IconButton
      accessibilityLabel="Accounts"
      icon="people"
      size="md"
      iconColor="white"
      onClick={() => this.setState({isCustomerAuthOpen: true})}
    />
  </Box>
}

**/
