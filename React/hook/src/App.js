import './App.css';
import Result from './components/Result';
import UserForm from './components/UserForm';
import React, { useState } from 'react';


function App() {
  const [state,setState] = useState({
    firstname :"",
    lastname :"",
    email :"",
    password :"",
    confirmpassword :"",
  })
    return (
    <div className="App">
      <UserForm inputs={state} setInputs={setState} />
      <Result data={state}/>
    </div>
  );
}

export default App;
