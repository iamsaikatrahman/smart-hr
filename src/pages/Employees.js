import React from "react";
import {
  Container,
  InputGroup,
  FormControl,
  Table,
  Button,
} from "react-bootstrap";
import NavComponent from "../components/NavComponent";

const Employees = () => {
  return (
    <>
      <NavComponent />
      <Container>
        <InputGroup className="my-3">
          <FormControl aria-label="Text input with dropdown button" />
          <Button variant="primary" className="fw-bold">
            Search
          </Button>
        </InputGroup>
        <Table striped bordered hover className="my-3">
          <thead>
            <tr>
              <th>Num</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
          </tbody>
        </Table>
        <div className="d-flex justify-content-between">
          <Button variant="outline-primary" className="fw-bold">
            Previous
          </Button>
          <Button variant="outline-primary" className="fw-bold">
            Next
          </Button>
        </div>
      </Container>
    </>
  );
};

export default Employees;
