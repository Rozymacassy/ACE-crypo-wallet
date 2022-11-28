import React from "react";


const welcome = () => {
    return ( 
        <div className="container">
            <img src="images/ace-logo.svg" alt="ace-logo" />

            <div className="body">
                <h2 className="wlc">Welcome to Ace</h2>
                <p className="wlc-para">Let's connect you to the Decentralized web</p>
                <button className="connet-btn">Connect</button>
            </div>
        </div>
     );
}
 
export default welcome;