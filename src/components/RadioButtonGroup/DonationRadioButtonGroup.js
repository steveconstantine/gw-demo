import PropTypes from 'prop-types';
import React from 'react';

class DonationRadioButtonGroup extends React.Component {
    static propTypes = {
        items : PropTypes.array,
        value : PropTypes.string,
        onClick : PropTypes.func,
        type : PropTypes.string
    };

    render() {
        const {items,type} = this.props;
        const itemElements = items.map(this.getItemElement);
        const typeStyle = type == 'default' ? '' : 'secondaryButton';
        return (
            <div className={'donatebuttons ' + typeStyle}>
                {itemElements}
            </div>
        );
    }

    getItemElement = (item) => {
        const {value} = this.props;
        const className = value == item.value ? this.getSelectedClassName() : '';
        return (
            <button key={item.value+item.label} className={className}
               onClick={this.onClick(item.value).bind(this)}>{item.label}</button>
        );
    };

    getSelectedClassName() {
        const {type} = this.props;
        switch (type) {
            case 'default' :
                return ' defaultButtonSelected';
            case 'secondary' :
                return ' secondaryButtonSelected';
        }
    }

    onClick(value) {
        return function () {
            this.props.onClick(value);
        };
    }
}

export default DonationRadioButtonGroup;
