import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
// import Nav from './components/Nav';
import Welcome from './components/Welcome';
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
          
          {/* <Route path="/tasks" element={<Tasks />} />
          <Route path="/nftlisting" element={<ListNft />} />
          <Route path="/mint" element={<Content />} /> */}
        </Routes>

     
 
      </div>

    </Router>
  );
}


export default App;
