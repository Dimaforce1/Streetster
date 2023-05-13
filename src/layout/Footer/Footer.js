import React from 'react';
import './Footer.css';
import footer_logo from '../../img/header/footer_logo.png'
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer_content">
          <img src={footer_logo} alt=""/>
          <div className="footer_content_left">
            <ul>
              <li><span className={"footer_content_right_span"}>Cetegories</span></li>
              <li>ROAD SERIES</li>
              <li>STREET SERIES</li>
              <li>MOUNTAIN SERIES</li>
            </ul>
            <ul>
              <li><span className={"footer_content_right_span"}>Info</span></li>
              <li>About us</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="footer_content_right">
            <ul>
              <li><span className={"footer_content_right_span"}>Cetegories</span></li>
              <li>ROAD SERIES</li>
              <li>STREET SERIES</li>
              <li>MOUNTAIN SERIES</li>
            </ul>
            <ul>
              <li><span className={"footer_content_right_span"}>Info</span></li>
              <li>About us</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
