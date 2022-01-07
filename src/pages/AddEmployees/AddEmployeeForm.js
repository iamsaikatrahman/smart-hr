import React, { useState } from "react";
import axios from "axios";
import { Card, Form, Button } from "react-bootstrap";

const AddEmployeeForm = () => {
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
          <Button variant="primary" type="submit" className="w-100 fw-bold">
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default AddEmployeeForm;
