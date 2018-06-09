import React, {Component} from 'react';
import {Button, Fade, Image, Panel} from "react-bootstrap";
import PropTypes from 'prop-types';

import "../../../styles.css";
import "./CourseInfo.css";

function CourseInfoHeader(props) {
    return(
        <div className="course-header-container">
            <div className="course-header-info">
                <Image className="circle-img" src={props.img} circle />
                <div className="course-header-info-text">
                    <h5>{props.name}</h5>
                    {!props.isOpen
                        ? <p className={props.isFree
                                        ? "free-price-container selected-course-price-container"
                                        : "price-container selected-course-price-container"}>
                            {props.price}
                          </p>
                        : <p className="hidden-price-container selected-course-price-container">placeholder</p>
                    }
                </div>
            </div>
            <Button bsStyle="primary" className="flex__1">{props.isOpen ? "Continue" : "Start"}</Button>
        </div>
    );
}

function SampleExercise(props) {
    return(
        <div>
            <h4>Sample exercise</h4>
            <Panel>
                <Panel.Body>
                    <p>props.exercise</p>
                </Panel.Body>
            </Panel>
        </div>
    );
}

class CourseInfo extends Component {
    render() {
        return (
            <div className="height__100pc flex-col">
                <h2 className="center-text">Course Info</h2>
                <Panel className="flex__1 overflow-y__auto">
                    <Panel.Body className="height__100pc padding__20">
                        <Fade in={this.props.selectedCourse !== undefined}>
                            {this.props.selectedCourse
                                ? <div>
                                    <CourseInfoHeader name={this.props.selectedCourse.name}
                                                      img={this.props.selectedCourse.img}
                                                      isOpen={this.props.selectedCourse.isOpen}
                                                      isFree={this.props.selectedCourse.isFree}
                                                      price={this.props.selectedCourse.price
                                                                ? this.props.selectedCourse.price
                                                                : "FREE"}/>
                                    <p className="course-description">{this.props.selectedCourse.description}</p>
                                    {this.props.selectedCourse.sampleExercise &&
                                        <SampleExercise exercise={this.props.selectedCourse.sampleExercise}/>
                                    }
                                  </div>
                                : <div/>
                            }
                        </Fade>
                        <Fade in={this.props.selectedCourse === undefined}>
                            {!this.props.selectedCourse
                                ? <div className="no-selected-course-container">
                                    <p>Select a course to display additional information</p>
                                  </div>
                                : <div/>
                            }
                        </Fade>
                    </Panel.Body>
                </Panel>
            </div>
        );
    }
}

CourseInfo.propTypes = {
    selectedCourse: PropTypes.object
};

export default CourseInfo;