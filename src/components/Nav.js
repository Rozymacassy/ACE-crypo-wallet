import React from "react";
import "./Nav.css";
import { HiBars3 } from 'react-icons/hi2';
import { useState } from "react";
import { Link } from 'react-router-dom';


const Nav = () => {

    const [ExpandNav, setExpandNav] = useState(false)

    return (
        <nav className="homeNav">
            <div className="logobox">
                <img src="images/ace-logo.svg" alt="logo" className="logo" />
            </div>
            <button className="bars"
                onClick={() => {
                    setExpandNav(!ExpandNav);

                }}
            >
                <HiBars3 size={28} color='rgb(1, 1, 41)' />
            </button>

            <div
                className={
                    ExpandNav ? "expand" : "nav-menu"
                }
            >
                <ul className="list">
                    <li className="listitems"><a href="#">Home</a> </li>
                    <li className="listitems"><a href="#">About</a>  </li>
                    <li className="listitems"><a href="#">Features</a>  </li>
                    <li className="listitems"><a href="#">FAQ</a>  </li>
                    <li className="listitems"><a to href="#documentation">Documentation</a>  </li>

                    <button className="cryptoBtn">My Crypto</button>
                </ul>
            </div>


        </nav>
    );
};
export default Nav;
