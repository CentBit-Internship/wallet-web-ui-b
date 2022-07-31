import { Container } from "./components/styles/Container.styled";
import { Sidebar } from "./components/styles/Sidebar.styled";
import { Dashboard } from "./components/styles/Dashboard.styled";
import Totals from "./components/Totals";

function App() {
  return (
    <>
      <Container>
        <Sidebar>
          <h1>Sidebar</h1>
        </Sidebar>
        <Dashboard>
          <Totals />
        </Dashboard>
      </Container>
    </>
  );
}

export default App;
