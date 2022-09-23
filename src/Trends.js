import React from "react";
import "./Trends.css";
import PieChart from "react-pie-graph-chart";

const Trends = ({ trends }) => {
  return (
    <div className="trends-card">
      <h3>Why do you create startup ?</h3>
      <p>Trends</p>
      {trends && <PieChart data={trends} />}
    </div>
  );
};

export default Trends;
