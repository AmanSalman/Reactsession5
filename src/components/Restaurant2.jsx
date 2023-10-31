import React, { useEffect, useState } from 'react'

function Restaurant2() {
    let [pro2 , setProducts2] = useState([]);
    const getProduct2 = async () => {
        let response2 = await fetch ("https://forkify-api.herokuapp.com/api/search?q=Salad");
        let data2 = await response2.json();
        
        setProducts2 (data2.recipes);
    }

    useEffect (
        ()=> {
            getProduct2();
        }, []
    )
  return (

    <>
    <h2 className=' fs-3 bg-success text-white text-center'>Salad section</h2>
     <div className='row'>
        {
            pro2.map ((pro) => {
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

export default Restaurant2