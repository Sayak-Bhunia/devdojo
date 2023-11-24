import React from 'react';
import heroImage from "./heroImage.jpg";

const HeroSection = () => (
  <section className="bg">
    <div className="container">
      <div className="column-left1">
        <h1>i'm sayak.</h1>
        <h2>a frontend wizard & open sourcerer.</h2>
        <p>wanna catch up?, click the button below.</p>
        <a href="mailto:sbhunia2903@gmail.com"><button className="learn">join discord<i className='bx bxl-discord-alt bx-md'></i></button></a>
      </div>
    </div>
  </section>
);

export default HeroSection;