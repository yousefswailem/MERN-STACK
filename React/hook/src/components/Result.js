import React from "react";


const Result = props => {
    
    return(
        <div>
        <p>Firstname: {props.data.firstname}</p>
        <p>Lastname: {props.data.lastname}</p>
        <p>Email: {props.data.email}</p>
        <p>Password: {props.data.password}</p>
        <p>ConfirmPassword: {props.data.confirmpassword}</p>
        </div>
    );
}


export default Result;