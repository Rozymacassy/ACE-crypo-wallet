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
            <h1 className="text-center" >New to Ace?</h1>

            <div className="row connect text-center m-4">
                <div className=" col-md-5 border border-2 import p-5 m-4">
                    <img src="../images/ace-logo.svg" alt="ace-logo" className="w-25 mb-5" />
                    <p className="connect-text">
                        No, I already have a Wallet
                    </p>
                    <p className="connect-text2">
                        Import your existing wallet using your <br/>
                     seed phrase
                    </p>
                    <Link to="/page/Dashboard">
                        <Button variant="primary" size="md" className="mt-3">Import a wallet</Button>
                    </Link>

                </div>
                <div className="col-md-5 border border-2 p-5 m-4 create">
                    <img src="../images/ace-logo.svg" alt="ace-logo" className="w-25 mb-5" />
                    <p className="connect-text">
                        Yes, I'm new
                    </p>
                    <p className="connect-text2">
                        This will create a new wallet <br/>
                        and seed phrase
                    </p>

                    <LinkContainer to="/pages/Dashboard">
                        <Button variant="primary" size="md" className="mt-3">Create a wallet</Button>
                    </LinkContainer>
                </div>
            </div>
        </div>

    );
}

export default connect;