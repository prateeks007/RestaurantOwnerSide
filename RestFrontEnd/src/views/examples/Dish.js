import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col, Row, Label
} from 'reactstrap';
import axios from 'axios';
import "../../assets/css/customFont.css";
class Dish extends Component {
    state = {

    }

    delete = (id) => {


        axios
            .delete("https://cors-anywhere.herokuapp.com/http://restaurantownerbackend.herokuapp.com/dish/deleteDish/" + this.props.id)
            .then(res => {
                console.log(res);
                this.props.delete(id);
            });
    }
    render() {
        return (
            <Col md="3" >
                <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333', margin: "15px", minHeight: "250px" }} >
                    <Label style={{ fontFamily: "custom-font", color: "white", padding: "5px" }} >Dish Name: {this.props.title}</Label>
                    <Label style={{ fontFamily: "custom-font", color: "white", padding: "5px" }}>Dish Price: {this.props.price}</Label>
                    <Label style={{ fontFamily: "custom-font", color: "white", padding: "5px" }}>Dish discription: {this.props.expl}</Label>
                    <Button onClick={this.delete.bind(this, this.props.x)} >Delete</Button>
                </Card>
            </Col>


        );
    };
};

export default Dish;