/* eslint-disable no-unused-vars */
import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links_div">
            <h3>Emails</h3>
            <a href="mailto:sbhunia2903@gmail.com">
              <p>Sayak Bhunia</p>
            </a>
            <a href="mailto:saketsrivastava1245@gmail.com">
              <p>Saket Srivastava</p>
            </a>
            <a href="mailto:subhraneelsaha799@gmail.com">
              <p>Subhraneel Saha</p>
            </a>
            <a href="mailto:snehangshumahapatra1@gmail.com">
              <p>Snehangshu Mahapatra</p>
            </a>
            <a href="mailto:nathrajarshi25@gmail.com">
              <p>Rajarshi Nath</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h3>Resources</h3>
            <NavLink to="/">
              <p>Open Source</p>
            </NavLink>
            <NavLink to="/Hackathons">
              <p>Hackathons</p>
            </NavLink>
            <NavLink to="/">
              <p>Playlists</p>
            </NavLink>
          </div>
          <div className="sb__footer-links_div">
            <h3>Contact</h3>
            <a href="mailto:devdojo.website@gmail.com">
              <p>Email</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h3>Call Us</h3>
            <a href="tel:+918910636554">
              <p>+918910636554</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h3>Connect With Us</h3>
            <div className="social_media">
              <p>
                <a href="https://github.com/The-Dev-Dojo/">
                  <i className="bx bxl-github bx-md"></i>
                </a>
              </p>
              <p>
                <a href="https://www.linkedin.com/company/99019744/admin/feed/posts/">
                  <i className="bx bxl-linkedin bx-md"></i>
                </a>
              </p>
              <p>
                <a href="https://x.com/DevDojo_/">
                  <i className="bx bxl-twitter bx-md"></i>
                </a>
              </p>
              <p>
                <a href="https://www.instagram.com/devdojotnaf/">
                  <i className="bx bxl-instagram bx-md"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="sb__footer-below">
          <div className="sb__footer-copyright">
            <p>@{new Date().getFullYear()} Dev Dojo. All rights reserved.</p>
          </div>
          <div className="sb__footer-below-links">
            <a href="/">
              <div>
                <p>Terms & Conditions</p>
              </div>
            </a>
            <a href="/">
              <div>
                <p>Privacy Policy</p>
              </div>
            </a>
            <a href="/">
              <div>
                <p>Security</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
