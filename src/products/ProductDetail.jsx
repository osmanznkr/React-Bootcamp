import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../data/products'

function ProductDetail() {

    const { id } = useParams()

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

export default ProductDetail