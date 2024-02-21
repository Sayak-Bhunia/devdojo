/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";
import Diversion from "./assets/DIVERSION_2K24.jpg";
import HackThisFall from "./assets/HACK_THIS_FALL.jpg";
import Rebase from "./assets/REBASE01.jpg";

const Hackathons = () => {
  return (
    <div className="hackathon-page">
      <div className="item-container">
        {" "}
        {/* REBASE 01 */}
        <div className="item-box">
          <img src={Rebase} alt="Hackathon" className="hackathon-image" />
          <h1>Dev Dojo X Rebase&lt;01&gt;</h1>
          <p className="intro-text">
            📢 Hey Hackers! The wait is over! Registrations for your favorite
            online Hackathon are now open. Join us and unlock your gateway to
            stars! 💫🚀
          </p>
          <p className="register-text">
            Register Now :{" "}
            <a
              href="https://bit.ly/rebase01-devdojo"
              target="_blank"
              rel="noreferrer"
            >
              https://bit.ly/rebase01-devdojo
            </a>{" "}
            ⚡
          </p>
          <p className="query-text">For more queries, visit:</p>
          <p>
            <a
              href="https://www.rebase01.tech/"
              target="_blank"
              rel="noreferrer"
            >
              Rebase&lt;01&gt;
            </a>
          </p>
          <p>
            <a href="/home" target="_blank" rel="noreferrer">
              Dev Dojo
            </a>
          </p>
        </div>
        {/* HACK THIS FALL */}
        <div className="item-box">
          <img src={HackThisFall} alt="Hackathon" className="hackathon-image" />
          <h1>Dev Dojo X HACK THIS FALL</h1>
          <p className="intro-text">
            🥳 Get ready for Hack This Fall's Hybrid Hacktoberfest! Apply now
            for Season 4 and be part of the excitement. Don't miss this
            opportunity to learn, explore, and contribute to Open Source! 🚀🌟
          </p>
          <p className="register-text">
            Register Now :{" "}
            <a
              href="https://hackthisfall.tech/"
              target="_blank"
              rel="noreferrer"
            >
              https://hackthisfall.tech/
            </a>{" "}
            ⚡
          </p>
          <p className="query-text">For more queries, visit:</p>
          <p>
            <a
              href="https://hackthisfall.tech/"
              target="_blank"
              rel="noreferrer"
            >
              HACK THIS FALL
            </a>
          </p>
          <p>
            <a href="/home" target="_blank" rel="noreferrer">
              Dev Dojo
            </a>
          </p>
        </div>
        {/* DIVERSION 2K24 */}
        <div className="item-box">
          <img src={Diversion} alt="Hackathon" className="hackathon-image" />
          <h1>Dev Dojo X DIVERSION 2K24</h1>
          <p className="intro-text">
            📢 Attention everyone! The highly anticipated moment has arrived! 🎉
            Get ready for Diversion 2k24: INDIA'S first AI-powered Hackathon! 🔥
            Secure your spot now and register as fast as possible! 🚀
          </p>
          <p className="register-text">
            Register Now :{" "}
            <a
              href=" https://diversion.tech/register"
              target="_blank"
              rel="noreferrer"
            >
              https://diversion.tech/register
            </a>{" "}
            ⚡
          </p>
          <p className="query-text">For more queries, visit:</p>
          <p>
            <a
              href="https://www.diversion.tech/"
              target="_blank"
              rel="noreferrer"
            >
              DIVERSION 2K24
            </a>
          </p>
          <p>
            <a href="/home" target="_blank" rel="noreferrer">
              Dev Dojo
            </a>
          </p>
        </div>{" "}
      </div>

      <style jsx>{`
        .hackathon-page {
          margin: 0 auto;
          padding: 10px;
        }

        .item-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }

        .item-box {
          width: calc(50% - 20px);
          background-color: #f7f7f7;
          border-radius: 15px;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
          margin: 10px;
          padding: 20px;
          text-align: center;
        }

        .hackathon-image {
          height: auto;
          width: 100%;
          padding: 2px;
          max-width: 400px;
          margin: 0 auto 20px;
          border-radius: 15px;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
        }

        h1 {
          font-size: 24px;
          color: #333;
          margin-bottom: 10px;
        }

        h2 {
          font-size: 20px;
          color: #444;
          margin-top: 30px;
        }

        p {
          font-size: 16px;
          line-height: 1.5;
          color: #666;
          margin: 3px 0;
        }

        a {
          color: #007bff;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }

        @media (max-width: 600px) {
          .item-box {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Hackathons;
