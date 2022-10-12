import React from "react";

//components

import Logo from "components/Logo";

//styles
import "./styles.scss";

const Footer = () => {
  const facebookLogo = require("assets/facebook-logo.png");
  const telegramLogo = require("assets/telegram-logo.png");
  const youtubeLogo = require("assets/youtube-logo.png");

  return (
    <footer className="footer">
      <div className="container">
        <div className="wraper">
          <Logo logoLink:any="assets/logo.png" />
          <div className="socialNetwork">
            <a href="" className="socialNetwork__item">
              <img src={facebookLogo} title="facebook" alt="logo"></img>
            </a>
            <a href="" className="socialNetwork__item">
              <img src={youtubeLogo} title="youtube" alt="logo"></img>
            </a>
            <a href="" className="socialNetwork__item">
              <img src={telegramLogo} title="telegram" alt="logo"></img>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
