// import Product from './component/Products';
import './App.css';
import { Router } from '@reach/router';
import Main from './view/Main';
import Detail from './view/Detail';



function App(props) {

  return (
    <div className="App">
      <Router>
        <Main path="/api/products/"/>
        <Detail path="/api/products/:id"/>
      </Router>
    </div>
  );
}

export default App;
