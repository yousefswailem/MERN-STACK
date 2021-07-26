import './App.css';
import Luke from './components/Luke';

function App() {
  return (
    <div className="App">
     <Luke path="/:name/:id"/>
    </div>
  );
}

export default App;
