import {useState} from 'react';

function Button(){

    const [showMessage, setShowMessage] = useState(false);

    function myButton(){
            setShowMessage(true)
    }

    return(
        <div>
            <button onClick={myButton}>Click Me</button>
            {showMessage ? <h1>Welcome Back My Boy</h1> : ""}
        </div>
    );
}

export default Button