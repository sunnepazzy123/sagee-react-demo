import Navbar from "./Navbar";
import "./App.css";
import Reports from "./Reports";
import { useEffect, useState } from "react";
import axios from "axios";

const host = "https://json-server-runner.herokuapp.com";

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [trends, setTrends] = useState([]);

  useEffect(()=> {

    dataSource();
    
  }, []);

  const dataSource = async () => {
    const { data: employeeList } = await axios.get(`${host}/employees`);
    const { data: trendList } = await axios.get(`${host}/trends`);
    setEmployees(employeeList);
    setTrends(trendList);
  }

  return (
    <div className="app">
      <Navbar />
      <Reports employees={employees} trends={trends} />
    </div>
  );
};

export default App;
