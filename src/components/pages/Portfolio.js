import React from "react";
import Portfolio from "..Portfolio/";

function Portfolio(props) {
    return (
      <Portfolio {...props.children}
       />
      );
  }
  
  export default Portfolio;
