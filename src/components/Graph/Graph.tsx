/** @format */
import { options, series } from './GraphData';
import ReactApexChart from 'react-apexcharts';
import './Graph.css';

function Graph() {
  return (
    <>
      <div className="graph">
        <ReactApexChart
          className="graph-container"
          options={options}
          series={series}
          type="line"
          height={220}
        />
      </div>
    </>
  );
}

export default Graph;
