/** @format */

import TotalSales from './TotalSales/TotalSales';
import TotalProfit from './TotalProfits/TotalProfit';
import TotalOrders from './TotalOrders/TotalOrders';
import { TotalContainer } from '../components/styles/TotalContainer.styled';

function Totals() {
  return (
    <TotalContainer>
      <TotalSales />
      <TotalProfit />
      <TotalOrders />
    </TotalContainer>
  );
}

export default Totals;
