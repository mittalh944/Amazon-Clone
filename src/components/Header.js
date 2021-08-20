import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
      />

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav"></div>
      <div className="header__option">
        <span className="header__optionLineone">Hello Guest </span>
        <span className="header__optionLinetwo">Sign in </span>
      </div>

      <div className="header__option">
        <span className="header__optionLineone">return </span>
        <span className="header__optionLinetwo">& Orders </span>
      </div>

      <div className="header__option">
        <span className="header__optionLineone">Your </span>
        <span className="header__optionLinetwo">Prime </span>
      </div>
    </div>
  );
}

export default Header;
