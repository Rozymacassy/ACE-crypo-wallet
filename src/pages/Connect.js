import React from "react";
import "../styles/Connect.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from "react-router-dom";
// import Dashboard from '../pages/Dashboard'


const connect = () => {
    return (
      <div className=" container m-5">
        <h1 className="text-center">LEND FROM ACE</h1>

        <div className="row connect text-center m-4">
          <div className=" col-md-5 border border-2 import p-5 m-4">
            <img
              src="../images/ace-logo.svg"
              alt="ace-logo"
              className="w-25 mb-5"
            />
            <p className="connect-text">Connect your wallet</p>
            <p className="connect-text2">
              A wallet system that allows you send <br />
              and recieve tokens without stress
            </p>
            <Link to="/page/Wallet">
              <Button variant="primary" size="md" className="mt-3">
                Connect to Ace Wallet
              </Button>
            </Link>
          </div>
          <div className="col-md-5 border border-2 p-5 m-4 create">
            <img
              src="../images/ace-logo.svg"
              alt="ace-logo"
              className="w-25 mb-5"
            />
            <p className="connect-text">Yes, I'm new</p>
            <p className="connect-text2">
              This will create a new wallet <br />
              and seed phrase
            </p>

            <LinkContainer to="/pages/Dashboard">
              <Button variant="primary" size="md" className="mt-3">
                Borrow Ace Token with digital asset as colaterral
              </Button>
            </LinkContainer>
          </div>
        </div>
      </div>
    );
}

export default connect;