import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Container,
  InputGroup,
  FormControl,
  Table,
  Button,
  Spinner,
} from "react-bootstrap";
import NavComponent from "../components/NavComponent";
import Footer from "../shared/Footer";

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [displayEmployees, setDisplayEmployees] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const pagelimit = 5;
  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/api/employees/allEmployees?page=${page}&&pagelimit=${pagelimit}`
      )
      .then((res) => {
        setEmployees(res.data.employees);
        setDisplayEmployees(res.data.employees);
        const count = res.data.count;
        const pageNumber = Math.ceil(count / pagelimit);
        setPageCount(pageNumber);
        setIsLoading(false);
      });
  }, [page]);
  const handleSearch = (e) => {
    const searchText = e.target.value;
    const matchedEmployees = employees.filter((employee) =>
      employee.firstName.toLowerCase().includes(searchText.toLowerCase())
    );
    setDisplayEmployees(matchedEmployees);
  };
  const checkNumber = (page) => {
    if (page > pageCount - 1) {
      return 0;
    }
    if (page < 0) {
      return pageCount - 1;
    }
    return page;
  };
  const nextBtn = () => {
    setPage((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevBtn = () => {
    setPage((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <div style={{ flex: "1" }}>
        <NavComponent />
        <Container>
          <InputGroup className="my-3">
            <FormControl
              placeholder="Search Employee by First Name..."
              onChange={handleSearch}
            />
          </InputGroup>
          {isLoading ? (
            <div className="d-flex justify-content-center">
              <Spinner animation="border" />
            </div>
          ) : (
            <>
              <Table striped responsive bordered hover className="my-3">
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {displayEmployees.map((employee) => (
                    <tr key={employee.id}>
                      <td>{employee.firstName}</td>
                      <td>{employee.lastName}</td>
                      <td>{employee.email}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <div className="d-flex justify-content-between">
                <Button
                  variant="outline-primary"
                  className="fw-bold"
                  onClick={prevBtn}
                >
                  Previous
                </Button>
                <Button
                  variant="outline-primary"
                  className="fw-bold"
                  onClick={nextBtn}
                >
                  Next
                </Button>
              </div>
            </>
          )}
        </Container>
      </div>
      <Footer style={{ positon: "relative", bottom: "0", width: "100%" }} />
    </div>
  );
};

export default Employees;
