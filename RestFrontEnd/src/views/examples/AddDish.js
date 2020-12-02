import React, { Component } from 'react';
import MenuView from './MenuView';
import { Redirect } from "react-router-dom";

class AddDish extends Component {

    state = {
        redirect: ""
    }
    componentDidMount() {
        document.body.classList.add("register-page");
    }
    render() {
        return (
            <div>
                {this.state.redirect ? (
                    <Redirect to="dashboard"></Redirect>
                ) : (<MenuView></MenuView>)}
            </div>);
    }
}

export default AddDish;