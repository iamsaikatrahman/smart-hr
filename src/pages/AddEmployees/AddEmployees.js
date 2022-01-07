import React from "react";
import { Container } from "react-bootstrap";
import NavComponent from "../../components/NavComponent";
import addEmployee from "../../images/addEmployee.png";
import Footer from "../../shared/Footer";
import AddCSVFile from "./AddCSVFile";
import AddEmployeeForm from "./AddEmployeeForm";

const AddEmployees = () => {
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
            <AddEmployeeForm />
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
