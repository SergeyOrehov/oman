import React from "react";

//navigation
import { NavLink } from "react-router-dom";

//components
import { routeMain as routeMainPage } from "pages/MainPage";

//scroll
import { Link, animateScroll as scroll } from "react-scroll";

//styles
import "./styles.scss";

const Footer = () => {
  const facebookLogo = require("assets/facebook-logo.png");
  const telegramLogo = require("assets/telegram-logo.png");
  const youtubeLogo = require("assets/youtube-logo.png");
  const logoImage = require("assets/logoFooter.png");
  const arrowUp = require("assets/arrowUp.png");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="mainFooter">
        <div className="container">
          <div className="wraper">
            <NavLink to={routeMainPage()} activeClassName={"linkactive"}>
              <div className="logo">
                <img src={logoImage} alt="logo" title="logo"></img>
              </div>
            </NavLink>
            <h3>Соц.сети</h3>
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
      </div>
      <div className="copy">
        <div className="container">
          <p> © 2022 Все Права Защищены</p>
          <a href="" className="arrowUp" onClick={scrollToTop}>
            {" "}
            <img src={arrowUp} alt="arrow" title="arrow"></img>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
