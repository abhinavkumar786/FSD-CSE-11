import { useState, useEffect } from "react";
const Counter = () => {
    //let count=0;
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Updated count=", count);
    }, [count]);

    function increment() {
        //++count;
        setCount(count + 1);
        console.log("count=", count + 1);
    }

    const decrement = () => {
        //--count;
        setCount(count - 1);
        console.log("count=", count - 1);
    };

    return (
        <div>
            <h1>Counter App</h1>
            <div className="counter">
                <button onClick={increment}>+</button>
                <div>{count}</div>
                <button onClick={decrement}>-</button>
            </div>
            <h1>Updated Count: {count}</h1>
        </div>
    );
};
export default Counter;