import React from "react";

//styles
import "./styles.scss";

const Logo = (props) => {
  const logoImage = require({props.logoLink});
  return (
    <div className="logo">
      <img src={logoImage} title="logo" alt="logo"></img>
    </div>
  );
};

export default Logo;
