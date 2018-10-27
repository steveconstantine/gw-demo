import React from 'react';
import Home from '../App';
import { ModalContainer } from 'gw-react-router-modal';

class AppContainer extends React.Component {
    render() {
        return (
            <div className="appcontainer">
                <Home />
                <ModalContainer />
            </div>
        );
    }
}

export default AppContainer;
