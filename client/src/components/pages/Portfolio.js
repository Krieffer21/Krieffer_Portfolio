import React from "react";
import Portfolio from "../Portfolio";

function PortfolioPage(props) {
  return (
    <div className="container-fluid">
      <div className="">
        <Portfolio {...props.children} />
      </div>
    </div>
  );
}

export default PortfolioPage;
