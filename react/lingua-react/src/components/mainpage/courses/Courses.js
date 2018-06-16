import React, {Component} from 'react';
import {Col, Collapse, Grid, Panel, Row} from "react-bootstrap";
import PropTypes from 'prop-types';

import "../../shared/styles.css";
import "./Courses.css";

import Course from "../../../containers/mainpage/courses/CourseContainer";

class NewCourses extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shouldShowLess: true
        };

        this.toggleShouldShowLess = this.toggleShouldShowLess.bind(this);
    }

    toggleShouldShowLess() {
        this.setState(previousState => {
            return {
                shouldShowLess: !previousState.shouldShowLess
            };
        });
    }

    render() {
        const alwaysVisibleCourses = this.props.courses.slice(0, 3);
        const hiddenCourses = this.props.courses.slice(3);
        return (
            <div>
                <Grid fluid>
                    <Row>
                        {alwaysVisibleCourses.map(course => {
                            return (
                                <Col key={course.id} sm={12} md={6} lg={4}>
                                    <Course id={course.id}
                                            name={course.name}
                                            img={course.img}
                                            desc={course.shortDescription}
                                            onClick={this.props.onClick}
                                            isFree={course.isFree}
                                            price={course.isFree ? "FREE" : "$" + course.price}
                                    />
                                </Col>
                            );
                        })}
                    </Row>
                    <Collapse in={!this.state.shouldShowLess}>
                        <Row>
                            {hiddenCourses.map(course => {
                                return (
                                    <Col key={course.id} sm={12} md={6} lg={4}>
                                        <Course id={course.id}
                                                name={course.name}
                                                img={course.img}
                                                desc={course.shortDescription}
                                                onClick={this.props.onClick}
                                                isFree={course.isFree}
                                                price={course.isFree ? "FREE" : "$" + course.price}
                                        />
                                    </Col>
                                );
                            })}
                        </Row>
                    </Collapse>
                </Grid>
                {this.props.courses.length > 3 &&
                <p onClick={this.toggleShouldShowLess}
                   className="more-less-button">
                    {this.state.shouldShowLess ? "More" : "Less"}
                </p>
                }
            </div>
        );
    }
}

NewCourses.propTypes = {
    courses: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            shortDescription: PropTypes.string.isRequired,
            isFree: PropTypes.bool.isRequired,
            price: PropTypes.string
        })
    ).isRequired
};

function OpenCourses(props) {
    return(
        <Grid fluid>
            <Row>
                {props.courses.map(course => {
                    return(
                        <Col key={course.id} sm={12} md={6} lg={4}>
                            <Course id={course.id}
                                    name={course.name}
                                    img={course.img}
                                    desc={course.shortDescription}
                                    onClick={props.onClick}
                            />
                        </Col>
                    )
                })}
            </Row>
        </Grid>
    );
}

OpenCourses.propTypes = {
    courses: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            shortDescription: PropTypes.string.isRequired,
        })
    )
};

class Courses extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    static getDerivedStateFromProps(props, state) {
        if (!props.newCourses.map(course => { return course.id; }).includes(props.selectedCourseId)
            && !props.openCourses.map(course => { return course.id; }).includes(props.selectedCourseId)) {
            props.deselectCourse();
        }

        return null;
    }

    render() {
        const areOpenCourses = this.props.openCourses.length > 0;
        const areNewCourses = this.props.newCourses.length > 0;
        return (
            <div className="height__100pc flex-col">
                <h2 className="center-text">Courses</h2>
                <Panel className="flex__1  overflow-y__auto">
                    <Panel.Body>
                        {areOpenCourses && <h3 className="margin__20">Start a new one...</h3>}
                        <NewCourses courses={this.props.newCourses}/>
                        {areOpenCourses && areNewCourses && <h3 className="margin__20">... or continue where you left off</h3>}
                        <OpenCourses courses={this.props.openCourses}/>
                    </Panel.Body>
                </Panel>
            </div>
        );
    }
}

Courses.propTypes = {
    newCourses: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            shortDescription: PropTypes.string.isRequired,
            isFree: PropTypes.bool.isRequired,
            price: PropTypes.string
        })
    ).isRequired,
    openCourses: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            shortDescription: PropTypes.string.isRequired,
        })
    ).isRequired,
    deselectCourse: PropTypes.func.isRequired
};

export default Courses;