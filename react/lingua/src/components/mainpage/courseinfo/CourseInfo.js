import React, { Component } from 'react';
import {Panel} from "react-bootstrap";

class CourseInfo extends Component {
    render() {
        return (
            <div className="height__100pc flex-col">
                <h2 className="center-text">Course Info</h2>
                <Panel className="flex__1">
                    <Panel.Body>
                        Course info
                    </Panel.Body>
                </Panel>
            </div>
        );
    }
}

export default CourseInfo;