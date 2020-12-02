
import React, { Component } from "react";

import {
  Button,
  Label,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";
import Switch from "react-switch";

import { Link, Redirect } from "react-router-dom";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import Orders from "./Orders";
import EditProfile from "./EditProfile.js";
import StarRatings from 'react-star-ratings';
import Spinner from "./Spinner.js";
import axios from "axios";
class ProfilePage extends Component {

  state = {
    data: [],
    checked: true,
    rating: 4,
    wallet: "499",
    logout: false,
    err: false,
    spinner: true
  };
  componentDidMount() {
    this.setState({ spinner: true });
    const values = {
      "_id": localStorage.getItem('id')
    }
    axios
      .post("https://restaurantownerbackend.herokuapp.com/user/getInfo", values)
      .then((res) => {
        console.log(res);
        this.setState({ data: res.data, spinner: false });
        console.log(this.state.data);

      })
      .catch((err) => {
        this.setState({ err: true, spinner: false });

      });

  }
  handleChange = (checked) => {
    this.setState({ checked });
  }
  render() {
    const { data } = this.state;
    return (
      <>
        <ExamplesNavbar />
        <ProfilePageHeader />

        <Container className="py-4 text-center" >
          <hr>
          </hr>

          <h2 className="title  font-weight-bold">Restaurant Status</h2>

          <label>
            <Switch
              onChange={this.handleChange}
              checked={this.state.checked}
              className="react-switch"
            />
          </label>

          <p className="title font-weight-bold">Your Restaurant is <span>{this.state.checked ? 'on' : 'off'}</span>.</p>

          <hr>
          </hr>

          <h2 className="title font-weight-bold ">Edit Profile</h2>
          {
            this.state.spinner ? <Spinner></Spinner> :
              <div>
                {
                  data.map((info, index) => (
                    <EditProfile key={index} restName={info.restName} address={info.address} id={info.id} city={info.city} email={info.email} state={info.state} zip={info.zip} restNumber={info.restNumber} />
                  ))
                }
              </div>
          }



          <hr>
          </hr>
          <Orders></Orders>
          <hr>
          </hr>


          <h2 className="title  font-weight-bold">Recevied Ratings</h2>
          <StarRatings
            rating={this.state.rating}
            starRatedColor="orange"
            changeRating={this.changeRating}
            numberOfStars={5}
            name='rating'
          />
          <hr>
          </hr>

          <h2 className="title  font-weight-bold">Wallet :{this.state.wallet}</h2>

          <hr>
          </hr>
          {this.state.logout ? <Redirect to="/login"></Redirect> :
            <Button className="my-5 btn btn-primary btn-sm" color="danger" onClick={() => {
              localStorage.clear();
              this.setState({ logout: true })
            }}>
              Log Out
                  </Button>}
        </Container>


        <DemoFooter />
      </>
    );
  }
}

export default ProfilePage;
