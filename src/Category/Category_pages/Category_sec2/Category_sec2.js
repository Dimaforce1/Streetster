import React from 'react';
import './Category_sec2.css';
import category_sec2_card_right_logo1 from '../../img_category/sec2_img_category/category_sec2_card_right_logo1.png'
import category_sec2_card_right_logo2 from '../../img_category/sec2_img_category/category_sec2_card_right_logo2.png'
import category_sec2_card_right_logo3 from '../../img_category/sec2_img_category/category_sec2_card_right_logo3.png'
import {Link} from "react-router-dom";
const CategorySec2 = () => {
  return (
    <section>
      <div className="container">
        <div className="category_sec2_cards">
          <div className="category_sec2_card">
            <div className="category_sec2_card_left">
              <div className="category_sec2_card_left_info">
                <h1>STREETSTER <br/>
                  NATHAN</h1>
                <h5>500 $</h5>
                <p>Lorem ipsum dolor sit amet, consectetur <br/>
                  adipiscing elit, sed do eiusmod tempor <br/>
                  incididunt ut labore et dolore magna <br/>
                  aliqua.
                  <br/>
                  Ut enim ad minim veniam, quis nostrud <br/>
                  exercitation ullamco laboris nisi ut aliquip <br/>
                  ex ea commodo consequat. </p>
                <h6>Available colors:</h6>
                <div className="category_sec2_card_left_choice">
                  <div className="category_sec2_card_left_black"></div>
                  <div className="category_sec2_card_left_blue"></div>
                  <div className="category_sec2_card_left_red"></div>
                </div>
                <Link to="bike">
                  <button>buy</button>
                </Link>
              </div>
            </div>
            <div className="category_sec2_card_right">
              <img src={category_sec2_card_right_logo1} alt=""/>
            </div>
          </div>
          <div className="category_sec2_card">
            <div className="category_sec2_card_left">
              <div className="category_sec2_card_left_info">
                <h1>STREETSTER <br/>
                  BAKERSTREET</h1>
                <h5>550 $</h5>
                <p>Lorem ipsum dolor sit amet, consectetur <br/>
                  adipiscing elit, sed do eiusmod tempor <br/>
                  incididunt ut labore et dolore magna <br/>
                  aliqua.
                  <br/>
                  Ut enim ad minim veniam, quis nostrud <br/>
                  exercitation ullamco laboris nisi ut aliquip <br/>
                  ex ea commodo consequat. </p>
                <h6>Available colors:</h6>
                <div className="category_sec2_card_left_choice">
                  <div className="category_sec2_card_left_blue"></div>
                  <div className="category_sec2_card_left_white"></div>
                </div>
                <Link to="bike">
                  <button>buy</button>
                </Link>
              </div>
            </div>
            <div className="category_sec2_card_right">
              <img src={category_sec2_card_right_logo2} alt=""/>
            </div>
          </div>
          <div className="category_sec2_card">
            <div className="category_sec2_card_left">
              <div className="category_sec2_card_left_info">
                <h1>STREETSTER <br/>
                  BROADWAY</h1>
                <h5>500 $</h5>
                <p>Lorem ipsum dolor sit amet, consectetur <br/>
                  adipiscing elit, sed do eiusmod tempor <br/>
                  incididunt ut labore et dolore magna <br/>
                  aliqua.
                  <br/>
                  Ut enim ad minim veniam, quis nostrud <br/>
                  exercitation ullamco laboris nisi ut aliquip <br/>
                  ex ea commodo consequat. </p>
                <h6>Available colors:</h6>
                <div className="category_sec2_card_left_choice">
                  <div className="category_sec2_card_left_yellow"></div>
                  <div className="category_sec2_card_left_red"></div>
                </div>
                <Link to="bike">
                  <button>buy</button>
                </Link>
              </div>
            </div>
            <div className="category_sec2_card_right">
              <img src={category_sec2_card_right_logo3} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySec2;
