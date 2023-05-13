import React from 'react';
import './Category_sec1.css';
import logo_sec1 from '../../img_category/sec1_img_category/category_logo_sec1.png'
const CategorySec1 = () => {
  return (
    <section className="category_sec1">
      <div className="container">
        <div className="category_sec1_content">
          <div className="category_sec1_content_left">
            <img src={logo_sec1} alt=""/>
          </div>
          <div className="category_sec1_content_right">
            <h1>OFFROAD SERIES</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/>
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <br/>
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              <br/>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla <br/>
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia <br/>
              deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySec1;
