import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import { withRouter } from "react-router-dom";
import LineItem from './LineItem';
import { Button as CartButton, Text, TextField, Box, Layer, IconButton, Tooltip } from 'gestalt';
import DonationRadioButtonGroup from './RadioButtonGroup/DonationRadioButtonGroup';
import _ from 'underscore';
import isMobile from 'ismobilejs';
import ReactModal from 'react-modal';
import StickyFooter from 'react-sticky-footer';
import VirtualList from 'react-tiny-virtual-list';
import gql from 'graphql-tag';

const options = [
  {
    value: '0',
    label: 'None'
  }, {
    value: '10',
    label: '$10'
  }, {
    value: '50',
    label: '$50'
  }, {
    value: '200',
    label: '$200'
  }, {
    value: '1000',
    label: '$1000'
  }, {
    value: 'more',
    label: 'More'
  }
]

class Cart extends Component {
  constructor(props) {
  super(props);
    this.state = {order : "", orderExtra: null, donationId: this.props.donationId, donationValue: 0 };
    this.setDonation = this.setDonation.bind(this);
    this.setDonationClick = this.setDonationClick.bind(this);
    this.handleCartClose = this.handleCartClose.bind(this);
    this.setDonationClick.bind(this);
  }

  componentDidMount() {
    console.log('cart this.props.data');
    console.log(this.props.data);
  }

  setDonation(event) {
    let value = event.value;
    if (value < 0) {
      value = 0;
    }
    this.setState({orderExtra: value});
    let line_items = [];
    let line_item_array = [];
    if (this.props.lineIems && this.props.lineItems != [] && this.props.lineItems != '[]') {
      line_item_array = this.props.lineItems.edges.map((line_item) => {
        console.log(this.props.donationId);
        return line_item.node.variant.id.toString();
        }, this);
      for (let i = 0; i < line_item_array.length; i++) {
          if (line_item_array[i] == this.props.donationId) {
              line_items.push(line_item_array[i]);
          }
      }

      console.log('line_item_array');
      console.log(line_items);
      if (value != 'more' && line_items.length > 0) {
        console.log('attempting update 1st loop');
        this.props.removeLineItemInCart(line_items[0]);
        this.setState({
          donationValue: value * 100,
          donationLineItemId: line_items[0]
        });
        this.props.setDonationValue(value.replace(/\./g, ""), this.state.donationId);
      } else {
        console.log('attempting update 2nd loop');
        this.setState({
          donationValue: value * 100,
          donationLineItemId: null
        });
      //  this.props.setDonationValue(value.replace(/\./g, ""), null);
      }
    } else {
    // do nothing
    }
  }

  setDonationClick(value) {
    this.setState({order: value, orderExtra: null });
    let line_items = [];
    let line_item_array = [];
    if (this.props.lineIems) {
      line_item_array = this.props.lineItems.edges.map((line_item) => {
          console.log(this.props.donationId);
          return line_item.node.variant.id.toString();
        }, this);
      for (let i = 0; i < line_item_array.length; i++) {
          if (line_item_array[i] == this.props.donationId) {
              line_items.push(line_item_array[i]);
          }
      }
      if (value != 'more' && line_items.length > 0) {
        console.log('attempting update 1st loop');
        this.props.removeLineItemInCart(line_items[0]);
        this.setState({
          donationValue: value * 100, // value.replace(/\./g, "")
          donationLineItemId: line_items[0]
        });

      this.props.setDonationValue(value.replace(/\./g, ""), this.props.donationId);
      } else {
        console.log('attempting update 2nd loop');
        this.setState({
          donationValue: value * 100,
          donationLineItemId: null
        });
      }
    } else {
    // do nothing
    }
  }

  handleCartClose() {
    this.props.history.push('/');
  }

