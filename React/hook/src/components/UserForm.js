import React from 'react';
    
    
const UserForm = props => {
    
    
    const onChange = (e) => {
        props.setInputs({
            ...props.inputs,
        [e.target.name]:e.target.value
        
        })
    };

    return (   
        <form onSubmit = { onChange }>
        <div>
            <label htmlFor="firstname">Firstname</label>
            <input type="text" onChange={ onChange } name="firstname"/>
        </div>
        <div>
            <label>Lastname</label>
            <input type="text" onChange={onChange} name="lastname"  />
        </div>
        <div>
            <label>Email</label>
            <input type="email" onChange={onChange}  name= "email" />
        </div>
        <div>
            <label>Password</label>
            <input type="password" onChange={onChange} name= "password" />
        </div>
        <div>
            <label>Confirm Password</label>
            <input type="password" onChange={onChange} name= "confirmpassword" />
        </div>
        <input type="submit" value="Create User" />
        </form>
        
        );


}
    
export default UserForm;
