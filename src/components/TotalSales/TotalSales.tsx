/** @format */

import './TotalSales.css';
import { AiFillTag } from 'react-icons/ai';
import { MdOutlineTrendingUp } from 'react-icons/md';

function TotalSales() {
  return (
    <>
      <main className="total-sales-container">
        <div className="ts-top">
          <span className="ts-tag">
            <AiFillTag className="ts-tag-icon" />
          </span>
          <h1 className="total-sales">Total Sales</h1>
        </div>
        <div className="ts-bottom">
          <h1 className="ts-amount">$4,876.98</h1>
          <span className="ts-arrow-up">
            <MdOutlineTrendingUp className="ts-arrow-icon" />
          </span>
        </div>
      </main>
    </>
  );
}

export default TotalSales;
