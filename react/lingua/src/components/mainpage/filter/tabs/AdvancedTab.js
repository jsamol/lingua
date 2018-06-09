import React, {Component} from 'react';
import {Button, Checkbox, ControlLabel, FormControl, FormGroup} from "react-bootstrap";
import PropTypes from 'prop-types';

import './AdvanceTabs.css';

class AdvancedTab extends Component {
    constructor(props) {
        super(props);

        this.state = {
            keywords: this.props.advancedFilter.keywords ? this.props.advancedFilter.keywords : "",
            minPrice: this.props.advancedFilter.minPrice ? this.props.advancedFilter.minPrice : "",
            maxPrice: this.props.advancedFilter.maxPrice ? this.props.advancedFilter.maxPrice : "",
            freeOnly: this.props.advancedFilter.freeOnly ? this.props.advancedFilter.freeOnly : false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
    }

    handleSubmit(event) {
        this.props.setAdvancedFilter(this.state);
        console.log(event);
        event.preventDefault();
    }

    handleFormChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return(
            <form className="padding__10" onSubmit={this.handleSubmit}>
                <FormGroup controlId="keywordsFilterForm">
                    <ControlLabel>Keywords</ControlLabel>
                    <FormControl type="text"
                                 placeholder="Enter keywords"
                                 onChange={this.handleFormChange}
                                 name="keywords"
                                 value={this.state.keywords} />
                </FormGroup>
                <FormGroup controlId="priceFilterForm">
                    <ControlLabel>Price</ControlLabel>
                    <div className="inline-form-container">
                        <FormControl className="inline-form-member__2p5"
                                     type="text" placeholder="min"
                                     onChange={this.handleFormChange}
                                     name="minPrice"
                                     value={this.state.minPrice} />

                        <p className="inline-form-member__1">$ - </p>

                        <FormControl className="inline-form-member__2p5"
                                     type="text"
                                     placeholder="max"
                                     onChange={this.handleFormChange}
                                     name="maxPrice"
                                     value={this.state.maxPrice} />

                        <p className="inline-form-member__1">$</p>

                        <Checkbox checked={this.state.freeOnly}
                                  className="inline-form-member__6"
                                  onChange={this.handleFormChange}
                                  name="freeOnly">
                            Free only
                        </Checkbox>
                    </div>
                </FormGroup>
                <div className="flex__justify-right">
                    <Button type='submit'>Filter</Button>
                </div>
            </form>
        );
    }
}

AdvancedTab.propTypes = {
    advancedFilter: PropTypes.shape({
        keywords: PropTypes.string,
        minPrice: PropTypes.string,
        maxPrice: PropTypes.string,
        freeOnly: PropTypes.bool
    }).isRequired,
    setAdvancedFilter: PropTypes.func.isRequired
};

export default AdvancedTab;