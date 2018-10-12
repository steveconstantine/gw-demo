import React from "react";
import { Flyout } from 'gestalt';
import { Icon } from 'semantic-ui-react';
import FilterDropdown from './FilterDropdown';

const IconSetting = () => <Icon disabled name='setting' />

class FilterCog extends React.Component {
	
	constructor(props) {
	    super(props);
	}
	
	componentDidMount() {
	    // placeholder
	}
	
	 render() {
    return (        <div
          style={{ display: "inline-block" }}
          ref={c => {
            this.anchor = c;
          }}
        >
            <IconSetting />
              {this.state.open &&
            <Flyout
            anchor={this.anchor}
            idealDirection="down"
            onDismiss={null}
            size="md"
          >
            <Box padding={3}>
              <Box paddingX={2} marginTop={3}>
                    <FilterDropdown />
              </Box>
            </Box>
          </Flyout>}
        </div>
        );
	 }
}

export default FilterCog;