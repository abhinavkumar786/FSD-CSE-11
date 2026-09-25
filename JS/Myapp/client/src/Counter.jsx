import React, { uesEffect} from 'react'
import "./Counter.css"
import {useState} from 'react';

const Counter = () => {
    const [count,setCount]=useState(0);
    const increment=()=>{
        console.log("Count=",count+1);
        setCount(count+1);
    }
    const decrement=()=>{
        console.log("Count=",count-1);
        setCount(count-1);
    }
  return (
    <div>
        <h1>Counter App</h1>
        <div className='counter'>
            <button className="btn"onClick={decrement}>-</button>
            <div className='id'>{count}</div>
            <button className="btn"onClick={increment}>+</button>
        </div>
    </div>
  )
}

export default Counter