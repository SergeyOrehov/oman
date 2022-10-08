import React from "react";

//components
import Header from "components/Header";
import Footer from "components/Footer";

//styles
import "./styles.scss";

const AppContent = () => {
  return (
    <div className="mainWrapper">
      <Header />
      <main> Main</main>
      <Footer />
    </div>
  );
};

export default AppContent;
