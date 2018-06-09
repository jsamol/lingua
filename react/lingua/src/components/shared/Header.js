import React, { Component } from 'react';
import { Button, Navbar, Nav, NavItem, FormGroup, FormControl, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';

import "./styles.css";
import "./Header.css";

function NavLinks(props) {
    return (
        <Nav>
            <NavItem className="nav-item" href="/courses">
                Courses
            </NavItem>
            <NavItem className="nav-item" href="/natives">
                Talk with native
            </NavItem>
        </Nav>
    );
}

function NavSearch(props) {
    return (
        <Navbar.Collapse>
            <Navbar.Form pullRight>
                <FormGroup>
                    <FormControl type="text" placeholder="Search"/>
                </FormGroup>{' '}
                <Button type="submit">Submit</Button>
            </Navbar.Form>
        </Navbar.Collapse>
    );
}

class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <Navbar className="margin__0 navbar-container">
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a className="bold-text" href="/">Lingua</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <NavLinks/>
                    <NavSearch/>
                </Navbar>
                <a href="/settings" className="user-img-container">
                    <Image className="circle-img user-img" src={this.props.userAvatarSrc} circle />
                </a>
            </div>
        );
    }
}

Header.propTypes = {
    userAvatarSrc: PropTypes.string.isRequired
} ;

export default Header;