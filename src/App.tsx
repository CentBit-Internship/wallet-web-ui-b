import {Container} from "./components/styles/Container.styled";
import {Sidebar} from "./components/styles/Sidebar.styled";
import {Dashboard} from "./components/styles/Dashboard.styled";

function App() {
  return (
    <>
    <Container>
      <Sidebar>
        <h1>Hello</h1>
      </Sidebar>
      <Dashboard>
        <h1>Hi</h1>
      </Dashboard>
    </Container>
    </>
  );
}

export default App;
