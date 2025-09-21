

function List(){
    const fruits = ["Apple", "Mango", "Pineapple", "Banana"];

    return(
        <div>
            <ul>
                {fruits.map((fruit, index) => <li key={index}>{fruit}</li>)}
            </ul>
        </div>
    );
}

export default List