import React from "react";
import Portfolio from "../Portfolio";

function PortfolioPage(props) {
  return (
          <div className="container-fluid">

    <div className="row justify-content-md-center">
        <div className="col-lg-6 col-md-10 col-sm-12">
          <Portfolio {...props.children} />
        </div>
      </div>
     </div>
  );
}

export default PortfolioPage;
