
import React, { useEffect, useState } from 'react'

function Restaurant() {
    let [pizza_pro1 , setProducts0] = useState([]);
    const getProduct = async () => {
        let response0 = await fetch ("https://forkify-api.herokuapp.com/api/search?q=pizza");
        let data0 = await response0.json();
        setProducts0 (data0.recipes);
    }

    useEffect (
        ()=> {
            getProduct();
        }, []
    )
  return (

    <>
    <h2 className=' fs-3 bg-success text-white text-center'>Pizza section</h2>
     <div className='row'>
        {
            pizza_pro1.map ((pizza) => {
                return (
                    <div className='col-md-4 mb-3' key={pizza.recipe_id}>
                        <div className='card'>
                            <img className='w-25' src={pizza.image_url} alt={pizza.title} />
                            <div className='card-body'>
                                <h5 className='card-title'>{pizza.title}</h5>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </div>
    </>

   
  )
}

export default Restaurant