import React from "react";

//routes
import routeMain from "./routes";

//components
import BlockLink from "components/BlockLink";

//styles
import "./styles.scss";

const MainPage = () => {
  return (
    <div className="mainPage">
      <h1> MainPage</h1>
      <BlockLink />
    </div>
  );
};

export { routeMain };
export default MainPage;
