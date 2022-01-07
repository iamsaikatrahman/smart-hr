import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import aboutusBG from "../../images/about-banner.jpg";
import qualityIcon from "../../images/quality.png";
import trustIcon from "../../images/trust.png";

const HomeAboutUs = () => {
  return (
    <>
      <Container className="py-5">
        <Row xs={1} md={2} className="g-4">
          <Col>
            <img src={aboutusBG} style={{ width: "100%" }} alt="" />
          </Col>
          <Col>
            <h6 className="text-primary fw-bold">ABOUT US</h6>
            <h3 className="fw-bold my-3">
              Our SmartHR For <br className="d-none d-md-block" /> Better
              Bussiness
            </h3>
            <p>
              Our Technology is the sum of any techniques, skills, methods, and
              processes used in the production of goods or services or in the
              accomplishment of objectives, such as scientific investigation.
            </p>
            <Row>
              <Col>
                <div className="d-flex align-items-center">
                  <img
                    src={qualityIcon}
                    style={{
                      width: "50px",
                      height: "50px",
                      marginRight: "10px",
                    }}
                    alt=""
                  />
                  <h6 className="fw-bold">
                    Qualifid <br /> Consultaion
                  </h6>
                </div>
                <p>
                  In business, engineering, and manufacturing, quality or high
                  quality.
                </p>
              </Col>
              <Col>
                <div className="d-flex align-items-center">
                  <img
                    src={trustIcon}
                    style={{
                      width: "50px",
                      height: "50px",
                      marginRight: "10px",
                    }}
                    alt=""
                  />
                  <h6 className="fw-bold">
                    Trusted Since <br /> 2018
                  </h6>
                </div>
                <p>
                  A trust or corporate trust is a large grouping of business
                  interests market power.
                </p>
              </Col>
            </Row>
            <Link to="/aboutus">
              <Button variant="primary" className="px-3">
                Discover More
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeAboutUs;