  render() {
    console.log('cart checkout infos');
    console.log(this.props.data);

    let line_items = [];
    line_items = this.props.lineItems.edges.reduce((result, line_item) => {
      if (line_item.node.variant.id.toString() != this.props.donationId) {
          result.push(<LineItem
          removeLineItemInCart={this.props.removeLineItemInCart}
          updateLineItemInCart={this.props.updateLineItemInCart}
          key={line_item.node.id.toString()}
          line_item={line_item.node}
        />);
      }
    return result;
  }, []);

    let moreSelected = false;
    let finalDonation;
      if (this.state.order == 'more') {
        moreSelected = true;
        finalDonation = this.state.orderExtra;
      } else {
        finalDonation = this.state.order;
      }

      if (finalDonation == null && this.state.order == 'more' || this.state.orderExtra != null && this.state.order == 'more') {
        finalDonation = parseFloat(this.state.orderExtra).toFixed(2);
      } else if (this.state.order == null) {
        finalDonation = parseFloat(0).toFixed(2);
      } else if (this.state.order != 'more') {
        finalDonation = parseFloat(this.state.order).toFixed(2);
      }

      if (finalDonation == null || finalDonation == 'NaN') {
        finalDonation = parseFloat(0).toFixed(2);
      }
      let trueCheckout = !this.props.data.checkout;
      let finalCheckoutValue = parseFloat(finalDonation, 10).toFixed(2);
      if (this.props.data.checkout && this.props.data.checkout.totalPrice) {
       finalCheckoutValue = parseFloat(this.props.data.checkout.totalPrice,10) + parseFloat(finalDonation, 10);
     }

     if (line_items.length < 1) {
       line_items.push(<div className="addToCartButton">
                       <Box padding={2} justifyContent="center" alignItems="center" display="flex" marginTop="100px">
                       <CartButton
                          dangerouslySetInlineStyle={{
                            __style: {
                              fontSize: '36px !important',
                              padding: '0 50px !important'
                            },
                          }}
                          size="lg" color="transparent" text="Add Items To Cart" onClick={this.handleCartClose}></CartButton>
                       </Box>
                 </div>);
     }

    return (
      <div>
      { this.props.isCartOpen && (
        <ReactModal
     isOpen={true}
     onRequestClose={this.handleCartClose}
     closeTimeoutMS={50}
     style={{ overlay: {}, content: {          background: `rgba(255,255,255,0.4)`,
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
     }}
     >
        <div style={{ 'display': 'inline-grid', 'marginLeft': '0', 'minHeight': '100vh'}}>
        <header className="Cart__header" style={{'position': 'relative', 'width': '100vw', 'height': '100%'}}>
          <div className="just-donate" style={{'position': 'fixed', 'right': '12px', 'top': '9px', 'zIndex': '9999'}}>
            <Box padding={2}>
            <IconButton
              accessibilityLabel="Cancel"
              bgColor="white"
              icon="cancel"
              iconColor="darkGray"
              onClick={this.handleCartClose}
            />
            </Box>
          </div>
        </header>
        <VirtualList
width='100%'
height={440}
marginTop={30}
itemCount={line_items.length}
itemSize={150}
renderItem={({index}) =>
  <div key={index} style={ index % 2 == 0 ? {'background': 'rgba(255, 255, 255, 0.5)', 'padding': '20px'} : {'background': 'rgba(123, 123, 255, 0.123)', 'padding': '20px'}}>
  {line_items[index]}
  </div>
}
/>
        <div className="Cart__donations" style={{'position': 'sticky', 'width': '100vw',  }}>
              <p className="donations donationsMobile" style={{'position': 'relative', 'width': '100vw'}}>Donate Extra</p>
              <DonationRadioButtonGroup items={options} value={moreSelected == true ? 'moreSelected' : this.state.order}
                                type="default" onClick={this.setDonationClick}/>
        </div>
          { moreSelected == true  ?
        <div className="Cart__donations__more" style={{'position': 'sticky', 'width': '100vw',  }}>
        <Box padding={3}>
              <TextField
          id="donate-more"
          onChange={this.setDonation}
          placeholder="Donate Extra"
          value={this.state.orderExtra}
          type={"number"}
          />
          </Box>
        </div> : null }
        <footer className="Cart__footer" style={{'position': 'relative', 'width': '100vw',  }}>
          <div className="Cart-info clearfix">
            <div className="Cart-info__total Cart-info__small">Subtotal</div>
            <div className="Cart-info__pricing">
              <span className="pricing">$ {trueCheckout == false ? this.props.data.checkout.subtotalPrice : finalDonation}</span>
            </div>
          </div>
          <div className="Cart-info clearfix">
            <div className="Cart-info__total Cart-info__small">Extra Donation</div>
            <div className="Cart-info__pricing">
              <span className="pricing">$ {finalDonation}</span>
            </div>
          </div>
          <div className="Cart-info clearfix">
            <div className="Cart-info__total Cart-info__small">Taxes</div>
            <div className="Cart-info__pricing">
              <span className="pricing">$ {trueCheckout == false ? this.props.data.checkout.totalTax : 0.00}</span>
            </div>
          </div>
          <div className="Cart-info clearfix">
            <div className="Cart-info__total Cart-info__small">Total</div>
            <div className="Cart-info__pricing">
              <span className="pricing">$ { trueCheckout == false ? "Error" : finalDonation} </span>
            </div>
          </div>
          <CartButton color="black" text="Checkout" onClick={() => {window.open(this.props.data.node.webUrl)}}></CartButton>
        </footer>
        </div>
        </ReactModal>
      )}
      </div>
    )}
}

export default withRouter(Cart);
