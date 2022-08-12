/** @format */
import { TableContainer } from './Styles/TableContainer.styled';
import Table from '../components/Table/Table';

function SellingProducts() {
  return (
    <TableContainer>
      <h1>Top Selling Products</h1>
      <Table />
    </TableContainer>
  );
}

export default SellingProducts;
