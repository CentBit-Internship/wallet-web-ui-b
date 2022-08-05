/** @format */

import './Table.css';
import { Products } from './ProductList';

function Table() {
  return (
    <>
      <table className="table">
        <thead className="table-head">
          <tr className="table-th">
            <th>Product name</th>
            <th>Sold</th>
            <th>Total sales</th>
            <th>Stock status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {Products.map((product) => (
            <tr className="table-td" key={product.id}>
              <td data-label="Product name">
                <img
                  className="product-image"
                  src={product.image}
                  alt={product.name}
                />
                {product.name}
              </td>
              <td data-label="Sold">{product.sold}</td>
              <td data-label="Total sales">{product.price}</td>
              <td
                className={
                  product.status.includes('In Stock')
                    ? 'in-stock'
                    : 'out-of-stock'
                }
                data-label="Stock status"
              >
                {product.status}
              </td>
              <td data-label="Action">{product.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
