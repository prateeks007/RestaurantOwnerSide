import React, { Component } from 'react';
import {

    Col, Container, Row, Label
} from 'reactstrap';
import Od from "./od";
import "../../assets/css/customFont.css";
class Dish extends Component {
    render() {
        return (

            <Container md="5" style={{ fontWeight: "bold" }}>
                <hr style={{ height: "2px", color: "black" }}></hr>
                <br></br>
                <Label  >Customer name: {this.props.cname}</Label>
                <br></br>
                <Label  >Customer number: {this.props.cnum}</Label>
                <br></br>
                <Label>Dish detials: </Label>
                {this.props.dishdetails.map((od, i) => (

                    <span> {od}</span>

                ))
                }<br></br>
                <Label  >Customer address: {this.props.caddress}</Label>
                <br></br>
                <Label  >Delivery boy name : {this.props.dname}</Label>
                <br></br>
                <Label  >Delivery boy number: {this.props.dnum}</Label>
                <br></br>
                <Label  >Delivery boy discription: {this.props.ddes}</Label>
                <br></br>
                <Label >Status: {this.props.status}</Label>
                <br></br>

            </Container>


        );
    };
};

export default Dish;