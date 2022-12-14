import React from "react";
import "../styles/DepositFiat.css";
import Sidebar from "../components/Sidebar";
import TextField from "@mui/material/TextField";

const DepositAmount = () => {
  return (
    <div>
      <div className="depositFiatContainer">
        <Sidebar />
        <div className="fiatbox">
          <div className="depositfiat">
            <h5 style={{ textAlign: "center" }}>
              How much would you like to deposit
            </h5>

            <div className="Currency">
              <div className="price-input">
                <input></input>
              </div>
            </div>
            <button>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositAmount;
