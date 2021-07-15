import React, { Component } from 'react';
    
class MyComp extends Component{
    constructor(props) {
        super(props);
        // const asd = { age:45, firstName :"Doe," ,lastName : "Jane" , hairColor:"Black"} ;
        this.state = {
            age: this.props.age
          };
        
    }
        IncrementItem = () => {
             this.setState({age:this.state.age +1});
          }


        render() {
            return(
                <div>
                <h1>{ this.props.firstName } { this.props.lastName }</h1>
                <p>Age: { this.state.age }</p>
                <p>Hair Color: { this.props.hairColor }</p>
                <button onClick = { this.IncrementItem }>Click to increment by 1</button>
                </div>
            );
        }
    }

    
export default MyComp;