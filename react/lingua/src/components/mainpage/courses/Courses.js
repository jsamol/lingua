import React, { Component } from 'react';
import {Col, Collapse, Grid, Image, Panel} from "react-bootstrap";
import PropTypes from 'prop-types';

import "../../../styles.css";
import "./Courses.css";

import Course from "../../../containers/mainpage/courses/CourseContainer";

function NewCourses(props) {
    const alwaysVisibleCourses = props.courses.slice(0, 3);
    const hiddenCourses = props.courses.slice(3);
    return(
        <div>
            {alwaysVisibleCourses.map(course => {
                return(
                    <Col key={course.id} md={4}>
                        <Course id={course.id}
                                name={course.name}
                                img={course.img}
                                desc={course.shortDescription}
                                onClick={props.onClick}
                                isFree={course.isFree}
                                price={course.isFree ? "FREE" : course.price}
                        />
                    </Col>
                );
            })}
            <Collapse in={!props.showLess}>
                <div>
                    {hiddenCourses.map(course => {
                        return(
                            <Col key={course.id} md={4}>
                                <Course id={course.id}
                                        name={course.name}
                                        img={course.img}
                                        desc={course.shortDescription}
                                        onClick={props.onClick}
                                        isFree={course.isFree}
                                        price={course.isFree ? "FREE" : course.price}
                                />
                            </Col>
                        );
                    })}
                </div>
            </Collapse>
        </div>
    );
}

function OpenCourses(props) {
    return(
        props.courses.map(course => {
            return(
                <Col key={course.id} md={4}>
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

class Courses extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shouldShowLessNewCourses: true
        };

        this.toggleShouldShowLessNewCourses = this.toggleShouldShowLessNewCourses.bind(this);
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
                            <NewCourses onClick={this.setActiveCourse}
                                        courses={this.props.newCourses}
                                        showLess={this.state.shouldShowLessNewCourses}
                            />
                        </Grid>

                        {this.props.newCourses.length > 3 &&
                            <p onClick={this.toggleShouldShowLessNewCourses}
                               className="more-less-button">
                                {this.state.shouldShowLessNewCourses ? "More" : "Less"}
                            </p>
                        }

                        {areOpenCourses && areNewCourses && <h3 className="margin__20">... or continue where you left off</h3>}

                        <Grid fluid>
                            <OpenCourses onClick={this.setActiveCourse}
                                         courses={this.props.openCourses}
                            />
                        </Grid>
                    </Panel.Body>
                </Panel>
            </div>
        );
    }
}

Courses.propTypes = {
    newCourses: PropTypes.arrayOf(
        PropTypes.object
    ).isRequired,
    openCourses: PropTypes.arrayOf(
        PropTypes.object
    ).isRequired
};

export default Courses;