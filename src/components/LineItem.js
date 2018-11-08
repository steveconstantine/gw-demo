import React, {Component} from 'react';

class LineItem extends Component {
  constructor(props) {
    super(props);
    this.state = { removeClicked: false };
    this.decrementQuantity = this.decrementQuantity.bind(this);
    this.incrementQuantity = this.incrementQuantity.bind(this);
    this.removeClicked = this.removeClicked.bind(this);
  }

  decrementQuantity(lineItemId) {
    if (this.props.line_item.quantity == 1) {
      this.setState({ removeClicked: true});
      this.props.removeLineItemInCart(this.props.line_item.id);
    } else {
      this.props.updateLineItemInCart(lineItemId, this.props.line_item.quantity - 1);
    }
  }

  incrementQuantity(lineItemId) {
    this.props.updateLineItemInCart(lineItemId, this.props.line_item.quantity + 1)
  }

  removeClicked() {
    this.setState({removeClicked: true});
  }

  render() {
    console.log('lineItem');
    let bgImg = this.props.line_item.variant.image.src || this.props.line_item.image.src;
    return (
      <li className="Line-item">
        <div className="Line-item__img" style={{'backgroundImage': 'url(' + bgImg + ')', 'backgroundSize' : 'cover'}}>
        </div>
        <div className="Line-item__content">
          <div className="Line-item__content-row">
            <div className="Line-item__variant-title">
              {this.props.line_item.variant ? this.props.line_item.variant.title : 'Not in Stock'}
            </div>
            <span className="Line-item__title">
              {this.props.line_item.title}
            </span>
          </div>
          <div className="Line-item__content-row">
            <div className="Line-item__quantity-container">
              <button disabled={this.state.removeClicked} className="Line-item__quantity-update" onClick={() => this.decrementQuantity(this.props.line_item.id)}>-</button>
              <span className="Line-item__quantity">{this.props.line_item && this.props.line_item.variant && this.state.removeClicked == false ? this.props.line_item.quantity : 0}</span>
              <button disabled={this.state.removeClicked} className="Line-item__quantity-update" onClick={() => this.incrementQuantity(this.props.line_item.id)}>+</button>
            </div>
            <span className="Line-item__price">
              $ { this.props.line_item && this.props.line_item.variant ? (this.props.line_item.quantity * this.props.line_item.variant.price).toFixed(2) :  'N/A' }
            </span>
            { this.state.removeClicked == false ?
            <button disabled={this.state.removeClicked} className="Line-item__remove" onClick={()=> {this.setState({removeClicked: true}); this.props.removeLineItemInCart(this.props.line_item.id)}}>×</button> : null}
          </div>
        </div>
      </li>
    );
  }
}

export default LineItem;
