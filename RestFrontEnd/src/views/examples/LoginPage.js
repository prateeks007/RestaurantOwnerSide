
import React, { Component } from "react";

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col, Alert } from "reactstrap";
import Spinner from "./Spinner.js";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import axios from "axios";
import { Redirect } from "react-router-dom";
class LoginPage extends Component {
    state = {
        email: "",
        password: "",
        token: "",
        message: "",
        loading: true,
        rememberMe: false,
        redirect: "",
        err: false,
        spinner: false
    };
    componentDidMount() {
        document.body.classList.add("register-page");
        localStorage.clear("Token");
    }
    componentWillUnmount() {
        document.body.classList.remove("register-page");
    }
    updateField = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };
    submitHandler = (e) => {
        e.preventDefault();
        this.setState({ spinner: true });
        const values = {
            email: this.state.email,
            password: this.state.password,
        };
        console.log(values);

        axios
            .post(" https://restaurantownerbackend.herokuapp.com/user/login", values)
            .then((res) => {
                console.log(res);
                localStorage.setItem("Token", res.data.token);
                localStorage.setItem("id", res.data.id);
                localStorage.setItem("email", res.data.email);
                this.setState({ loading: false, spinner: false });
            })
            .catch((err) => {
                this.setState({ err: true, spinner: false });

            });
    }
    render() {
        const { email, password, token, loading, redirect, rememberMe } = this.state;
        return (
            <>
                {redirect ? (
                    <Redirect to="dashboard"></Redirect>
                ) : (
                        <>
                            <IndexNavbar />
                            <div
                                className="page-header"
                                style={{
                                    backgroundImage: "url(" + require("assets/img/loginImage.jpg") + ")"
                                }}
                            >
                                <div className="filter" />
                                <Container>
                                    <Row>
                                        <Col className="ml-auto mr-auto" lg="4">
                                            <Card className="card-register ml-auto mr-auto">
                                                <h3 className="title mx-auto">Welcome back! <br></br>to SnackTime</h3>
                                                {this.state.err ? (
                                                    <Alert color="danger" >Useremail and Password combination is wrong</Alert>
                                                ) : <p></p>}

                                                <Form className="register-form"
                                                    onSubmit={this.submitHandler.bind(this)}>
                                                    <label>Email</label>
                                                    <Input placeholder="Email"
                                                        name="email"
                                                        type="email"
                                                        value={email}
                                                        onChange={this.updateField} />
                                                    <label>Password</label>
                                                    <Input placeholder="Password"
                                                        name="password"
                                                        type="password"
                                                        value={password}
                                                        onChange={this.updateField} />
                                                    <div className="custom-control custom-control-alternative custom-checkbox">
                                                        <input
                                                            className="custom-control-input"
                                                            id=" customCheckLogin"
                                                            type="checkbox"
                                                            checked={rememberMe}
                                                            onChange={(event) => {
                                                                this.setState({ rememberMe: event.target.checked })
                                                                localStorage.setItem("RememberMe", rememberMe);
                                                            }}
                                                        />
                                                        <label
                                                            className="custom-control-label"
                                                            htmlFor=" customCheckLogin"
                                                        >
                                                            <span >Remember me</span>
                                                        </label>
                                                    </div>
                                                    {loading ? (
                                                        <div>

                                                        </div>
                                                    ) : (
                                                            <Redirect to="dashboard"></Redirect>
                                                        )}
                                                    {
                                                        this.state.spinner ?
                                                            <Spinner></Spinner>
                                                            : <p></p>
                                                    }

                                                    <Button block className="btn-round" color="danger" onClick={this.submitHandler.bind(this)}>
                                                        Login
                                                    </Button>
                                                </Form>
                                                <div className="forgot">
                                                    <Button
                                                        className="btn-link"
                                                        color="danger"
                                                        href="#pablo"
                                                        onClick={e => {
                                                            e.preventDefault();
                                                            alert("not done");
                                                        }}
                                                    >
                                                        Forgot password?
                  </Button>
                                                </div>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Container>
                                <div className="footer register-footer text-center">
                                    <h6>
                                        © {new Date().getFullYear()}, made with{" "}
                                        <i className="fa fa-heart heart" /> Notion Infosoft
          </h6>
                                </div>
                            </div>
                        </>

                    )
                }
            </>
        )
            ;
    }
}

export default LoginPage;

