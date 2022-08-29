import React from "react";
import logo from "../images/logo.png";
import bookIcon from "../images/book-icon.png";
import borrowerIcon from "../images/borrower-icon.png";
import issueIcon from "../images/return-icon.png";
import moreIcon from "../images/more-icon.png";
import settingIcon from "../images/setting-icon.png";
import helpIcon from "../images/help.png";

const Header = () => {
  return (
    <>
      <div className="header-content">
        <div className="image-container">
          <img src={logo} alt="Logo" />
        </div>
        <div className="text-container">
          <h1>Dolkha Multi Sectoral Technical Institution </h1>
          <h4>Charikot 05, Dolkha, Nepal</h4>
        </div>
      </div>
      <div className="nav-bar">
        <div className="nav-items">
          <p style={{ textTransform: "uppercase" }}>Quick Access</p>
        </div>
        <div className="nav-items">
          <div className="icon-container">
            <img src={bookIcon} alt="Books and items" />
          </div>
          <p>Books & Item</p>
        </div>
        <div className="nav-items">
          <div className="icon-container">
            <img src={borrowerIcon} alt="Borrower" />
          </div>
          <p>Borrower</p>
        </div>
        <div className="nav-items">
          <div className="icon-container">
            <img src={issueIcon} alt="Issue & Return" />
          </div>
          <p>Issue & Return </p>
        </div>
        <div className="nav-items">
          <div className="icon-container"></div>
          <p></p>
        </div>
        <div className="nav-items">
          <div className="icon-container">
            <img src={moreIcon} alt="more" />
          </div>
          <p>More</p>
        </div>
        <div className="nav-items">
          <div className="icon-container">
            <img src={settingIcon} alt="settings" />
          </div>
          <p>Settings</p>
        </div>
        <div className="nav-items">
          <div className="icon-container">
            <img src={helpIcon} alt="Help" />
          </div>
          <p>Help</p>
        </div>
      </div>
    </>
  );
};

export default Header;
