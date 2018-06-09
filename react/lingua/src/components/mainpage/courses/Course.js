import React, { Component } from 'react';
import {Image, Panel} from "react-bootstrap";
import PropTypes from 'prop-types';

import "../../../styles.css";
import "./Course.css";

class Course extends Component {
    constructor(props) {
        super(props);

        this.setActiveCourse = this.setActiveCourse.bind(this);
    }

    setActiveCourse(courseId) {
        if (courseId === this.props.selectedCourseId) {
            this.props.deselectCourse();
        } else {
            this.props.selectCourse(courseId);
        }
    }

    render() {
        return(
            <Panel onClick={() => this.setActiveCourse(this.props.id)}
                   className={this.props.selectedCourseId === this.props.id ? "course-panel-selected" : "course-panel"}>
                {this.props.price
                    ? <p className={this.props.isFree ? "free-price-container" : "price-container"}>{this.props.price}</p>
                    : <p className="hidden-price-container">placeholder</p>
                }
                <div className="course-info-container">
                    <Image className="circle-img" src={this.props.img} circle />
                    <div className="course-info-text">
                        <h5>{this.props.name}</h5>
                        <p>{this.props.desc}</p>
                    </div>
                </div>
            </Panel>
        );
    }
}

Course.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    isFree: PropTypes.bool,
    price: PropTypes.string,
    selectedCourseId: PropTypes.number,
    selectCourse: PropTypes.func.isRequired,
    deselectCourse: PropTypes.func.isRequired
};

export default Course;