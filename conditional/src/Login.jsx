

function Login(props){
    const welcomeMessage = <h1>Welcome My Boy</h1>
    const notLoggedIn = <h1>Must Login to continue</h1>
    return(
        <div>
            {props.isLoggedIn ? welcomeMessage : notLoggedIn}
        </div>
    );
}

export default Login