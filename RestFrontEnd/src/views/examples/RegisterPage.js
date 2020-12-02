
import React, { Component } from "react";

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col, FormGroup, Label, Alert } from "reactstrap";

import * as EmailValidator from 'email-validator';
import Popup from "reactjs-popup";
// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import axios from "axios";
class RegisterPage extends Component {
  state = {
    restName: "",
    email: "",
    city: "",
    state: "",
    address: "",
    cpassword: "",
    password: "",
    restNumber: "",
    zip: "",
    errEmail: false,
    errPass: false,
    err: "true",

  }
  componentDidMount() {
    document.body.classList.add("register-page");

  }
  componentWillUnmount() {
    document.body.classList.remove("register-page");
  }
  updateField = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const isValid = EmailValidator.validate(this.state.email);
    if (isValid) {
      if (this.state.password == this.state.cpassword) {
        const values = {
          email: this.state.email,
          password: this.state.password,
          restName: this.state.restName,
          address: this.state.address,
          city: this.state.city,
          state: this.state.state,
          zip: this.state.zip,
          restNumber: this.state.restNumber
        };
        console.log(values);

        axios
          .post(" https://restaurantownerbackend.herokuapp.com/user/restsignup", values)
          .then((res) => {
            console.log(res);
            this.setState({ err: false })
          })
          .catch((err) => {
            this.setState({ err: true })
          });
      }
      else {
        this.setState({ errPass: true });
      }
    }
    else {
      this.setState({ errEmail: true })
    }

  }
  render() {
    const { restName,
      email,
      city,
      state,
      address,
      cpassword,
      password,
      restNumber,
      errEmail,
      zip,
      errPass,
      err } = this.state;
    return (
      <>
        <IndexNavbar />
        <div
          className="page-header"
          style={{
            backgroundImage: "url(" + require("assets/img/registerImage.jpg") + ")"
          }}
        >
          <div className="filter" />
          <Container className="p-5" style={{ color: "white", backgroundColor: "#FF8F5E", zIndex: 1, borderRadius: 20 }}>
            <h3 className="title mx-auto text-center font-weight-bold">Welcome</h3>
            <Form onSubmit={this.submitHandler.bind(this)}>
              <Row md={6}>
                <Col>{errEmail ? (
                  <Alert color="danger" >Email is not valid</Alert>
                ) : <p></p>}
                </Col>

              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label >Restaurant Name </Label>
                    <Input
                      placeholder="like Into The Wild"
                      name="restName"
                      type="text"
                      value={restName}
                      onChange={this.updateField} />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label >Email Address</Label>
                    <Input type="email" name="email" value={email}
                      onChange={this.updateField} placeholder="like xyz@gmail.com" />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label >Address</Label>
                <Input type="text" name="address" value={address}
                  onChange={this.updateField} placeholder="Full addrress of your Restaurant " />
              </FormGroup>
              <Row form>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleCity">City</Label>
                    <Input type="text" name="city" value={city}
                      onChange={this.updateField} placeholder="like Delhi" />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleState">State</Label>
                    <Input type="text" name="state" value={state}
                      onChange={this.updateField} />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleZip">Zip</Label>
                    <Input type="text" name="zip" value={zip}
                      onChange={this.updateField} />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={4}>
                  <FormGroup>
                    <Label >Restaurant Number</Label>
                    <Input type="text" name="restNumber" value={restNumber} onChange={this.updateField} />
                  </FormGroup>
                </Col>
              </Row>
              <Row md={6}>
                <Col> {errPass ? (
                  <Alert color="danger" >Both password are different</Alert>
                ) : <p></p>}
                </Col>

              </Row>
              <Row>


                <Col md={4}>
                  <FormGroup>
                    <Label >Password</Label>
                    <Input type="password" name="password" value={password}
                      onChange={this.updateField} />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label >Retype Password</Label>
                    <Input type="password" name="cpassword" value={cpassword} onChange={this.updateField} />
                  </FormGroup>
                </Col>
              </Row>
              <Row md={4}>
                <Col md={4}>
                  {
                    err ? <div></div> : <Alert color="success">Email register successfully</Alert>
                  }
                </Col>
              </Row>
              <Button className="btn btn-primary btn-sm" color="danger">
                Register
                  </Button>



            </Form>

          </Container>
          <div className="footer register-footer text-center">
            <h6>
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by Notion Infosoft
          </h6>
          </div>
        </div>
      </>
    );
  }
}

export default RegisterPage;
