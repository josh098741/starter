import React, {useState} from 'react'

function Form(){

    const [name, setName] = useState("")

    function handleName(event){
        setName(event.target.value)
    }

    return(
        <div>
            <h1>Hello {name}</h1>
            <input type="text" placeholder="Enter your name" onChange={handleName}/>
        </div>
    );
}

export default Form