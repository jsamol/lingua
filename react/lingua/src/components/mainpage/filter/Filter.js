import React, { Component } from 'react'
import { Panel, Tab, Tabs } from "react-bootstrap";

class Filter extends Component {
    render() {
        return (
            <div>
                <h2 className="center-text">Filter</h2>
                <Panel>
                    <Panel.Body>
                        <Tabs defaultActiveKey={0} id="filter-tabs">
                            <Tab eventKey={0} title="Languages">
                                Languages
                            </Tab>
                            <Tab eventKey={1} title="Advanced">
                                Advanced
                            </Tab>
                        </Tabs>
                    </Panel.Body>
                </Panel>
            </div>
        );
    }
}

export default Filter;