import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Details() {
  const { id } = useParams()

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

    var product = products.find(q => q.id == id);

  return (
    <>
    <h1>Detail</h1>
    <h2>Product Name: {product?.name}</h2>
    <h2>Order: {product?.unitsOnOrder}</h2>
    <h2>Stock: {product?.unitsInStock}</h2>

    </>
  )
}

export default Details