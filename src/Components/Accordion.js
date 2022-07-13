import React, { useState } from "react";
import _ from "lodash";
import App from "../App";

function Accordion(props) {
  const [showContent, setShowContent] = useState(false);

  const handleClick = () => {
    setShowContent((currentState) => !currentState);
  };

  return (
    <div className="App">
      <h1 onClick={handleClick}>{props.heading}</h1>
      {showContent && <h2>{props.content}</h2>}
    </div>
  );
}
export default Accordion;
