/** @format */

import './App.css';
import BarChart from './components/Activities/BarChart';
import Earnings from './components/Earnings';
import { Container } from './components/Styles/Container.styled';
import { Sidenav } from './components/Styles/Sidenav.styled';
import { Dashboard } from './components/Styles/Dashboard.styled';
import Totals from './components/Totals';
import SalesAnalytics from './components/SalesAnalytics';
import SellingProducts from './components/SellingProducts';
import Sidebar from './components/SideBarComponent/SideBar';
import Header from './components/HeaderComponent/Header';
import barchartData from "./Assets/data/BarData"

function App() {

  return (
    <>
      <Container>
        <Sidenav>
          <Sidebar />
        </Sidenav>
        <Dashboard>
          <Header />
          <Totals />
          <SalesAnalytics />
          <SellingProducts />

          <div className="App">
            <header className="App-header">
              <Earnings />
            </header>
            <div className="customer-activities">
              <BarChart data={barchartData} />
            </div>
          </div>
        </Dashboard>
      </Container>
    </>
  );
}

export default App;
