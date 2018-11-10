import React, {Component} from 'react';
import RadioButtonGroup from '../RadioButtonGroup/RadioButtonGroup';
import { Heading } from 'gestalt';

class VariantSelector extends Component {

  constructor(props) {
    super(props);

    this.state = {
      order: null,
      variantValues: [],
    }
  }

  componentWillMount() {
    let variant_values = [];
    for (let i = 0; i < this.props.option.values.length; i++) {
      variant_values[i] = { label: this.props.option.values[i].toString(), name: this.props.option.name.toString(), value: this.props.option.values[i].toString()}
    }
    this.setState({variantValues: variant_values});
  //  this.props.handleOptionChange(vV[0], this.props.option.name, this.props.index);
  }

  render() {

    let { variantValues, order } = this.state;
    let { index, option, option_name } = this.props;

    return (
      <div>
       <span className="Variant_Name" style={{ 'color': 'black', 'textAlign': 'center', 'opacity': '1'}}><Heading color="darkGray" size="xs">{this.props.option.name}</Heading></span>
                <RadioButtonGroup items={variantValues} option_index={index} option_name={option_name} value={order} onClick={ (name, value, option_index) => {this.setState({order: value}); this.props.handleOptionChange(name, value, option_index) }}
                                  type="default"/>
      </div>
    );
  }
}

export default VariantSelector;
