import React, {useState} from 'react'

function Form(){

    const [name, setName] = useState("");
    const [names, setNames] = useState([])

    function handleName(event){
        setName(event.target.value)
    }

    function addName(){
        if(name.trim() !== ""){
            setNames([...names, name])
            setName("")
        }
    }

    function removeName(index){
        const updatedNames = names.filter((_,i) => i !== index);
        setNames(updatedNames)
    }

    return(
        <div>
            <input type="text" value={name} placeholder="Enter Name" onChange={handleName}/>
            <button onClick={addName}>Add Name</button>
            <ul>
                {names.map((name,index) => <li key={index} onClick={() => removeName(index)}>{name}</li>)}
            </ul>
        </div>
    );
}

export default Form