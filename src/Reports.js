import React from "react";
import Employees from "./Employees";
import "./Reports.css";
import Trends from "./Trends";

const Reports = ({ employees, trends }) => {
  return (
    <div className="main">
      <div className="main-heading">
        <a href="#">Home</a>
        <span>/</span>
        <a href="./Reports.js">Reports & Insights</a>
      </div>
      <div className="main-body">
        <Trends trends={trends} />
        <Employees employees={employees} />
      </div>
    </div>
  );
};

export default Reports;
