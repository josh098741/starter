

function ProfileCard(props){
    return(
        <div>
            <h1>Hello {props.name}</h1>
            <h1>You are {props.age} years old</h1>
            <h1>Living in the city of {props.city}</h1>
        </div>
    );
}

export default ProfileCard