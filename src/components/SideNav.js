import React from "react";
import {  Menu, MenuItem, SidebarContent } from "react-pro-sidebar";
import { Link } from "react-router-dom";




const SideNav = () => {
  return (
    <div>
     
        <Menu iconShape="square">
          <MenuItem
            className="Sidebar__Content"
            >
            Home
            <Link to="" />
          </MenuItem>
        </Menu>
     
    </div>
  );
};

export default SideNav;
