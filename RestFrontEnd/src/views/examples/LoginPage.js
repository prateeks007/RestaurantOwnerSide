
import React, { Component } from "react";

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
class LoginPage extends Component {
    state = {
        email: "",
        password: "",
        token: "",
        message: "",
        loading: true,
        rememberMe: false,
        redirect: "",
    };
    componentDidMount() {
        document.body.classList.add("register-page");

        if (localStorage.getItem("RememberMe") == "false") {
            this.setState({ redirect: localStorage.getItem("Token") });
        }
        else {
            localStorage.clear("Token");
        }
    }
    componentWillUnmount() {
        document.body.classList.remove("register-page");
    }
    updateField = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };
    submitHandler = (e) => {
        e.preventDefault();

        const values = {
            email: this.state.email,
            password: this.state.password,
        };
        console.log(values);

        axios
            .post("https://slot-observation.herokuapp.com/user/login", values)
            .then((res) => {
                console.log(res);
                localStorage.setItem("Token", res.data.token);
                this.setState({ loading: false });
            })
            .catch((err) => {
                console.log(err);
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
                                                <Form className="register-form"
                                                    onSubmit={this.submitHandler.bind(this)}>
                                                    <label>Email</label>
                                                    <Input placeholder="Email" name="email"
                                                        type="email"
                                                        value={email}
                                                        onChange={this.updateField} />
                                                    <label>Password</label>
                                                    <Input placeholder="Password" name="password" type="password" value={password} onChange={this.updateField} />
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
                                                    <Button block className="btn-round" color="danger">
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
                                        <i className="fa fa-heart heart" /> Yash and Malhar
          </h6>
                                </div>
                            </div>
                        </>

                    )}
            </>
        )
            ;
    }
}

export default LoginPage;

{/* <div className="social-line text-center">
    <Button
        className="btn-neutral btn-just-icon mr-1"
        color="facebook"
        href="#pablo"
        onClick={e => e.preventDefault()}
    >
        <i className="fa fa-facebook-square" />
    </Button>
    <Button
        className="btn-neutral btn-just-icon mr-1"
        color="google"
        href="#pablo"
        onClick={e => e.preventDefault()}
    >
        <i className="fa fa-google-plus" />
    </Button>
    <Button
        className="btn-neutral btn-just-icon"
        color="twitter"
        href="#pablo"
        onClick={e => e.preventDefault()}
    >
        <i className="fa fa-twitter" />
    </Button>
</div>*/}