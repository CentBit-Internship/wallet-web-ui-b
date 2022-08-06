import { Container } from "./components/styles/Container.styled";
import Sidebar from "./components/SideBarComponent/SideBar";
import { Dashboard } from "./components/styles/Dashboard.styled";
import Totals from "./components/Totals";
import Header from "./components/HeaderComponent/Header";

function App() {
  return (
    <>
      <Container>
        <Sidebar />
        <Dashboard>
          <Header />
          <Totals />
        </Dashboard>
      </Container>
    </>
  );
}

export default App;
