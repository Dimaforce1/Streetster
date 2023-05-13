import React from 'react';
import './Section1.css';
const Section1 = () => {
  return (
    <section className={"sec1"}>
      <div className="container">
        <h5 className={'sec1_h5'}>STREETSTER NATHAN</h5>
        <h1 className={'sec1_h1'}>Fast and comfortable <br/>
          Your best choice for city rides</h1>
        <button className={'sec1_button'}>MORE INFO</button>
      </div>
    </section>
  );
};

export default Section1;
