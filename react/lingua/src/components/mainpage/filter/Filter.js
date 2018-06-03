import React, {Component} from 'react'
import {Panel, Tab, Tabs} from "react-bootstrap";

import LanguageTab from "../../../containers/mainpage/filter/tabs/LanguageTabContainer";
import AdvancedTab from "./tabs/AdvancedTab";

import "../../../styles.css";

class Filter extends Component {
    render() {
        return (
            <div className="height__100pc flex_col">
                <h2 className="center-text">Filter</h2>
                <Panel className="flex__1">
                    <Panel.Body className="padding__0">
                        <Tabs defaultActiveKey={0} id="filter-tabs">
                            <Tab eventKey={0} title="Languages">
                                <LanguageTab/>
                            </Tab>
                            <Tab eventKey={1} title="Advanced">
                                <AdvancedTab/>
                            </Tab>
                        </Tabs>
                    </Panel.Body>
                </Panel>
            </div>
        );
    }
}

export default Filter;