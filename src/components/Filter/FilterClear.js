import React from "react";
import { Button } from 'gestalt';

class FilterClear extends React.Component {
	
	constructor(props) {
	    super(props);
	    this.onClick = this.onClick.bind(this);
	    this.state = { clearPushed: false };
	}
	
	componentDidMount() {
	}
	
	onClick() {
	    this.setState({clearPushed: true});
	    this.setState({clearPushed:false});
	}
	
	 render() {
    return ( null
        );
	 }
}