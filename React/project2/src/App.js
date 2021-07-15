import React from 'react';
import './App.css';
import MyComp from './comp/MyComp';


function App() {
  // let asd = {1:50,2:88,3:50,4:62}
  return (
    <div className="App">
      <MyComp age={12}  firstName ="Doe,"lastName = "Jane"  hairColor="Black"/>
      <MyComp age={12}  firstName ="Smith,"lastName = "John"  hairColor="Brown"/>
      <MyComp age={12}  firstName ="Fillmore,"lastName = "Millard"  hairColor="Brown"/>
      <MyComp age={12}  firstName ="Smith,"lastName = "Maria"  hairColor="Brown"/>
    </div>
  );
}

export default App;
