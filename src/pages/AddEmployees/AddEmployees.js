import axios from "axios";
import React, { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";

import NavComponent from "../../components/NavComponent";
import addEmployee from "../../images/addEmployee.png";
import Footer from "../../shared/Footer";
import AddCSVFile from "./AddCSVFile";

const AddEmployees = () => {
  const initialValue = {
    firstName: "",
    lastName: "",
    email: "",
  };

  const [formInfo, setFormInfo] = useState(initialValue);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newValue = { ...formInfo };
    newValue[field] = value;
    setFormInfo(newValue);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/employees/addSingleEmployee", formInfo)
      .then((res) => {
        if (res.data.id) {
          e.target.reset();
          alert("Employee Addedd Successfully");
        }
      });
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <div style={{ flex: "1" }}>
        <NavComponent />
        <Container>
          <div className="d-flex flex-column-reverse flex-md-row align-items-center">
            <div className="w-100 text-center text-md-start">
              <h3 className="fw-bold">Add New Employee!</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptates, fugiat veritatis. Ad incidunt saepe nesciunt vel
                similique maxime error aspernatur fuga, deserunt mollitia, cum
                repellendus exercitationem ducimus. Possimus, blanditiis
                aliquid!
              </p>
            </div>
            <div className="w-100">
              <img src={addEmployee} className="w-100" alt="" />
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row py-5">
            {/* Employee Add Form */}
            <div className="w-100">
              <Card className="p-3 border-0">
                <Form onSubmit={handleFormSubmit} className="text-start">
                  <Form.Group className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="firstName"
                      placeholder="Enter First Name"
                      onBlur={handleOnBlur}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="lastName"
                      placeholder="Enter Last Name"
                      onBlur={handleOnBlur}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      required
                      type="email"
                      name="email"
                      placeholder="Enter Email Address"
                      onBlur={handleOnBlur}
                    />
                  </Form.Group>
                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100 fw-bold"
                  >
                    Submit
                  </Button>
                </Form>
              </Card>
            </div>
            {/* CSV File Drop Here */}
            <AddCSVFile />
          </div>
        </Container>
      </div>
      <Footer style={{ position: "relative", bottom: "0", width: "100%" }} />
    </div>
  );
};

export default AddEmployees;
