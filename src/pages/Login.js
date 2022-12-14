import React from 'react'
import "../styles/Login.css"
import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';



const Login = () => {
return (
    <>
     
        <div className="form-box">
          <div className="header-form">
            <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{fontSize:"110px"}}></i></h4>
            <div className="image">
            </div>
          </div>
          <div className="body-form">
            <form>
                <h3>Welcome to Ace Decentralized Wallet</h3>
                    <div className="input-group mb-3">
                    

                    <input type="text" className="form-control" placeholder="Username" />
                </div>
        
                <Link to="/page/Home">
                <Button variant="primary" size="md">LOGIN
                </Button>

                </Link>

            </form>
          
          </div>
        </div>
        
</>

);
}

export default Login