/** @format */

import { Container } from './components/styles/Container.styled';
import { Sidenav } from './components/styles/Sidenav.styled';
import { Dashboard } from './components/styles/Dashboard.styled';
import Totals from './components/Totals';
import SalesAnalytics from './components/SalesAnalytics';

function App() {
  return (
    <>
      <Container>
        <Sidenav></Sidenav>
        <Dashboard>
          <Totals />
          <SalesAnalytics />
        </Dashboard>
      </Container>
    </>
  );
}

export default App;
