import React,{useState} from 'react'

function Toggle(){
    const [dark, setDark] = useState(false)

    return(
        <div style={{background: dark ? "black":"white",color: dark ? "white":"black", minHeight: "100vh"}}>
            <h2>{dark ? "Dark Mode": "Light Mode"}</h2>
            <button onClick={() => setDark(!dark)}>{dark ? "Light Mode": "Dark Mode"}</button>
        </div>
    );
}

export default Toggle