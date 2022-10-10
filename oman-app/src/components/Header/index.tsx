import React from "react";

//navigation
import { NavLink } from "react-router-dom";

//pages
import { routeMain as routeMainPage } from "pages/MainPage";
import { routeMain as routeAbout } from "pages/About";
import { routeMain as routeBlog } from "pages/Blog";
import { routeMain as routeCatalog } from "pages/Catalog";
import { routeMain as routeMounting } from "pages/Mounting";
import { routeMain as routePlacePurchase } from "pages/PlacePurchase";
import { routeMain as routeToClients } from "pages/ToClients";
import { routeMain as routeToPartners } from "pages/ToPartners";

//components
import TitleNavigation from "components/TitleNavigation";
import Basket from "components/Basket";

//styles
import "./styles.scss";

const Header = () => {
  const logoImage = require("assets/logo.png");

  return (
    <header className="header">
      <div className="container">
        <div className="navigationPanel">
          <div className="logo">
            <NavLink to={routeMainPage()} activeClassName={"linkactive"}>
              <img src={logoImage} title="logo" alt="logo"></img>
            </NavLink>
          </div>
          <form action="#">
            <select className="selectMenu" size={1} name="city">
              <option value="Киев">Киев</option>
              <option value="Минск">Минск</option>
              <option value="Москва">Москва</option>
              <option value="Варшава">Варшава</option>
              <option value="Вильнюс">Вильнюс</option>
            </select>
          </form>
          <nav>
            <ul>
              <NavLink to={routeCatalog()} activeClassName={"linkactive"}>
                Каталог товаров
              </NavLink>
              <NavLink to={routePlacePurchase()} activeClassName={"linkactive"}>
                Где купить
              </NavLink>
              <NavLink to={routeMounting()} activeClassName={"linkactive"}>
                Монтаж
              </NavLink>
              <NavLink to={routeBlog()} activeClassName={"linkactive"}>
                Блог
              </NavLink>
              <NavLink to={routeToClients()} activeClassName={"linkactive"}>
                Клиентам
              </NavLink>
              <NavLink to={routeToPartners()} activeClassName={"linkactive"}>
                Парнетрам
              </NavLink>
              <NavLink to={routeAbout()} activeClassName={"linkactive"}>
                О нас
              </NavLink>
            </ul>
          </nav>
          <div className="language">
            <p>Укр</p>
            <p className="rus">Рус</p>
          </div>
        </div>
      </div>
      <div className="searchPanel">
        <div className="container">
          <TitleNavigation />
          <div className="inputSearch">
            <input className="input" type="text"></input>
            <button className="btn"></button>
          </div>
          <a className="phoneCall" href="tel:+380442949117">
            +38 (044) 294 91 17
          </a>
          <div className="mail">
            <a href="mailto:support.ua">support@oman.ua</a>
          </div>
          <div className="like"></div>
          <Basket />
        </div>
      </div>
    </header>
  );
};

export default Header;
