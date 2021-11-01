import React from "react";
import "./CodeButton.scss";

const CodeButton = (props) => {

  const { buttonText } = props;

  return <button className="code-button">{buttonText}</button>;
};

export default CodeButton;
