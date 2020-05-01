import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage: "url(" + require("assets/img/restaurantLanding.jpg") + ")"
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1>Snack Time </h1>
            <h3>Online Grocery & Food Store Order and Delivery</h3>
            <br />
            <Button
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="btn-round mr-1"
              color="neutral"

              outline
            >
              <i className="nc-icon nc-lock-circle-open" />
              Login
            </Button>
            <Button className="btn-round" color="neutral" type="button" outline>
              <i className="nc-icon nc-single-02" />
              Register Now
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;
