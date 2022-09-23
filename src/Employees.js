import React from "react";
import "./Employees.css";
import EmployeesTable from "./EmployeesTable";

const Employees = ({ employees }) => {
  return (
    <div className="employees-card">
      <h2>Employees</h2>
      <EmployeesTable className="table" employees={employees} />
    </div>
  );
};

export default Employees;
