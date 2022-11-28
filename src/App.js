import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  return (

    <Router>
      <div className="App">
        <Nav />
        <Home />
 
      </div>

    </Router>
  );
}


export default App;
