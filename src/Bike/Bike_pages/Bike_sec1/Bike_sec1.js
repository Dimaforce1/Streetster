import React from 'react';
import './Bike_sec1.css';
const BikeSec1 = () => {
  return (
    <section>
      <div className="bike_sec1_content">
        <div className="bike_sec1_content_left">
          <img src="" alt=""/>
        </div>
        <div className="bike_sec1_content_right">
          <h1>STREETSTER <br/>
            NATHAN</h1>
          <h2>500 $</h2>
          <h3>Color: black</h3>
          <div className="bike_choice_color_bike">
            <div className="bike_choice_color_bike_black"></div>
            <div className="bike_choice_color_bike_blue"></div>
            <div className="bike_choice_color_bike_red"></div>
          </div>
          <h4>Base: 54” (Height 5'9-6'0)</h4>
          <div className="bike_choice_base_wheels">
            <div className="bike_choice_base_wheels_54">
              <div className="bike_choice_base_wheels_54_choice"></div>
              <div className="bike_choice_base_wheels_54"><p>54</p></div>
            </div>
            <div className="bike_choice_base_wheels_57">
              <div className="bike_choice_base_wheels_57_choice"></div>
              <div className="bike_choice_base_wheels_57"><p>57</p></div>
            </div>
          </div>
          <h5>Additional accessories</h5>
          <div className="bike_additional_accessories">
            <div className="bike_additional_accessories_left">
              <img src="" alt=""/>
              <p>Octane Helmet <br/>
                50 $
              </p>
              <div className="bike_additional_accessories_left_button">
                <button>+</button>
                <button>-</button>
              </div>
            </div>
            <div className="bike_additional_accessories_right">
              <img src="" alt=""/>
              <p>Canyon Shield <br/>
                        50 $
              </p>
              <div className="bike_additional_accessories_right_button">
              <button>+</button>
              <button>-</button>
              </div>
            </div>
            <div className="bike_add_to_cart">
              <h6>Total:                                550 $ </h6>
              <button>ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BikeSec1;
