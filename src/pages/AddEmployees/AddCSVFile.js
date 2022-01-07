import React, { useState } from "react";
import { parse } from "papaparse";

const AddCSVFile = () => {
  const initialCSVvalue = [
    {
      firstName: "",
      lastName: "",
      email: "",
    },
  ];
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
  return (
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
  );
};

export default AddCSVFile;
