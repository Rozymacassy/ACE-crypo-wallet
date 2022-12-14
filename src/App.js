import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Connect from './pages/Connect';
import Welcome from './pages/Welcome';
import Dashboard from './pages/Dashboard';
import Wallet from './pages/Wallet';
import DepositFiat from './pages/DepositFiat';
import DepositAmount from './pages/DepositAmount';
import BuyCrypto from './pages/BuyCrypto';
import SellCrypto from './pages/SellCrypto';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Nav /> */}
        {/* <Home /> */}

        <Routes>
          
          <Route exact path="/page/Home" element={<Home />} />
          <Route exact path="/Welcome" element={<Welcome />} />
          <Route exact path="/page/Connect" element={<Connect />} />
          <Route exact path="/page/Dashboard" element={<Dashboard />} />
          <Route exact path="/page/Wallet" element={<Wallet />} />
          <Route exact path="/page/DepositFiat" element={<DepositFiat />} />
          <Route exact path="/page/DepositAmount" element={<DepositAmount />} />
          <Route exact path="/page/BuyCrypto" element={<BuyCrypto />} />
          <Route exact path="/page/SellCrypto" element={<SellCrypto />} />
          <Route exact path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
