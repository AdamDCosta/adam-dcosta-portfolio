import React from "react";
import "./CodeButton.scss";

const CodeButton = (props) => {

  const { buttonText, buttonLink } = props;

  return <a href={buttonLink}><button className="code-button">{buttonText}</button></a> ;
};

export default CodeButton;
