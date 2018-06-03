import React, { Component } from 'react';
import {Panel} from "react-bootstrap";

class CourseInfo extends Component {
    render() {
        return (
            <div>
                <h2 className="center-text">Course Info</h2>
                <Panel>
                    <Panel.Body>
                        Course info
                    </Panel.Body>
                </Panel>
            </div>
        );
    }
}

export default CourseInfo;