/** @format */

import './TotalProfit.css';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { BsBarChartFill } from 'react-icons/bs';
import { MdOutlineTrendingDown } from 'react-icons/md';

function TotalProfit() {
  return (
    <>
      <main className="total-profit-container">
        <div className="tp-top">
          <span className="tp-tag">
            <FaLongArrowAltRight className="tp-tag-icon-arrow" />
            <BsBarChartFill className="tp-tag-icon" />
          </span>
          <h1 className="total-profit">Total Profit</h1>
        </div>
        <div className="tp-bottom">
          <h1 className="tp-amount">$762.10</h1>
          <span className="tp-arrow-down">
            <MdOutlineTrendingDown className="tp-arrow-icon" />
          </span>
        </div>
      </main>
    </>
  );
}

export default TotalProfit;
