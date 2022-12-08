import React,{useEffect,useState} from "react";
import Sidebar from "../components/Sidebar";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "../styles/DepositFiat.css";
import { Link } from "react-router-dom";

const DepositFiat = () => {
	const [countries, setCountries] = useState("")

	const [error, setError] = useState("");

	useEffect(() => {
    fetch("https://restcountries.com/v2/all?")
      .then((response) => response.json())
      .then((data) => {
							setCountries(data);
							console.log(countries)
				
		
      })
      .catch((err) => {
        setError(err);
      });
  }, [setCountries]);
  const [currency, setCurrency] = useState("");
  const [deposit, setDeposit] = useState("");

  const handleCurrency = (event) => {
    setCurrency(event.target.value);
  };
   const handledeposit = (event) => {
     setDeposit(event.target.value);
   };
  return (
    <div className="depositFiatContainer">
      <Sidebar />
      <div className="fiatbox">
        <div className="depositfiat">
          <h5>How would you like to deposit</h5>
          <p>Choose your preffered method to deposit money into your wallet</p>
          <div className="Currency">
            <p>Currency</p>
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={currency}
                onChange={handleCurrency}>
                <MenuItem value={10}></MenuItem>
                <MenuItem value={10}>USD</MenuItem>
                <MenuItem value={20}>NGN</MenuItem>
                <MenuItem value={30}>EURO</MenuItem>
                <MenuItem value={30}>POUNDS</MenuItem>
                <MenuItem value={30}>YUAN</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="Deposit">
            <p>Deposit With</p>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={deposit}
                label="Age"
                onChange={handledeposit}>
                <MenuItem value={10}></MenuItem>
                <MenuItem value={10}>P2P bank Transfer</MenuItem>
                <MenuItem value={20}>Virtual Crypto card</MenuItem>
              </Select>
            </FormControl>
          </div>
          <Link to="/page/DepositAmount">
            <button>Continue</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DepositFiat;
