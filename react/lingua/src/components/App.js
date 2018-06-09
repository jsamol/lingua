import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';

import {DEFAULT_USER_ID} from '../utils/config/DefaultConfig';

import './App.css';
import MainPage from './mainpage/MainPage';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    static getDerivedStateFromProps(props, state) {
        props.setUser(DEFAULT_USER_ID);
        props.getLanguages();
        props.getCourses();

        return null;
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
