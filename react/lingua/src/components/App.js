import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import { DEFAULT_USER_ID } from '../utils/config/DefaultConfig';

import './App.css';
import MainPage from './mainpage/MainPage';

class App extends Component {
    componentWillMount() {
        this.props.setUser(DEFAULT_USER_ID);
        this.props.getLanguages();
        this.props.getCourses();
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={MainPage}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

App.propTypes = {
    setUser: PropTypes.func.isRequired,
    getLanguages: PropTypes.func.isRequired,
    getCourses: PropTypes.func.isRequired
};

export default App;
