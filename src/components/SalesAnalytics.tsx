/** @format */
import '../components/Graph/Graph.css'
import { GraphContainer } from './styles/GraphContainer.styled';
import Graph from '../components/Graph/Graph';

function SalesAnalytics() {
  return (
    <GraphContainer>
      <h1>Sales Analytics</h1>
      <select
        name="monthly"
        className="monthly-dropdown"
      >
        <option>Monthly</option>
        <option>Jan</option>
        <option>Feb</option>
        <option>Mar</option>
        <option>Apr</option>
        <option>May</option>
        <option>Jun</option>
        <option>Jul</option>
      </select>
      <Graph />
    </GraphContainer>
  );
}

export default SalesAnalytics;
