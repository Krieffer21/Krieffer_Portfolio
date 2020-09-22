import React from "react";
import Portfolio from "../Portfolio";

function PortfolioPage(props) {
  return (
    <div className="row">
      <div className="col-lg-6 col-md-4 col-sm-12">
        <Portfolio {...props.children} />
      </div>
    </div>
  );
}

export default PortfolioPage;
