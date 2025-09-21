

function Button(){

    function myButton(){
        alert("Welcome Back My Boy")
    }

    return(
        <button onClick={myButton}>Click Me</button>
    );
}

export default Button