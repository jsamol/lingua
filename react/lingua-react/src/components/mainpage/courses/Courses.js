import React, {Component} from 'react';
import {Col, Collapse, Grid, Panel, Row} from "react-bootstrap";
import PropTypes from 'prop-types';

import "../../shared/styles.css";
import "./Courses.css";

import Course from "../../../containers/mainpage/courses/CourseContainer";

function NewCourses(props) {
    const alwaysVisibleCourses = props.courses.slice(0, 3);
    const hiddenCourses = props.courses.slice(3);
    return(
        <div>
            {alwaysVisibleCourses.map(course => {
                return(
                    <Col key={course.id} sm={12} md={6} lg={4}>
                        <Course id={course.id}
                                name={course.name}
                                img={course.img}
                                desc={course.shortDescription}
                                onClick={props.onClick}
                                isFree={course.isFree}
                                price={course.isFree ? "FREE" : "$" + course.price}
                        />
                    </Col>
                );
            })}
            <Collapse in={!props.showLess}>
                <div>
                    {hiddenCourses.map(course => {
                        return(
                            <Col key={course.id} sm={12} md={6} lg={4}>
                                <Course id={course.id}
                                        name={course.name}
                                        img={course.img}
                                        desc={course.shortDescription}
                                        onClick={props.onClick}
                                        isFree={course.isFree}
                                        price={course.isFree ? "FREE" : "$" + course.price}
                                />
                            </Col>
                        );
                    })}
                </div>
            </Collapse>
        </div>
    );
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
    ).isRequired,
    showLess: PropTypes.bool.isRequired
};

function OpenCourses(props) {
    return(
        props.courses.map(course => {
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
        })
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

        this.state = {
            shouldShowLessNewCourses: true
        };

        this.toggleShouldShowLessNewCourses = this.toggleShouldShowLessNewCourses.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        if (!props.newCourses.map(course => { return course.id; }).includes(props.selectedCourseId)
            && !props.openCourses.map(course => { return course.id; }).includes(props.selectedCourseId)) {
            props.deselectCourse();
        }

        return null;
    }

    toggleShouldShowLessNewCourses() {
        this.setState(previousState => {
            return {
                shouldShowLessNewCourses: !previousState.shouldShowLessNewCourses
            };
        });
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

                        <Grid fluid>
                            <Row>
                                <NewCourses courses={this.props.newCourses}
                                            showLess={this.state.shouldShowLessNewCourses}
                                />
                            </Row>
                        </Grid>

                        {this.props.newCourses.length > 3 &&
                            <p onClick={this.toggleShouldShowLessNewCourses}
                               className="more-less-button">
                                {this.state.shouldShowLessNewCourses ? "More" : "Less"}
                            </p>
                        }

                        {areOpenCourses && areNewCourses && <h3 className="margin__20">... or continue where you left off</h3>}

                        <Grid fluid>
                            <Row>
                                <OpenCourses courses={this.props.openCourses}
                                />
                            </Row>
                        </Grid>
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