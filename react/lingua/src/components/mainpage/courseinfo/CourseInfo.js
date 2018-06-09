import React, {Component} from 'react';
import {Fade, Panel} from "react-bootstrap";
import PropTypes from 'prop-types';

import CourseInfoHeader from "../../../containers/mainpage/courseinfo/CourseInfoHeaderContainer";

import "../../shared/styles.css";
import "./CourseInfo.css";

function SampleExercise(props) {
    return(
        <div>
            <h4>Sample exercise</h4>
            <Panel>
                <Panel.Body>
                    <p className="sample-exercise">{props.exercise}</p>
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
                                    <CourseInfoHeader id={this.props.selectedCourse.id}
                                                      name={this.props.selectedCourse.name}
                                                      img={this.props.selectedCourse.img}
                                                      isOpen={this.props.selectedCourse.isOpen}
                                                      isFree={this.props.selectedCourse.isFree}
                                                      price={this.props.selectedCourse.price
                                                                ? "$" + this.props.selectedCourse.price
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