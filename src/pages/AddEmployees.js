import axios from "axios";
import React, { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { parse } from "papaparse";
import NavComponent from "../components/NavComponent";
import addEmployee from "../images/addEmployee.png";

const AddEmployees = () => {
  const initialValue = {
    firstName: "",
    lastName: "",
    email: "",
  };
  const initialCSVvalue = [
    {
      firstName: "",
      lastName: "",
      email: "",
    },
  ];
  const [formInfo, setFormInfo] = useState(initialValue);
  const [highlighted, setHighlighted] = useState(false);
  const [contacts, setContacts] = useState(initialCSVvalue);
  const handleonCSV = (data) => {
    const nV = [{ ...contacts }];
    nV.firstName = data.firstName;
    nV.lastName = data.lastName;
    nV.email = data.email;
    setContacts(nV);
    handleDropSubmit();
  };
  const handleDropSubmit = () => {
    console.log(contacts);
  };
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
    <>
      <NavComponent />
      <Container>
        <div className="d-flex flex-column-reverse flex-md-row align-items-center">
          <div className="w-100 text-center text-md-start">
            <h3 className="fw-bold">Add New Employee!</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptates, fugiat veritatis. Ad incidunt saepe nesciunt vel
              similique maxime error aspernatur fuga, deserunt mollitia, cum
              repellendus exercitationem ducimus. Possimus, blanditiis aliquid!
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
          <div className="w-100 d-flex flex-column flex-md-row align-items-center justify-content-evenly">
            <div className="d-none d-md-block d-flex flex-column align-items-center">
              <div
                style={{
                  width: "3px",
                  height: "100px",
                  marginBottom: "10px",
                  backgroundColor: "lightgray",
                }}
              ></div>
              or
              <div
                style={{
                  width: "3px",
                  height: "100px",
                  marginTop: "10px",
                  backgroundColor: "lightgray",
                }}
              ></div>
            </div>
            <div className="d-md-none d-flex flex-row align-items-center mb-3">
              <div
                style={{
                  width: "50px",
                  height: "5px",
                  marginRight: "10px",
                  backgroundColor: "lightgray",
                }}
              ></div>
              or
              <div
                style={{
                  width: "50px",
                  height: "5px",
                  marginLeft: "10px",
                  backgroundColor: "lightgray",
                }}
              ></div>
            </div>
            <div
              className={`text-center border border-2 p-3 rounded fw-bold w-50 ${
                highlighted ? "border-success" : "border-secondary"
              }`}
              onDragEnter={() => {
                setHighlighted(true);
              }}
              onDragLeave={() => {
                setHighlighted(false);
              }}
              onDragOver={(e) => {
                e.preventDefault();
              }}
              onDrop={(e) => {
                e.preventDefault();
                setHighlighted(false);
                Array.from(e.dataTransfer.files).forEach(async (file) => {
                  if (file.type !== "text/csv") {
                    return alert("Only CSV file is allowed!");
                  }
                  const text = await file.text();
                  const result = parse(text, { header: true });
                  const output = result.data.filter((item) => {
                    const regex =
                      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                    return (
                      regex.test(item.email) === true &&
                      item.firstName !== "" &&
                      item.lastName !== ""
                    );
                  });
                  setContacts((ex) => [...ex, ...output.data]);
                  // output.forEach((data) => {
                  //   const arr = [data.firstName];
                  //   // arr.push(...data.firstName);
                  //   setContacts((data) => [...data]);
                  // });
                  console.log(contacts);
                  // setContacts((existing) => [...existing, ...output.data]);
                  // handleDropSubmit();
                  // setContacts((existing) => [...existing, ...result.data]);
                });
              }}
            >
              DROP HERE
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AddEmployees;
