import React from "react";
import Portfolio from "../Portfolio";

function PortfolioPage(props) {
  return (
    <div className="container">
      <div className="row ">
        {/* <div className="col-lg-6 col-md-10 col-sm-12 w-100"> */}

            <Portfolio {...props.children} />
          </div>
        </div>
      //  </div>

  );
}

export default PortfolioPage;
