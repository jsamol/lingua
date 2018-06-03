import React, { Component } from 'react';
import {Panel} from "react-bootstrap";

class Courses extends Component {
    render() {
        return (
            <div>
                <h2 className="center-text">Courses</h2>
                <Panel>
                    <Panel.Body>
                        Courses
                    </Panel.Body>
                </Panel>
            </div>
        );
    }
}

export default Courses;