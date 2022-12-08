import React from "react";
import Sidebar from "../components/Sidebar";
import "../styles/BuyCrypto.css"

const BuyCrypto = () => {
  return (
    <div className="CryptoPurchase">
      <Sidebar />
      <div className="Purchase-container">
        <div className="blankdiv"></div>
        <div className="purchase">
          <button>buy</button>
          <button>sell</button>
        </div>
      </div>
    </div>
  );
};

export default BuyCrypto;
