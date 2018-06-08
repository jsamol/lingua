import React, {Component} from 'react';
import {Button, Checkbox, ControlLabel, FormControl, FormGroup} from "react-bootstrap";

import './AdvanceTabs.css';

class AdvancedTab extends Component {
    render() {
        return(
            <form className="padding__10">
                <FormGroup controlId="keywordsFilterForm">
                    <ControlLabel>Keywords</ControlLabel>
                    <FormControl type="text" placeholder="Enter keywords" />
                </FormGroup>
                <FormGroup controlId="priceFilterForm">
                    <ControlLabel>Price</ControlLabel>
                    <div className="inline-form-container">
                        <FormControl className="inline-form-member__2p5" type="text" placeholder="min" />
                        <p className="inline-form-member__1">$ - </p>
                        <FormControl className="inline-form-member__2p5" type="text" placeholder="max" />
                        <p className="inline-form-member__1">$</p>
                        <Checkbox className="inline-form-member__6">Free only</Checkbox>
                    </div>
                </FormGroup>
                <div className="flex__justify-right">
                    <Button type='submit'>Filter</Button>
                </div>
            </form>
        );
    }
}

export default AdvancedTab;