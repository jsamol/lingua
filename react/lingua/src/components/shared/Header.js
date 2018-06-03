import React, { Component } from 'react';
import { Button, Navbar, Nav, NavItem, FormGroup, FormControl, Image } from 'react-bootstrap';

import "../../styles.css";
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
                <Image className="avatar" src="https://static.pexels.com/photos/296886/pexels-photo-296886.jpeg" circle />
            </div>
        );
    }
}

export default Header;