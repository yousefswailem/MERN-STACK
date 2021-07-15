import './App.css';
import React, { useState } from 'react';
import UserForm from './component/Userform';

function App() {
  const [state,setState] = useState({
    firstname :"",
    lastname :"",
    email :"",
    password :"",
    confirmpassword :"",
    hasBeenSubmitted: false,
  });
  
  return (
    <div className="App">
      <UserForm inputs={state} setInputs={setState} />
    </div>
  );
}

export default App;
