import React from  'react';
    
    
const UserForm = (props) => {
    
    
    const createUser = (e) => {
        e.preventDefault();
        props.setInputs({
            ...props.inputs,
            hasBeenSubmitted : true});
    };
    
    const formMessage = () => {
        if( props.inputs.hasBeenSubmitted === true){
	    return "Thank you for submitting the form!";
	} else {
	    return "Welcome, please submit the form";
	}
    
    };


    const errorfirst = () => {
        if( props.inputs.firstname.length < 2 && props.inputs.firstname.length !==0 ){
	    return "should be greater than 2";
	}
    };

    const errorlast = () => {
        if( props.inputs.lastname.length < 2 && props.inputs.lastname.length !==0){
	    return "should be greater than 2";
	}
    };

    const erroremail = () => {
        if( props.inputs.email.length < 2 && props.inputs.email.length !==0 ){
	    return "should be greater than 2";
	}
    };

    const errorpassword = () => {
        if( props.inputs.password.length < 8 && props.inputs.password.length !== 0 ){
	    return "should be greater than 8";
    }
    };

    const errorconpass = () => {
        if(   props.inputs.confirmpassword !== props.inputs.password   &&   props.inputs.confirmpassword.length !== 0){
	    return "confirm password should match with password";
    }  
    };


    const buttonhide = () => {
        if(  props.inputs.password.length < 8){
        return false;
    }

    else if (props.inputs.confirmpassword !== props.inputs.password){
        return false;
    }

    else if (props.inputs.email.length < 2){
        return false;
    }

    else if (props.inputs.lastname.length < 2){
        return false;
    }

    else if (props.inputs.firstname.length < 2){
        return false;
    }
    
    else{
        return <input type="submit" onChange={buttonhide} value="Create User" />;
    }
        
	};
   
        const setinputs = (e) =>{
        props.setInputs({
        ...props.inputs,
        [e.target.name]:e.target.value
        
        });
        }

        
    return (
        <form onSubmit={ createUser }>
            <h3 style={{color:"green"}}>{ formMessage() }</h3>
        <div>
            <label style={{color:"purple"}}>Firstname</label>
            <p style={{color:"red"}}> {errorfirst()}</p>
            <input type="text" onChange={ setinputs } name="firstname"/>
        </div>
        <br/>
        <div>
            <label style={{color:"purple"}}>Lastname</label>
            <p>{<p style={{color:"red"}}> {errorlast()}</p>}</p>
            <input type="text" onChange={setinputs} name="lastname"  />
        </div>
        <br/>
        <div>
            <label style={{color:"purple"}}>Email</label>
            <p style={{color:"red"}}>{erroremail()}</p>
            <input type="email" onChange={setinputs}  name= "email" />
        </div>
        <br/>
        <div>
            <label style={{color:"purple"}}>Password</label>
            <p style={{color:"red"}}>{errorpassword()}</p>
            <input type="password" onChange={setinputs} name= "password" />
        </div>
        <br/>
        <div>
            <label style={{color:"purple"}}>Confirm Password</label>
            <p style={{color:"red"}}>{errorconpass()}</p>
            <input type="password" onChange={setinputs} name= "confirmpassword" />
        </div>
        <br/>
        <p>Fill the Form To Show The Button</p>
        <p>{buttonhide()}</p>
        </form>
        
        
        
    );
}

    
export default UserForm;