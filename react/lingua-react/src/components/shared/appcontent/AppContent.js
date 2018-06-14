import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles.css';
import './AppContent.css';

import Header from "../../../containers/shared/appcontent/HeaderContainer";

class AppContent extends Component {
    render() {
        return (
            <div className="height__100pc">
                <Header/>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

AppContent.propTypes = {
    children: PropTypes.node.isRequired
};

export default AppContent;