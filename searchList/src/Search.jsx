import React, {useState} from 'react'

function Search(){

    const products = ["laptop", "Phone", "Tablet", "Headphones", "Camera"];
    const [search, setSearch] = useState("")

    function handleSetSearch(event){
        setSearch(event.target.value)
    }

    const filteredItems = products.filter((p) => p.toLowerCase().includes(search.toLowerCase()));

    return(
        <div>
            <input type="text" onChange={handleSetSearch}/>
            <ol>
                {products.map((product, index) => <li key={index}>{product}</li>)}
            </ol>
            <ol>
                {filteredItems.map((product, index) => <li key={index}>{product}</li>)}
            </ol>
        </div>
    );
}

export default Search