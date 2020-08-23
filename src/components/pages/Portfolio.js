import React from "react";
import Portfolio from "../Portfolio";

function PortfolioPage(props) {
    return (
      <Portfolio {...props.children}/>
      );
  }
  
  export default PortfolioPage;
