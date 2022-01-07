import React, { useState } from "react";
import { parse } from "papaparse";
import axios from "axios";

const AddCSVFile = () => {
  const [highlighted, setHighlighted] = useState(false);
  const [csvFile, setCsvFile] = useState();

  const processCSV = (str, delim = ",") => {
    const headers = str.slice(0, str.indexOf("\n")).split(delim);
    const rows = str.slice(str.indexOf("\n") + 1).split("\n");

    const newArray = rows.map((row) => {
      const values = row.split(delim);
      const eachObject = headers.reduce((obj, header, i) => {
        obj[header] = values[i];
        return obj;
      }, {});
      return eachObject;
    });

    const filterarray = newArray.filter((item) => {
      const regex =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      return (
        regex.test(item.email) === true &&
        item.firstName !== "" &&
        item.lastName !== ""
      );
    });

    axios
      .post("http://localhost:8080/api/employees/addManyEmployee", filterarray)
      .then((res) => {
        if (res.data.length !== 0) {
          alert("Employee Addedd Successfully");
        }
      });
  };

  const handleCSVFormSubmit = (e) => {
    e.preventDefault();
    const file = csvFile;
    const reader = new FileReader();
    reader.onload = function (e) {
      const text = e.target.result;
      processCSV(text);
    };
    reader.readAsText(file);
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
      <div>
        <form onSubmit={handleCSVFormSubmit} className="mb-3">
          <input
            type="file"
            accept=".csv"
            onChange={(e) => {
              setCsvFile(e.target.files[0]);
            }}
          />
          <br />
          <input type="submit" value="Submit" className="mt-2" />
        </form>
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
              axios
                .post(
                  "http://localhost:8080/api/employees/addManyEmployee",
                  output
                )
                .then((res) => {
                  if (res.data.length !== 0) {
                    alert("Employee Addedd Successfully");
                  }
                });
            });
          }}
        >
          DROP HERE
        </div>
      </div>
    </div>
  );
};

export default AddCSVFile;
