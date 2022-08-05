import "./App.css";
import BarChart from "./components/Activities/BarChart";
import Earnings from "./components/Earnings";
import { Container } from "./components/styles/Container.styled";
import { Sidenav } from "./components/styles/Sidenav.styled";
import { Dashboard } from "./components/styles/Dashboard.styled";
import Totals from "./components/Totals";
import SalesAnalytics from "./components/SalesAnalytics";
import SellingProducts from './components/SellingProducts';

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
    <>
      <Container>
        <Sidenav></Sidenav>
        <Dashboard>
          <Totals />
          <SalesAnalytics />
          <SellingProducts />
        </Dashboard>
        <div className="App">
        <header className="App-header">
          <Earnings />
        </header>
        <div className="customer-activities">
          <BarChart data={barchartData} />
        </div>
      </div>
      </Container>
    </>
  );
}

export default App;
