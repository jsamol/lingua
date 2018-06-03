import React, { Component } from 'react';
import { Grid, Row, Col, Panel, Tabs, Tab } from 'react-bootstrap';

import './MainPage.css';
import '../../styles.css';

import Header from '../shared/Header';
import Filter from './filter/Filter';
import Courses from './courses/Courses';
import CourseInfo from './courseinfo/CourseInfo';

class MainPage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="main-content">
                    <Grid fluid>
                        <Row>
                            <Col md={2}>
                                <Filter/>
                            </Col>
                            <Col md={6}>
                                <Courses/>
                            </Col>
                            <Col md={4}>
                                <CourseInfo/>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default MainPage;