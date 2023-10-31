import React from 'react'

function Products() {

    const getData = (namee)=> {
        console.log(namee);
    }
  return (
    <>
    
    <div>Products</div>
    <button onClick={()=>getData ("Aman")}>click</button>
    
    </>
    
  )
}

export default Products