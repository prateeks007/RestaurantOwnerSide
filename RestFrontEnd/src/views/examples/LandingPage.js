
import React from "react";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  UncontrolledCollapse
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");

    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <IndexNavbar />
      <LandingPageHeader />
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title font-weight-bold">Why everyone loves our meal?</h2>

                <h5 className="description">Eu elit consequat dolor nostrud nisi dolore aliqua adipisicing dolor consectetur. Eiusmod qui veniam id occaecat velit mollit sint dolor. Ullamco sint cupidatat voluptate dolor est non. Nulla do aute aliquip ex qui aliqua adipisicing esse sunt dolor ex sit. Esse excepteur adipisicing sit dolore.
Laborum in officia velit do laboris dolor. Dolore elit officia ex consectetur do voluptate in sit. Nulla culpa ex ullamco ad reprehenderit. Dolor occaecat aliquip aliqua id ut nisi amet deserunt nisi cupidatat ut fugiat enim ipsum.</h5>
                <br />
                <Button
                  className="btn-round"
                  color="secondary"
                  id="toggler"
                >
                  See Details
                </Button>
                <UncontrolledCollapse toggler="#toggler">
                  <Card body inverse style={{ backgroundColor: '#333', marginTop: "30px", borderColor: '#333' }}>
                    <CardBody>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
                      similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
                      dignissimos esse fuga! Minus, alias.
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
                          similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
                          dignissimos esse fuga! Minus, alias.
                        </CardBody>
                  </Card>

                </UncontrolledCollapse>

              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <img src={require("assets/img/convenience.png")} />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Convenient</h4>
                    <p className="description">
                    We do the shopping, the cooking, we make it delicious and we make it healthy. And to make things even better, we deliver right to your doorstep three times per week.
                    </p>
                    <Button className="btn-link" color="secondary" id="toggler1">
                      See more
                    </Button>
                    <UncontrolledCollapse toggler="#toggler1">
                      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                        <CardBody>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
                          similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
                          dignissimos esse fuga! Minus, alias.
                          
                        </CardBody>
                      </Card>

                    </UncontrolledCollapse>
                 
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon ">
                  <img src={require("assets/img/meal.png")} />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Fresh meal plan delivery</h4>
                    <p>
                    We deliver our meals immediately after cooking to ensure you receive the freshest meal possible. And we do so three times a week!
                    </p>
                    <Button className="btn-link" color="secondary" id="toggler2">
                      See more
                    </Button>
                    <UncontrolledCollapse toggler="#toggler2">
                      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                        <CardBody>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
                          similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
                          dignissimos esse fuga! Minus, alias.
                          
                        </CardBody>
                      </Card>

                    </UncontrolledCollapse>
                 
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon ">
                  <img src={require("assets/img/oven.png")} />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Microwaveable containers</h4>
                    <p>
                    All meals are served in microwave-safe BPA-free containers. Simply heat your meals 2 to 3 minutes and enjoy!
                    </p>
                    <Button className="btn-link" id="toggler3" color="secondary" >
                      See more
                    </Button>
                    <UncontrolledCollapse toggler="#toggler3">
                      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                        <CardBody>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
                          similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
                          dignissimos esse fuga! Minus, alias.
                        </CardBody>
                      </Card>

                    </UncontrolledCollapse>

                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon">
                  <img src={require("assets/img/chef.png")} />
                  </div>
                  <div className="description">
                    <h4 className="info-title">5 Star Chef</h4>
                    <p>
                    Enjoy fresh delivered meals specially crafted by our 5-star chefs with over 30 years of experience. Our meal plans change every week and every month, so say goodbye to your boring old meal plan!
                    </p>
                    <Button className="btn-link" id="toggler4" color="secondary">
                      See more
                    </Button>
                    <UncontrolledCollapse toggler="#toggler4">
                      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                        <CardBody>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
                          similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
                          dignissimos esse fuga! Minus, alias.
                        </CardBody>
                      </Card>

                    </UncontrolledCollapse>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section section-dark text-center">
          <Container>
            <h2 className="title">Let's talk about us</h2>
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/download1.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Our Stores</CardTitle>
                        <h6 className="card-category"></h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      Voluptate ut irure et amet occaecat sunt reprehenderit ex amet aute laborum nulla.</p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/download2.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Fast Delivery</CardTitle>
                        <h6 className="card-category"></h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      Ad voluptate aliqua nulla ea enim id anim aliqua adipisicing pariatur eu culpa consequat.</p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/download3.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Top Service</CardTitle>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      Irure officia irure ex enim veniam mollit aliqua nulla non ut ipsum nulla ea.</p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Keep in touch?</h2>
                <Form className="contact-form">
                  <Row>
                    <Col md="6">
                      <label>Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="text" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input
                    placeholder="Tell us your thoughts and feelings...  Work in progress"
                    type="textarea"
                    rows="4"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="danger" size="lg">
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default LandingPage;
