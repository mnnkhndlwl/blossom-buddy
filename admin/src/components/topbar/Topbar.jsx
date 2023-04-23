import React from "react";
import "./topbar.css";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Blossom Admin</span>
        </div>
        <div className="topRight">
        <Link to="/products" className="link">
            <li className="sidebarListItem">
              <img src="./img/store.png" className="sidebarIcon" />
              Products
            </li>
          </Link>
          <Link to="/users" className="link">
            <li className="sidebarListItem">
              <img src="./img/users.png" className="sidebarIcon" />
              Users
            </li>
          </Link>
          <Link to="/newproduct" className="link">
            <li className="sidebarListItem">
              <img src="./img/plant.png" className="sidebarIcon" />
              New Product
            </li>
          </Link>
          <div className="topbarIconContainer">
            <img src="./img/notification.png" />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <img src="./img/language.png" />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <img src="./img/settings.png" />
          </div>
          <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
