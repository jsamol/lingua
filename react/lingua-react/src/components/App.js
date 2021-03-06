import React, {Component} from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import {Helmet} from "react-helmet";
import PropTypes from 'prop-types';

import {DEFAULT_USER_ID} from '../utils/config/DefaultConfig';

import './App.css';
import MainPage from './mainpage/MainPage';
import {Alert, Button} from "react-bootstrap";
import AppContent from "./shared/appcontent/AppContent";

function NotImplemented(props) {
    return(
        <AppContent>
            <Helmet>
                <title>Lingua | Not implemented</title>
            </Helmet>
            <div className="alert-container">
                <Alert bsStyle="danger">
                    <h4>Page not implemented!</h4>
                    <Link to="/"><Button bsStyle="danger">Go back</Button></Link>
                </Alert>
            </div>
        </AppContent>
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
                    <Route exact path="/" render={() => {
                        this.props.resetMainPageState();
                        return <MainPage/>
                    }}/>
                    <Route component={NotImplemented} />
                </Switch>
            </BrowserRouter>
        );
    }
}

App.propTypes = {
    setUser: PropTypes.func.isRequired,
    getLanguages: PropTypes.func.isRequired,
    getCourses: PropTypes.func.isRequired,
    resetMainPageState: PropTypes.func.isRequired
};

export default App;
