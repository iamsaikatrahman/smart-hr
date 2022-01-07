import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavComponent from "../components/NavComponent";
import aboutUs from "../images/aboutus.png";

const AboutUs = () => {
  return (
    <>
      <NavComponent />
      <Container>
        <div className="d-flex flex-column-reverse flex-md-row align-items-center">
          <div className="w-100">
            <h3>About Us</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
              repellendus iure ipsa qui at. Ut, quisquam veritatis iure
              inventore placeat numquam maxime perferendis vitae repellendus
              modi. Consectetur eaque est quia!
            </p>
            <Link to="/employees">
              <Button variant="primary" className="me-3 fw-bold">
                All Employees
              </Button>
            </Link>
          </div>
          <div className="w-100">
            <img src={aboutUs} className="w-100" alt="" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default AboutUs;
