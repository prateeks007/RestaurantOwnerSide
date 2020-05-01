
import React from "react";

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col, FormGroup, Label, } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";

function RegisterPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });
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
          <Form>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label >Restaurant Name </Label>
                  <Input type="text" name="resName" placeholder="like Into The Wild" />
                </FormGroup>
              </Col>
              <Col md={6}>
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
              <Col md={4}>
                <FormGroup>
                  <Label for="exampleCity">City</Label>
                  <Input type="text" name="city" />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="exampleState">State</Label>
                  <Input type="text" name="state" />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="exampleZip">Zip</Label>
                  <Input type="text" name="zip" />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={4}>
                <FormGroup>
                  <Label >Restaurant Number</Label>
                  <Input type="text" name="resNumber" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <FormGroup>
                  <Label >Password</Label>
                  <Input type="password" name="password" />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label >Retype Password</Label>
                  <Input type="password" name="rePassword" />
                </FormGroup>
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
            <i className="fa fa-heart heart" /> by Yash
          </h6>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
