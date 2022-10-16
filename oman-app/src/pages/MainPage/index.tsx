import React from "react";

import { useState } from "react";

//routes
import routeMain from "./routes";

//components
import BlockLink from "components/BlockLink";

//styles
import "./styles.scss";

const MainPage = () => {
  const arrowDown = require("assets/arrowDown.png");

  const [show, setShow] = useState(false);

  return (
    <div className="mainPage">
      <h1> MainPage</h1>
      <section className="aboutUsText">
        <div className="container">
          <h2>Про OMAN</h2>
          <div className="text">
            <p>
              Один из европейских лидеров в отрасли чердачных лестниц — польское
              предприятие OMAN. Все их производство на 100% находится в Польше,
              в небольшом городке Рацибуж, расположенном на границе с Чехией на
              территории, большая часть которой покрыта лесами. Оттуда в
              основном и заготавливается экологически чистая древесина для
              производства изделия.
            </p>
            <p className={!show ? "secondPart" : ""}>
              Все изделия из древесины, производимые на предприятиях Оман, имеют
              специальный международный европейский сертификат FSC. Что отличает
              высококачественные лестницы на чердак, выпускаемые корпорацией
              ОМАN, от других компаний? Прежде всего, это ассортимент, который
              можно разделить на группы по следующим характерным особенностям:
            </p>
            {show ? (
              <p className="thirdPart">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi sint quo quam voluptatibus ea aliquam repellat mollitia
                corporis deserunt blanditiis expedita distinctio iusto, vero
                eaque hic molestiae? Modi, placeat omnis! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Eligendi sint quo quam
                voluptatibus ea aliquam repellat mollitia corporis deserunt
                blanditiis expedita distinctio iusto, vero eaque hic molestiae?
                Modi, placeat omnis! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Eligendi sint quo quam voluptatibus ea aliquam
                repellat mollitia corporis deserunt blanditiis expedita
                distinctio iusto, vero eaque hic molestiae? Modi, placeat omnis!
              </p>
            ) : null}
          </div>
          <div className="showText" onClick={() => setShow(!show)}>
            <p> Читать полностью</p>
            <img
              className={show ? "arrowUp" : ""}
              src={arrowDown}
              title="arrow"
              alt="arrow"
            ></img>
          </div>
        </div>
      </section>
      <BlockLink />
    </div>
  );
};

export { routeMain };
export default MainPage;
