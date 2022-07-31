/** @format */

import './TotalOrders.css';
import { SiMicrosoftacademic } from 'react-icons/si';
import { MdOutlineTrendingUp } from 'react-icons/md';

function TotalOrders() {
  return (
    <>
      <main className="total-orders-container">
        <div className="to-top">
          <span className="to-tag">
            <SiMicrosoftacademic className="to-order-icon" />
          </span>
          <h1 className="total-orders">Total Orders</h1>
        </div>
        <div className="to-bottom">
          <h1 className="to-amount">1056</h1>
          <span className="to-arrow-up">
            <MdOutlineTrendingUp className="to-arrow-icon" />
          </span>
        </div>
      </main>
    </>
  );
}

export default TotalOrders;
