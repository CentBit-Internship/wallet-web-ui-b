/** @format */

import './App.css';
import BarChart from './components/Activities/BarChart';
import Earnings from './components/Earnings';
import { Container } from './components/styles/Container.styled';
import { Sidenav } from './components/styles/Sidenav.styled';
import { Dashboard } from './components/styles/Dashboard.styled';
import Totals from './components/Totals';
import SalesAnalytics from './components/SalesAnalytics';
import SellingProducts from './components/SellingProducts';
import Sidebar from './components/SideBarComponent/SideBar';
import Header from './components/HeaderComponent/Header';

function App() {
  const barchartData = [
    {
      title: 'Mon',
      value: 50,
    },
    {
      title: 'Tue',
      value: 80,
    },
    {
      title: 'Wed',
      value: 20,
    },
    {
      title: 'Thu',
      value: 30,
    },
    {
      title: 'Fri',
      value: 75,
    },
    {
      title: 'Sat',
      value: 55,
    },
    {
      title: 'Sun',
      value: 35,
    },
  ];

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
