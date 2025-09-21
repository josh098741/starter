import React,{useState} from 'react'

function Counter(){

    const [count, setCount] = useState(0)

    function add(){
        setCount(count => count + 1);
    }

    function reset(){
        setCount(0);
    }

    function minus(){
        setCount(count => count - 1);
    }

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={add}>+</button>
            <button onClick={reset}>Reset</button>
            <button onClick={minus}>-</button>
        </div>
    );
}

export default Counter