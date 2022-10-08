import React from "react";

//for route

import { Route, Switch, Redirect } from "react-router-dom";

//pages
import MainPage, { routeMain as routeMainPage } from "pages/MainPage";
import About, { routeMain as routeAbout } from "pages/About";
import Blog, { routeMain as routeBlog } from "pages/Blog";
import Catalog, { routeMain as routeCatalog } from "pages/Catalog";
import Mounting, { routeMain as routeMounting } from "pages/Mounting";
import PlacePurchase, {
  routeMain as routePlacePurchase,
} from "pages/PlacePurchase";
import ToClients, { routeMain as routeToClients } from "pages/ToClients";
import ToPartners, { routeMain as routeToPartners } from "pages/ToPartners";

//components
import Header from "components/Header";
import Footer from "components/Footer";

//styles
import "./styles.scss";

const AppContent = () => {
  return (
    <div className="mainWrapper">
      <Header />
      <main>
        <Switch>
          <Route exact path={routeMainPage()} component={MainPage}></Route>
          <Route exact path={routeAbout()} component={About}></Route>
          <Route exact path={routeBlog()} component={Blog}></Route>
          <Route exact path={routeCatalog()} component={Catalog}></Route>
          <Route exact path={routeMounting()} component={Mounting}></Route>
          <Route
            exact
            path={routePlacePurchase()}
            component={PlacePurchase}
          ></Route>
          <Route exact path={routeToClients()} component={ToClients}></Route>
          <Route exact path={routeToPartners()} component={ToPartners}></Route>
          <Redirect
            to={{
              pathname: routeMainPage(),
            }}
          />
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default AppContent;
