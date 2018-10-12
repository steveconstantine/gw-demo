import React from "react";
import Select from 'react-select';

const indicatorSeparatorStyle = {
  alignSelf: 'stretch',
  backgroundColor: 'grey',
  marginBottom: 8,
  marginTop: 8,
  width: 1,
};

const IndicatorSeparator = ({innerProps}) => {
  return (
    <span style={indicatorSeparatorStyle} {...innerProps}/>
  );
};
class FilterDropdown extends React.Component {
	
	constructor(props) {
	    super(props);
	}
	
	componentDidMount() {
	    // placeholder
	}
	
	 render() {
    return (  <Select
    closeMenuOnSelect={false}
    components={{ IndicatorSeparator }}
    defaultValue={null}
    placeholder={'Search'}
     styles={{
          singleValue: (base) => ({ ...base, color: 'white' }),
          valueContainer: (base) => ({ ...base, background: 'transparent' , color: 'hsl(0,0%,100%)', width: '50%', border: '1px solid hsl(0%,0%,44%)' }),
          placeholder: (base) => ({ ...base, fontSize: '1em', color: 'hsl(0,0%,44%)', fontWeight: 400 }),
        }}
    options={this.props.options}
  />

        );
	 }
}

export default FilterDropdown;