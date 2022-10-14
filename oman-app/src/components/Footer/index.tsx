import React from "react";

//components

//styles
import "./styles.scss";

const Footer = () => {
  const facebookLogo = require("assets/facebook-logo.png");
  const telegramLogo = require("assets/telegram-logo.png");
  const youtubeLogo = require("assets/youtube-logo.png");
  const logoImage = require("assets/logoFooter.png");

  return (
    <footer className="footer">
      <div className="container">
        <div className="wraper">
          <div className="logo">
            <img src={logoImage} alt="logo" title="logo"></img>
          </div>
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
        <div className="infoBlock">
          <a className="phoneCall" href="tel:+380442949117">
            +38 (044) 294 91 17
          </a>
          <a href="mailto:support@oman.ua">support@oman.ua</a>
          <p className="workTime">Пн-Пт, 9.00 - 18:00</p>
        </div>
        <div className="aboutUs">
          <h3>Информация о компании</h3>
          <ul>
            <li>О нас</li>
            <li>Контакты</li>
          </ul>
        </div>
        <div className="toClients">
          <h3>Покупателям</h3>
          <ul>
            <li>Оплата</li>
            <li>Доставка</li>
            <li>Возврат</li>
            <li>Купить</li>
            <li>Монтаж</li>
          </ul>
        </div>
        <div className="toPartners">
          <h3>Партнерам</h3>
          <ul>
            <li>Строителям</li>
            <li>Диллерам</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
