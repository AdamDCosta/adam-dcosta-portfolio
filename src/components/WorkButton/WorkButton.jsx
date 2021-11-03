import React from 'react';
import "./WorkButton.scss";

const WorkButton = (props) => {

  const {viewButtonText} = props;

  return (
    <button className="work-button">
      {viewButtonText}
    </button>
  )
}

export default WorkButton
