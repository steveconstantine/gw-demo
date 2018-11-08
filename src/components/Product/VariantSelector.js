import React, {Component} from 'react';
import RadioButtonGroup from '../RadioButtonGroup/RadioButtonGroup';
import { Heading } from 'gestalt';

class VariantSelector extends Component {

  constructor(props) {
    super(props);

    let variantValues = [];
    let vV = this.props.option.values.map((value, index) => {
          return (
          variantValues[index] = {value: value.toString(), label: value.toString()}
          )
    });
    this.state = {
      order: null,
      variantValues: [],
    }
  }

  componentDidMount() {
    let variantValues = [];
    let vV = this.props.option.values.map((value, index) => {
          return (
          variantValues[index] = {value: value.toString(), label: value.toString()}
          )
    });
    this.setState({variantValues: vV});
    this.props.handleOptionChange(vV[0], this.props.option.name, this.props.index);
  }

  render() {

    let { variantValues, order } = this.state;
    let { option_index, option, option_name } = this.props;

    return (
      <div>
       <span className="Variant_Name" style={{ 'color': 'black', 'textAlign': 'center', 'opacity': '1'}}><Heading color="darkGray" size="xs">{this.props.option.name}</Heading></span>
                <RadioButtonGroup items={variantValues} option_index={option_index} option_name={option_name} value={order} onClick={ (value, option_name, option_index) => {this.setState({order: value}); this.props.handleOptionChange(value, option_name, option_index) }}
                                  type="default"/>
      </div>
    );
  }
}

export default VariantSelector;
