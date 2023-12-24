import React from 'react';
import heroImage from "./heroImage.jpg";
import "./Middle.css";

const Middle = () => (
  <section className="bg4">
    <div className="container3">
      <div className="column-left3">
        <p>🛸 Collaborate with Us</p>
        <h1>organize an event with dev dojo</h1>
        <a href="https://twitter.com/DevDojo_"><button class="cssbuttons-io">
            <span>
            <svg viewBox="0 0 24 24">
            <path fill="currentColor" d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"></path>
            </svg> 
            Follow Us on Twitter</span>
        </button></a>
      </div>
    </div>
  </section>
);

export default Middle;
