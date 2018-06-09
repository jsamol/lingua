import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';

import {DEFAULT_USER_ID} from '../utils/config/DefaultConfig';

import './App.css';
import MainPage from './mainpage/MainPage';
import Header from "../containers/shared/HeaderContainer";
import {Alert, Button} from "react-bootstrap";

function NotImplemented(props) {
    return(
        <div>
            <Header/>
            <div className="alert-container">
                <Alert bsStyle="danger">
                    <h4>Page not implemented!</h4>
                    <a href="/"><Button bsStyle="danger">Go back</Button></a>
                </Alert>
            </div>
        </div>
    );
}

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
                    <Route component={NotImplemented} />
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
