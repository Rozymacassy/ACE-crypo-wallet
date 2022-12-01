import React from "react";
import "../styles/Dashboard.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { RiHome5Line } from 'react-icons/ri';
import { RiSettingsLine } from 'react-icons/ri';
import { CgProfile } from 'react-icons/cg';
import { BiNotification } from 'react-icons/bi';
import { SlWallet } from 'react-icons/sl';
import { GiLinkedRings } from 'react-icons/gi';
import { MdOutlineLiveHelp } from 'react-icons/md';
import { BiLogOut } from 'react-icons/bi';

import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const dashboard = () => {
    return (

        <div className="container-fluid">

            <div className="row mt-5">

                <div className=" col-md-3 mb-3 ">

                    <div className="sidebar">
                        <li className="m-2 nav"> <RiHome5Line size="20" className="me-2" /><a href="">Home</a>  </li>
                        <li className="m-2 nav"><CgProfile size="20" className="me-2" /> Profile</li>
                        <li className="m-2 nav"><BiNotification size="20" className="me-2" />Notifications</li>
                        <li className="m-2 nav"><SlWallet size="20" className="me-2" /> Wallet</li>
                        <li className="m-2 nav"><GiLinkedRings size="20" className="me-2" />Bridge</li>
                        <li className="m-2  nav"><RiSettingsLine size="20" className="me-2" /> Settings</li>
                    </div>
                    <div className="mt-5 down-nav">
                        <li className="m-2 nav"><MdOutlineLiveHelp size="20" className="me-2" />Help</li>
                        <li className="m-2 nav"><BiLogOut size="20" className="me-2" />Logout</li>
                    </div>
                </div>


                <div className="col-md-9 board">

                    <div className="top">
                        <p>Total Balance</p>
                        <h2>NGN 500,000,000</h2>
                    </div>
                    <div className="fiat-btn">

                    </div>

                    <div className="row">
                        <div className="col-md-3 m-2 buy">
                            <img src="../images/buy.png" alt="crypyo" className="w-100" />
                            <p>Buy Cryptocurrency</p>
                        </div>
                        <div className="col-md-3 m-2 sell">
                            <img src="../images/sell.png" alt="crypyo" className="w-100" />
                            <p>Sell Cryptocurrency</p>

                        </div>
                        <div className="col-md-3 m-2 loan">
                            <img src="../images/loan.png" alt="crypyo" className="w-100" />
                            <p>Loan Cryptocurrency</p>

                        </div>

                    </div>

                </div>
            </div>
        </div>

    );
}

export default dashboard;