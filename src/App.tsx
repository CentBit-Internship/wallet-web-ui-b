import React from "react";
import "./App.css";
import BarChart from "./components/Activities/BarChart";
import Earnings from "./components/Earnings";

function App() {
  const barchartData = [
    {
      title: "Mon",
      value: 50,
    },
    {
      title: "Tue",
      value: 60,
    },
    {
      title: "Wed",
      value: 34,
    },
    {
      title: "Thu",
      value: 10,
    },
    {
      title: "Fri",
      value: 37,
    },
    {
      title: "Sat",
      value: 50,
    },
    {
      title: "Sun",
      value: 80,
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <Earnings />
      </header>
      <div className="customer-activities">
        <BarChart data={barchartData} />
      </div>
    </div>
  );
}

export default App;
