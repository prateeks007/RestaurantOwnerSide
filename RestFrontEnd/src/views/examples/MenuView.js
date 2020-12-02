import React, { Component } from 'react';
import Dish from "./Dish";
import axios from 'axios';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col, Row, Form, CardDeck, Input, Container, Alert, Label, FormGroup
} from 'reactstrap';
import ExamplesNavbar from 'components/Navbars/ExamplesNavbar';
import DemoFooter from 'components/Footers/DemoFooter';
import Spinner from './Spinner';

class MenuView extends Component {
    state = {
        dishes: [],
        dishName: "",
        dishPrice: "",
        dishDis: "",
        id: ""
    }
    async componentDidMount() {
        this.setState({ id: localStorage.getItem("id") });
        this.getInfo();
    }
    getInfo = () => {
        const value = {

            user_id: localStorage.getItem("id")
        }
        axios
            .post(" https://restaurantownerbackend.herokuapp.com/dish/getDish", value)
            .then(res => {
                console.log(res);
                this.setState({ dishes: res.data });

            });
    }
    updateField = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };
    delete = (id) => {
        this.getInfo();

    }
    submitHandler = (e) => {
        const value = {

            user_id: this.state.id,
            dish_name: this.state.dishName,
            dish_expl: this.state.dishDis,
            dish_price: this.state.dishPrice
        }
        axios
            .post(" https://restaurantownerbackend.herokuapp.com/dish/addDish", value)
            .then(res => {
                console.log(res);
                if (res.data.message == "Dish added successfully") {
                    this.getInfo();

                }
            });
    }
    render() {
        const { dishes, dishName, dishDis, dishPrice } = this.state;
        return (<>
            <ExamplesNavbar></ExamplesNavbar>

            <div className="page-header" style={{
                backgroundImage: "url(" + require("assets/img/addDish.jpg") + ")",
                minHeight: "1600px"

            }}>
                <Container style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                    <h2 className="title text-center font-weight-bold">Your current cuisine</h2>
                    <Row>
                        {dishes.length ?

                            dishes.map((dish, i) => (
                                <Dish key={i} x={i} delete={this.delete.bind(this)} id={dish.dish_id} title={dish.dish_name} expl={dish.dish_expl} price={dish.dish_price} />
                            ))

                            :
                            <Col>
                                <h2 className="title text-center font-weight-bold">Your menu is empty or your data is fetching !!</h2>
                            </Col>
                        }

                    </Row>
                    <h2 className="title text-center font-weight-bold">Add more masala to your menu</h2>
                    <Row>
                        <Col md="3" style={{ margin: "20 0 20 0" }}>
                            <Card >
                                <Form onSubmit={this.submitHandler.bind(this)}>
                                    <CardBody >
                                        <FormGroup>

                                            <Label style={{ fontFamily: "custom-font" }} >Dish Name: </Label    >
                                            <Input
                                                className="py-3"
                                                placeholder="Enter dish name"
                                                name="dishName"
                                                type="text"
                                                value={dishName}
                                                onChange={this.updateField} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label style={{ fontFamily: "custom-font" }}>Dish Price: </Label>
                                            <Input
                                                placeholder="Enter price"
                                                name="dishPrice"
                                                type="number"
                                                value={dishPrice}
                                                onChange={this.updateField} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label style={{ fontFamily: "custom-font" }}>Dish discription: </Label>
                                            <Input
                                                placeholder="Describe your dish"
                                                name="dishDis"
                                                type="text"
                                                value={dishDis}
                                                onChange={this.updateField} />
                                        </FormGroup>

                                        <Button>Add to menu</Button>
                                    </CardBody>
                                </Form>
                            </Card>
                        </Col>

                    </Row>
                </Container>
            </div>
            <DemoFooter></DemoFooter>
        </>

        );
    };
}
export default MenuView;