import React, {Component} from "react";
import {Button, Image} from "react-bootstrap";
import PropTypes from 'prop-types';

import {startNewCourse} from "../../../utils/ApiService";
import {Link} from "react-router-dom";

import "../../shared/styles.css";
import "./CourseInfoHeader.css";

class CourseInfoHeader extends Component {
    constructor(props) {
        super(props);

        this.handleStartButtonClick = this.handleStartButtonClick.bind(this);
    }

    handleStartButtonClick(event) {
        startNewCourse(this.props.user, this.props.id);
    }

    render(){
        return(
            <div className="course-header-container">
                <div className="course-header-info">
                    <Image className="circle-img" src={this.props.img} circle />
                    <div className="course-header-info-text">
                        <h5>{this.props.name}</h5>
                        {!this.props.isOpen
                            ? <p className={this.props.isFree
                                ? "free-price-container selected-course-price-container"
                                : "price-container selected-course-price-container"}>
                                {this.props.price}
                            </p>
                            : <p className="hidden-price-container selected-course-price-container">placeholder</p>
                        }
                    </div>
                </div>
                <Link to={"/courses/" + this.props.id}
                      onClick={this.props.isOpen ? () => {} : this.handleStartButtonClick}
                      className="flex__1">
                    <Button bsStyle="primary">
                        {this.props.isOpen ? "Continue" : "Start"}
                    </Button>
                </Link>
            </div>
        );
    }
}

CourseInfoHeader.propTypes = {
    user: PropTypes.object,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    isFree: PropTypes.bool.isRequired,
    price: PropTypes.string.isRequired
};

export default CourseInfoHeader;