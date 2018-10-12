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
    this.props.handleOptionChange(null, this.props.option.name);
  }

  render() {
    let variantValues = this.state.variantValues;
    // console.log(variantValues);

    return (
      <div>
       <span className="Product__price" style={{'color': 'black', 'textAlign': 'left', 'opacity': '1'}}><Heading color="lightGray" size="xs">{this.props.option.name}</Heading></span>
                <RadioButtonGroup items={variantValues} value={this.state.order} onClick={(value) => {this.setState({order: value}); this.props.handleOptionChange(value, this.props.option.name)}}
                                  type="default"/>
      </div>
    );
  }
}

export default VariantSelector;
