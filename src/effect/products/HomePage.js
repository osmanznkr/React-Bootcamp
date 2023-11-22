import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function HomePage() {

    const [products, setproducts] = useState([]);

    useEffect(() => {
    loadProducts();
    console.log('products---->', products)
  }, [])

  const loadProducts = () => {
    axios.get('https://northwind.vercel.app/api/products')
    .then(res => {
      setproducts(res.data)
    })
  }

  const deleteProduct = (id) => {
    var isDelete = window.confirm('Are you sure?');
    if(!isDelete) return;
    axios.delete('https://northwind.vercel.app/api/products/' + id)
    .then(res => {
      loadProducts();
    })
  }

  return (
    <>

    <h1>Product Count: {products.length}</h1>
        <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Unit Price</th>
                            <th>Stock</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product) => {
                                return (
                                     <tr >
                                        <td><Link to={`/products/${product.id}`}>{product.id}</Link></td>
                                        <td>{product.name}</td>
                                        <td>{product.unitPrice}</td>
                                        <td>{product.unitsInStock}</td>
                                        <td><button onClick={deleteProduct}>Delete</button></td>
                                     </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
    </>
  )
}

export default HomePage