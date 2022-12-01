import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
// import Nav from './components/Nav';
import Connect from './pages/Connect';
import Welcome from './pages/Welcome';
import Dashboard from './pages/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (

    <Router>
      <div className="App">
        {/* <Nav /> */}
        {/* <Home /> */}

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Welcome" element={<Welcome />} />
          <Route exact path="/page/Connect" element={<Connect />} />
          <Route exact path="/page/Dashboard" element={<Dashboard />} />




        </Routes>



      </div>

    </Router>
  );
}


export default App;
