import React, { useEffect, useState } from 'react'

function Product() {
    let [products , setProducts] = useState([]);
    const getProducts = async () => {
        let response = await fetch ("https://fakestoreapi.com/products");
        let data = await response.json();
        setProducts (data);
    }

    useEffect (
        ()=> {
            getProducts();
        }, []
    )
  return (
    <div className='row'>
        {
            products.map (product => {
                return (
                    <div className='col-md-4' key={product.id}>
                        <div className='card'>
                            <img className='w-100' src={product.image} alt={product.name} />
                            <div className='card-body'>
                                <h5 className='card-title'>{product.title}</h5>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Product