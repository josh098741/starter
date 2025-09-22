import React,{useState} from 'react'

function TodoList(){

    const [name, setName] = useState();
    const [names, setNames] = useState([])

    function handleSetName(event){
        setName(event.target.value)
    }
    
    function addName(){
        setNames([...names, name]);
        setName("");
    }

    function deleteItem(index){
        const updatedList = names.filter((_,i) =>i !== index);
        setNames(updatedList)
    }
    return(
        <div>
            <input type="text" value={name} onChange={handleSetName}/>
            <button onClick={addName}>Add</button>
            <div>
                <ol>
                    {names.map((name,index) => 
                        <li key={index}>
                            <span>{name}</span><button onClick={() => deleteItem(index)}>del</button>
                        </li>
                    )}
                </ol>
            </div>
        </div>
    );
}

export default TodoList