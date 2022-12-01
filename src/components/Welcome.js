import React from "react";
import "../styles/Welcome.css";
import Button from 'react-bootstrap/Button';



const Welcome = () => {
    return (
        <div className="wlc-container">
            <img src="images/ace-logo.svg" alt="ace-logo" />

            <div className="wlc-body">
                <h2 className="wlc">Welcome! to Ace</h2>
                <p className="wlc-para">Let's connect you to the Decentralized web</p>

                <div className="mb-2 mt-5">
                    <Button variant="primary" size="lg">
                        Connect
                    </Button>
                </div>

            </div>
        </div>
    );

}

export default Welcome;