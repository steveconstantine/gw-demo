import React from 'react';

class RadioButtonGroup extends React.Component {

    constructor(props) {
      super(props);
      this.getItemElement = this.getItemElement.bind(this);
      this.getSelectedClassName = this.getSelectedClassName.bind(this);
    }

    render() {
        const {items,type} = this.props;
        const itemElements = items.map(this.getItemElement);
        const typeStyle = type == 'default' ? '' : 'secondaryButton';
        return (
            <div className={'buttons ' + typeStyle}>
                {itemElements}
            </div>
        );
    }

    getItemElement = (item) => {

        const { value, option_index, option_name } = this.props;
        const className = value == item.value ? this.getSelectedClassName() : '';


        return (
            <button key={item.value+item.label} className={"btn " + className}
               onClick={() => this.props.onClick(item.name, item.value, option_index)}>{item.label}</button>
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
}

export default RadioButtonGroup;
