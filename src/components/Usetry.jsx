import React from 'react'
import { useState } from 'react';
function Usetry() {
    let [age,setAge] = useState (20);
    const changeage = (a)=> {
        setAge(a)
    }
  return (
    <>
    
    <p>age is {age}</p>
    <button onClick={()=>changeage(10)}>click</button>
    </>
    
  )
}

export default Usetry