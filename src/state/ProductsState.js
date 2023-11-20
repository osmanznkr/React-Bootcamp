import React, { useState } from 'react'
import { products } from '../data/products'

function ProductsState() {

    const  [newProducts, setnewProducts] = useState(products);


     const deleteProduct = (id) => {

        var isDeleted = window.confirm("Emin misiniz ?")

        if (isDeleted) {
            var filteredProducts = newProducts.filter(q => q.id !== id)
            setnewProducts(filteredProducts)
        }
    }

    function showAll() {
        setnewProducts(products);
    }

    function criticStock() {
        setnewProducts(products.filter((item) => item.unitsInStock < 5));
    }

    function cheap(){
        setnewProducts(products.filter((item) => item.unitPrice < 15))
    }
    function expensive(){
        setnewProducts(products.filter((item) => item.unitPrice > 50))
    }


  return (
    <>
        <div style={{display:'flex', flexDirection:'column', gap: 20, marginLeft: 20, marginTop: 10}} className='container'>
            <div style={{display:'grid', gridTemplateColumns: 'auto auto', width: 400, gap: 10}}>
                <button onClick={criticStock}>Show Critic Stock</button>
                <button onClick={showAll}>Show All</button>
                <button onClick={cheap}>Cheap</button>
                <button onClick={expensive}>Expensive</button>
            </div>

            <div>
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
                            newProducts.map((product, index) => {
                                return (
                                     <tr key={index}>
                                        <td>{product.id}</td>
                                        <td>{product.name}</td>
                                        <td>{product.unitPrice}</td>
                                        <td>{product.unitsInStock}</td>
                                        <td><button onClick={() => deleteProduct(product.id)}>Delete</button></td>
                                     </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    
    </>
  )
}

export default ProductsState