import React, {Component} from 'react';
import {Image, ListGroup, ListGroupItem} from "react-bootstrap";
import PropTypes from "prop-types";

import "../../../shared/styles.css";
import "./LanguageTab.css";

function LanguageItem(props) {
    return(
        <div>
            <Image className="circle-img lang-img" src={props.img} circle />
            <h4 className="lang-name">{props.title}</h4>
        </div>
    );
}

LanguageItem.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

class LanguageTab extends Component {
    constructor(props) {
        super(props);

        this.onLanguageClick = this.onLanguageClick.bind(this);
    }

    onLanguageClick(event) {
        const target = event.target;
        const id = parseInt(target.id, 10);

        this.props.toggleLanguageFilter(id);
    }

    render() {
        return(
            <ListGroup>
                {this.props.languages.map(language => {

                    return (
                        <ListGroupItem onClick={this.onLanguageClick}
                                       id={language.id}
                                       key={language.id}
                                       active={this.props.filterLanguages.includes(language.id)}>
                            <LanguageItem img={language.img} title={language.name}/>
                        </ListGroupItem>
                    );
                })}
            </ListGroup>
        );
    }
}

LanguageTab.propTypes = {
    languages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            img: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        })
    ).isRequired,
    filterLanguages: PropTypes.arrayOf(
        PropTypes.number
    ).isRequired,
    toggleLanguageFilter: PropTypes.func.isRequired
};

export default LanguageTab;