import React from "react";

//styles
import "./styles.scss";

const Logo = (logoLink: string) => {
  const logoImage = require(logoLink);
  return (
    <div className="logo">
      <img src={logoImage} title="logo" alt="logo"></img>
    </div>
  );
};

export default Logo;
