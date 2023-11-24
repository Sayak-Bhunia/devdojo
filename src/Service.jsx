import React from 'react';
import "./Service.css";
import motto from "./motto.gif";

const service = () => (
  <section className="bg3">
    <div className="container4">
      <div className="column-right4">
        <img src={motto} alt="illustration" className="image" />
      </div>
      <div className="column-left4">
        <p>🍀 Get Started</p>
        <h1>we are a proud community of tech alchemists</h1>
        <div className="button-container">
          <a href="https://discord.gg/zhcGYBmdff"><button className="learn">Join Discord<i className='bx bxl-discord-alt bx-md' ></i></button></a>
          <a href="https://chat.whatsapp.com/IbclcFQUMvkAYG0srM4K8q"><button className="learn">Join Whatsapp<i className='bx bxl-whatsapp bx-md' ></i></button></a>
        </div>
      </div>
    </div>
  </section>
);

export default service;