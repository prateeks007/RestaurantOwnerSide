import React, { Component } from 'react';
import {
    Button,
    Label,
    FormGroup,
    Input,
    NavItem,
    NavLink,
    Nav,
    Form,
    TabContent,
    TabPane,
    Container,
    Row,
    Col
} from "reactstrap";
class EditProfile extends Component {
    state = {}
    render() {
        return (
            <Container className="py-5" style={{ color: "white", backgroundColor: "#FF8F5E", zIndex: 1, borderRadius: 20 }}>

                <div class="col-md-3">
                    <div class="text-center">
                        <img src="//placehold.it/100" class="avatar img-circle" alt="avatar" />
                        <h6>Upload a different photo...</h6>

                        <Input type="file" class="form-control" />
                    </div>
                </div>
                <Form>
                    <Row form>
                        <Col md={5}>
                            <FormGroup>
                                <Label >Restaurant Name </Label>
                                <Input type="text" name="resName" placeholder="like Into The Wild" />
                            </FormGroup>
                        </Col>
                        <Col md={5}>
                            <FormGroup>
                                <Label >Email Address</Label>
                                <Input type="email" name="email" placeholder="like xyz@gmail.com" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Label >Address</Label>
                        <Input type="text" name="address" placeholder="Full addrress of your Restaurant " />
                    </FormGroup>
                    <Row form>
                        <Col md={3}>
                            <FormGroup>
                                <Label for="exampleCity">City</Label>
                                <Input type="text" name="city" />
                            </FormGroup>
                        </Col>
                        <Col md={3}>
                            <FormGroup>
                                <Label for="exampleState">State</Label>
                                <Input type="text" name="state" />
                            </FormGroup>
                        </Col>
                        <Col md={3}>
                            <FormGroup>
                                <Label for="exampleZip">Zip</Label>
                                <Input type="text" name="zip" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={3}>
                            <FormGroup>
                                <Label >Restaurant Number</Label>
                                <Input type="text" name="resNumber" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3}>
                            <FormGroup>
                                <Label >Password</Label>
                                <Input type="password" name="password" />
                            </FormGroup>
                        </Col>
                        <Col md={3}>
                            <FormGroup>
                                <Label >Retype Password</Label>
                                <Input type="password" name="rePassword" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Button className="btn btn-primary btn-sm" color="danger">
                        Save Changes
                    </Button>
                </Form>

            </Container>);
    }
}

export default EditProfile;