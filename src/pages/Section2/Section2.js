import React from 'react';
import './Section2.css';
import {Link} from "react-router-dom";
import sec2_logo from "../../img/section2/category_sec2.png";
import sec2_card_logo1_cart from "../../img/section2/sec2-card_logo1_cart.png";
import sec2_card_logo2_cart from "../../img/section2/sec2-card_logo2_cart.png";
import sec2_card_logo3_cart from "../../img/section2/sec2-card_logo3_cart.png";

const Section2 = () => {
  return (
    <section>
      <div className="container">
        <div className="sec2_content">
          <Link to="category">
            <img src={sec2_logo} alt=""/>
          </Link>
          <h1 className="sec2_cards_h1">News</h1>
          <div className="sec2_cards">
            <div className="sec2_card">
                <img src={sec2_card_logo1_cart} alt=""/>
              <h3>Lorem ipsum</h3>
              <p>Lorem ipsum dolor sit amet, consectetur <br/>
                adipiscing elit, sed do eiusmod tempor <br/>
                incididunt ut labore et dolore magna aliqua...
              </p>
              <button>READ</button>
            </div>
            <div className="sec2_card">
              <img src={sec2_card_logo2_cart} alt=""/>
              <h3>Lorem ipsum</h3>
              <p>Lorem ipsum dolor sit amet, consectetur <br/>
                adipiscing elit, sed do eiusmod tempor <br/>
                incididunt ut labore et dolore magna aliqua...
              </p>
              <button>READ</button>
            </div>
            <div className="sec2_card">
              <img src={sec2_card_logo3_cart} alt=""/>
              <h3>Lorem ipsum</h3>
              <p>Lorem ipsum dolor sit amet, consectetur <br/>
                adipiscing elit, sed do eiusmod tempor <br/>
                incididunt ut labore et dolore magna aliqua...
              </p>
              <button>READ</button>
            </div>
          </div>
          <h1>Subscribe to our newsletter</h1>
          <input placeholder={'Email'} type="text"/> <br/>
          <button>SUBSCRIBE</button>
        </div>
      </div>
    </section>
  );
};

export default Section2;
