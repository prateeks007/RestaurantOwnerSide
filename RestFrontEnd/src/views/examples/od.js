import React, { Component } from 'react';
import {

    Col, Row, Label
} from 'reactstrap';

import "../../assets/css/customFont.css";
class Dish extends Component {
    render() {
        return (
            <Col md="3" style={{ fontWeight: "bold" }}>

                <Label  >Order details: {this.props.od}</Label>

            </Col>


        );
    };
};

export default Dish;