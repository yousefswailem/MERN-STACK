import './App.css';
import Tab from './components/Tab'


function App() {
  const tabs=[{"label":"Tab 1","content":"Tab 1 content is showing here"},
      {"label":"Tab 2","content":"Tab 2 content is showing here"},
      {"label":"Tab 3","content":"Tab 3 content is showing here"},
    {"label":"Tab 4","content":"Tab 4 content is showing here"}];

  return (
    <div className="App">
      <Tab theTabs={tabs}/>
    </div>
  );

}

export default App;
