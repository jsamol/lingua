import React, {Component} from 'react';
import {Image, ListGroup, ListGroupItem} from "react-bootstrap";
import PropTypes from "prop-types";

import "../../../../styles.css";
import "./LanguageTab.css";

function LanguageItem(props) {
    return(
        <div>
            <Image className="circle-img lang-img" src={props.img} circle />
            <h4 className="lang-name">{props.title}</h4>
        </div>
    );
}

class LanguageTab extends Component {

    render() {
        return(
            <ListGroup>
                {this.props.languages.map((language, id) => {
                    return (
                        <ListGroupItem key={language.id}>
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
        PropTypes.object
    ).isRequired
};

export default LanguageTab;