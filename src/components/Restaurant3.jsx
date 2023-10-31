import React, { useEffect, useState } from 'react'

function Restaurant3() {
    let [pro3 , setProducts3] = useState([]);
    const getProduct3 = async () => {
        let response3 = await fetch ("https://forkify-api.herokuapp.com/api/search?q=Onion");
        let data3 = await response3.json();
        
        setProducts3(data3.recipes);
    }

    useEffect (
        ()=> {
            getProduct3();
        }, []
    )
  return (


    <>
        <h2 className=' fs-3 bg-success text-white text-center'>Onion section</h2>

    <div className='row'>
        {
            pro3.map ((pro) => {
                return (
                    <div className='col-md-4 mb-3' key={pro.recipe_id}>
                        <div className='card'>
                            <img className='w-25' src={pro.image_url} alt={pro.title} />
                            <div className='card-body'>
                                <h5 className='card-title'>{pro.title}</h5>
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

export default Restaurant3