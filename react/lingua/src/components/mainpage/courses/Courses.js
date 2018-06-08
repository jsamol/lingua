import React, { Component } from 'react';
import {Panel} from "react-bootstrap";

import "../../../styles.css";

class Courses extends Component {
    render() {
        return (
            <div className="height__100pc flex-col">
                <h2 className="center-text">Courses</h2>
                <Panel className="flex__1">
                    <Panel.Body>
                        Courses
                    </Panel.Body>
                </Panel>
            </div>
        );
    }
}

export default Courses;