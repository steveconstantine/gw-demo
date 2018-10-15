import React, {Component} from 'react';
import LineItem from './LineItem';
import { Button as CartButton, TextField, Box } from 'gestalt';
import DonationRadioButtonGroup from './RadioButtonGroup/DonationRadioButtonGroup';
import _ from 'underscore';

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
    this.state = {order : null, orderExtra: null};
    this.setDonation = this.setDonation.bind(this);
    this.setDonationClick = this.setDonationClick.bind(this);
  }

  setDonation(event) {
    let value = event.value;
    if (value < 0) {
      value = 0;
    }
    this.setState({orderExtra: value});
    let line_items = [];
    let line_item_array = [];
    if (_.isNull(this.props.checkout) == false && _.isUndefined(this.props.checkout.lineItems) == false) {
      line_item_array = this.props.checkout.lineItems.edges.map((line_item) => {
          return line_item.node.variant.id.toString();
        }, this);
      for (let i = 0; i < line_item_array.length; i++) {
          if (line_item_array[i] == "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xNDIyOTU1NDg1NTk5NA==") {
              line_items.push(line_item_array[i]);
          }
      }
      if (line_items.length > 0) {
        this.props.setDonationValue(value.replace(/\./g, ""), line_items[0]);
      }
    } else {
    // do nothing
    }
  }

  setDonationClick(value) {
    this.setState({order: value, orderExtra: null });
    let line_items = [];
    let line_item_array = [];
    if (_.isNull(this.props.checkout) == false && _.isUndefined(this.props.checkout.lineItems) == false) {
      line_item_array = this.props.checkout.lineItems.edges.map((line_item) => {
          return line_item.node.variant.id.toString();
        }, this);
      for (let i = 0; i < line_item_array.length; i++) {
          if (line_item_array[i] == "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xNDIyOTU1NDg1NTk5NA==") {
              line_items.push(line_item_array[i]);
          }
      }
      if (value != 'more' && line_items.length > 0) {
        this.props.setDonationValue(value.replace(/\./g, ""), line_items[0]);
      }
    } else {
    // do nothing
    }
  }

  render() {
    let line_items = [];
    if (_.isNull(this.props.checkout) == false && _.isUndefined(this.props.checkout.lineItems) == false) {
    line_items = this.props.checkout.lineItems.edges.reduce((result, line_item) => {
      result.push(<LineItem
          removeLineItemInCart={this.props.removeLineItemInCart}
          updateLineItemInCart={this.props.updateLineItemInCart}
          key={line_item.node.id.toString()}
          line_item={line_item.node}
        />);
    return result;
  }, []);
  }

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
      let trueCheckout = _.isNull(this.props.checkout);
      let finalCheckoutValue = parseFloat(finalDonation, 10).toFixed(2);
      if (_.isNull(this.props.checkout) == false) {
       finalCheckoutValue = parseFloat(this.props.checkout.totalPrice,10) + parseFloat(finalDonation, 10);
     }

    return (
      <div className={`Cart ${this.props.isCartOpen ? 'Cart--open' : ''}`}>
        <header className="Cart__header">
          <h2>Cart</h2>
          <button
            onClick={this.props.handleCartClose}
            className="Cart__close">
            ×
          </button>
        </header>
        <ul className="Cart__line-items">
          {line_items}
        </ul>
        <div className="Cart__donations">
              <span className="donations">Donate Extra</span><br/>
              <DonationRadioButtonGroup items={options} value={moreSelected == 'true' ? 'moreSelected' : this.state.order}
                                type="default" onClick={this.setDonationClick}/>
        </div>
          { moreSelected == true  ?
        <div className="Cart__donations__more">
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
        <footer className="Cart__footer">
          <div className="Cart-info clearfix">
            <div className="Cart-info__total Cart-info__small">Subtotal</div>
            <div className="Cart-info__pricing">
              <span className="pricing">$ {trueCheckout == false ? this.props.checkout.subtotalPrice : finalDonation}</span>
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
              <span className="pricing">$ {trueCheckout == false ? this.props.checkout.totalTax : 0.00}</span>
            </div>
          </div>
          <div className="Cart-info clearfix">
            <div className="Cart-info__total Cart-info__small">Total</div>
            <div className="Cart-info__pricing">
              <span className="pricing">$ { trueCheckout == false ? finalCheckoutValue.toFixed(2) : finalDonation} </span>
            </div>
          </div>
          <CartButton color="white" text="Checkout" onClick={() => {window.open(this.props.checkout.webUrl)}}></CartButton>
        </footer>
      </div>
    )
  }
}

export default Cart;
