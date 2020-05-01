
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
// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import EditProfile from "./EditProfile.js";
import MenuView from "./MenuView.js";
import StarRatings from 'react-star-ratings';
class ProfilePage extends Component {

  constructor() {
    super();
    this.state = {
      checked: true,
      rating: 2,
      wallet: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }
  render() {
    return (
      <>
        <ExamplesNavbar />
        <ProfilePageHeader />
        <div style={{

          display: "grid",
          backgroundColor: "black",
          color: "white",
          gridTemplateColumns: "repeat(auto-fit,auto)",
          gridTemplateRows: "repeat(2,auto)"
        }}>
          <Container className="py-4" >
            <h2>Resataurant Status</h2>
            <label>
              <Switch
                onChange={this.handleChange}
                checked={this.state.checked}
                className="react-switch"
              />
            </label>
            <p>Your Resataurant is <span>{this.state.checked ? 'on' : 'off'}</span>.</p>
            <h2 className="py-5">Edit Profile</h2>
            <EditProfile />
            <h1>Recevied Ratings</h1>
            <StarRatings
              rating={this.state.rating}
              starRatedColor="blue"
              changeRating={this.changeRating}
              numberOfStars={6}
              name='rating'
            />

            <h2 className="py-5">Wallet :{this.state.wallet}</h2>
            <Button className="my-5 btn btn-primary btn-sm" color="danger">
              Log Out
                  </Button>
          </Container>
        </div>

        <DemoFooter />
      </>
    );
  }
}

export default ProfilePage;
