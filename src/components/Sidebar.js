import React from 'react'
import '../styles/Sidebar.css'
import { Link } from 'react-router-dom';
import { RiHome5Line } from "react-icons/ri";
import { RiSettingsLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { BiNotification } from "react-icons/bi";
import { SlWallet } from "react-icons/sl";
import { GiLinkedRings } from "react-icons/gi";
import { MdOutlineLiveHelp } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";


const Sidebar = () => {
		return (
      <div>
        {" "}
        <div className="bars sidebar">
          <Link to="/">
            <li className="m-2 nav">
              {" "}
              <RiHome5Line size="20" className="me-2" />
              <a href="">Home</a>{" "}
            </li>
          </Link>

          <li className="m-2 nav">
            <CgProfile size="20" className="me-2" /> Profile
          </li>
          <li className="m-2 nav">
            <BiNotification size="20" className="me-2" />
            Notifications
          </li>
          <li className="m-2 nav">
            <SlWallet size="20" className="me-2" /> Wallet
          </li>
          <li className="m-2 nav">
            <GiLinkedRings size="20" className="me-2" />
            Lend
          </li>
          <li className="m-2  nav">
            <RiSettingsLine size="20" className="me-2" /> Settings
          </li>
          <div className="mt-5 down-nav">
            <li className="m-2 nav">
              <MdOutlineLiveHelp size="20" className="me-2" />
              Help
            </li>
            <li className="m-2 nav">
              <BiLogOut size="20" className="me-2" />
              Logout
            </li>
          </div>
        </div>
      </div>
    );
}

export default Sidebar