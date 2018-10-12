import React, {Component} from 'react';
import { SelectList, Heading } from 'gestalt';

class SingleVariantSelector extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let variantValues = [];

     {this.props.option.values.map((value, index) => {
          return (
          variantValues[index] = {value: value.toString(), label: value.toString()}
          )
        })}
    return (
      <div>
       <span className="Product__price" style={{'color': 'black', 'textAlign': 'left', 'opacity': '1'}}><Heading color="lightGray" size="xs">{this.props.option.name}</Heading></span>
       <SelectList id={this.props.option.name} key={this.props.option.name} options={variantValues} onChange={(value) => this.props.handleOptionChange(value.value, this.props.option.name)} />
      </div>
    );
  }
}

export default SingleVariantSelector;
