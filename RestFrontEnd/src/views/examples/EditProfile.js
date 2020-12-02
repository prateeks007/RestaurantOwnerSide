import React, { Component } from 'react';
import axios from "axios";
import {
    Button,
    Label,
    FormGroup,
    Input,
    Form,
    Container,
    Row,
    Col,
    Jumbotron,
    CardBody,
    Card,
    CardImg
} from "reactstrap";
class EditProfile extends Component {
    state = {
        email: this.props.email,
        address: this.props.address,
        restNumber: this.props.restNumber,
        restName: this.props.restName,
        zip: this.props.zip,
        city: this.props.city,
        state: this.props.state


    };
    updateField = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };
    submitHandler = (e) => {
        e.preventDefault();

        const values = [
            {
                "propName": "city",
                "value": this.state.city
            }, {
                "propName": "state",
                "value": this.state.state
            },
            {
                "propName": "zip",
                "value": this.state.zip
            }, {
                "propName": "restName",
                "value": this.state.restName
            }, {
                "propName": "email",
                "value": this.state.email
            }, {
                "propName": "address",
                "value": this.state.address
            }, {
                "propName": "restNumber",
                "value": this.state.restNumber
            }
        ];
        console.log(values);

        axios
            .patch(" https://cors-anywhere.herokuapp.com/https://restaurantownerbackend.herokuapp.com/user/changeInfo/" + localStorage.getItem("id"), values)
            .then((res) => {
                console.log(res);

            })
            .catch((err) => {
                console.log(err);
            });
    }
    render() {
        const { email, restName, restNumber, city, zip, state, address } = this.state;
        return (

            <Jumbotron>
                <Container className="text-left font-weight-bold" >
                    <Card body>
                        <CardImg className="p-5" src={require("assets/img/default-form.svg")}
                        />
                        <CardBody>
                            <Form>
                                <FormGroup>
                                    <Label for="exampleFile">Image File</Label>
                                    <Input type="file" name="file" id="exampleFile" />
                                    <Label >
                                        Note:This will showcase your restaurant/shop to customers side.
                              </Label>
                                </FormGroup>
                                <Row form>
                                    <Col md={5}>
                                        <FormGroup>
                                            <Label >Restaurant Name </Label>
                                            <Input type="text" name="restName" value={restName} onChange={this.updateField} placeholder={this.props.restName} />
                                        </FormGroup>
                                    </Col>
                                    <Col md={5}>
                                        <FormGroup>
                                            <Label >Email Address</Label>
                                            <Input type="email" name="email" vaule={email} onChange={this.updateField} placeholder={this.props.email} />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <FormGroup>
                                    <Label >Address</Label>
                                    <Input type="text" name="address" value={address} onChange={this.updateField} placeholder={this.props.address} />
                                </FormGroup>
                                <Row form>
                                    <Col md={3}>
                                        <FormGroup>
                                            <Label for="exampleCity">City</Label>
                                            <Input type="text" name="city" value={city} onChange={this.updateField} placeholder={this.props.city} />
                                        </FormGroup>
                                    </Col>
                                    <Col md={3}>
                                        <FormGroup>
                                            <Label for="exampleState">State</Label>
                                            <Input type="text" name="state" value={state} onChange={this.updateField} placeholder={this.props.state} />
                                        </FormGroup>
                                    </Col>
                                    <Col md={3}>
                                        <FormGroup>
                                            <Label for="exampleZip">Zip</Label>
                                            <Input type="text" name="zip" value={zip} onChange={this.updateField} placeholder={this.props.zip} />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col md={3}>
                                        <FormGroup>
                                            <Label >Restaurant Number</Label>
                                            <Input type="text" name="restNumber" value={restNumber} onChange={this.updateField} placeholder={this.props.restNumber} />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Button className="btn btn-primary btn-sm" onClick={this.submitHandler.bind(this)} id="UncontrolledTooltipExample" color="danger">
                                    Save Changes
                    </Button>


                            </Form>
                        </CardBody>
                    </ Card>
                </Container>
            </Jumbotron>
        );
    }
};

export default EditProfile;