import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavComponent from "../../components/NavComponent";
import headerBG from "../../images/home_header_BG.png";
import Footer from "../../shared/Footer";
import HomeAboutUs from "./HomeAboutUs";

const Home = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <div style={{ flex: "1" }}>
        <NavComponent />
        <Container>
          <div className="d-flex flex-column-reverse flex-md-row align-items-center">
            <div className="w-100 text-center text-md-start">
              <h2>Welcome to SmartHR!</h2>
              <p className="my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                dolorum neque ad. Sapiente, cum itaque quo deserunt aut fuga,
                perspiciatis delectus commodi totam voluptas saepe vero qui ex,
                aspernatur distinctio.
              </p>
              <Link to="/employees">
                <Button variant="primary" className="me-3 fw-bold">
                  All Employees
                </Button>
              </Link>
              <Link to="/addemployees">
                <Button variant="outline-primary" className="fw-bold">
                  Add Employees
                </Button>
              </Link>
            </div>
            <div className="w-100">
              <img src={headerBG} className="w-100" alt="" />
            </div>
          </div>
        </Container>
        <HomeAboutUs />
      </div>
      <Footer style={{ positon: "relative", bottom: "0", wdith: "100%" }} />
    </div>
  );
};

export default Home;
