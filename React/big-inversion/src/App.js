import './App.css';
import PersonCard from './components/PersonCard'

function App() {
  return (
    <div className="App">
      <PersonCard age={12}  firstName ="Doe,"lastName = "Jane"  hairColor="Black"/>
      <PersonCard age={12}  firstName ="Smith,"lastName = "John"  hairColor="Brown"/>
      <PersonCard  age={12}  firstName ="Fillmore,"lastName = "Millard"  hairColor="Brown"/>
      <PersonCard age={12}  firstName ="Smith,"lastName = "Maria"  hairColor="Brown"/>
    
    </div>
  );
}

export default App;
