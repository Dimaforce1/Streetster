import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";
import header_logo from '../../img/header/header_logo.png'
import main_search_logo from '../../img/header/main_search_logo.png'
import header_content_right_bucket_menu_bucket_logo from '../../img/header/header-content-right-bucket-menu_bucket_logo.png'
import header_content_right_bucket_menu_menu_logo from '../../img/header/header-content-right-bucket-menu_menu_logo.png'
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <div className="header-content-left">
            <Link to="/">
            <img src={header_logo} alt=""/>
            </Link>
          </div>
          <div className="header-content-main">
            <img src={main_search_logo} alt=""/>
            <input type="text"/>
          </div>
          <div className="header-content-right-bucket-menu">
            <img src={header_content_right_bucket_menu_bucket_logo} alt=""/>
            <img src={header_content_right_bucket_menu_menu_logo} alt=""/>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
