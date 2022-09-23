import React from "react";
import Table from "react-bootstrap/Table";
import moment from "moment/moment";

const EmployeesTable = ({ employees }) => {
  return (
    <Table responsive striped bordered hover variant="light" size="sm">
      <thead>
        <tr>
          <th className="table-head">Employee</th>
          <th className="table-head">Last login</th>
          <th className="table-head">Department</th>
          <th className="table-head">Status</th>
          <th> </th>
        </tr>
      </thead>
      {employees &&
        employees.map((employee) => (
          <tbody className="employees-details" key={employee.id}>
            <tr>
              <td>
                <div className="person">
                  <ion-icon
                    style={{
                      fontSize: "25px",
                      position: "relative",
                      bottom: "5px",
                    }}
                    name="person-circle-outline"
                  ></ion-icon>
                  <div className="employee-handle">
                    <h6 style={{ fontSize: "13px" }}>{employee.name}</h6>
                    <p style={{ opacity: "0.7" }}>{employee.email}</p>
                  </div>
                </div>
              </td>
              <td style={{ padding: "30px", lineHeight: "3px" }}>
                <h6 style={{ fontSize: "13px" }}>{employee.lastDay}</h6>
                <p style={{ opacity: "0.7" }}>
                  {moment(employee.lastDay).fromNow()}
                </p>
              </td>
              <td style={{ padding: "30px", fontWeight: "600" }}>
                {employee.department}
              </td>
              {employee.status === "Active" ? (
                <td
                  style={{
                    color: "#3CC13B",
                    padding: "30px",
                    fontWeight: "600",
                  }}
                >
                  {employee.status}
                </td>
              ) : (
                <td
                  style={{ color: "red", padding: "30px", fontWeight: "600" }}
                >
                  {employee.status}
                </td>
              )}
              <td style={{ padding: "30px", fontWeight: "600" }}>
                <ion-icon name="chevron-down-outline"></ion-icon>
              </td>
            </tr>
          </tbody>
        ))}
    </Table>
  );
};

export default EmployeesTable;
