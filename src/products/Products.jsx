import React from 'react'
import { products } from '../data/products'
import { Link } from 'react-router-dom'

function Products() {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Unit Price</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>
        {products.map((item) => (
          <tr key={item.id}>
            <td><Link to={`/products/${item.id}`}>{item.id}</Link></td>
            <td>{item.name}</td>
            <td>{item.unitPrice}</td>
            <td>{item.unitsInStock}</td>
          </tr>
        ))}
      </tbody>
    </table>


  )
}

export default Products