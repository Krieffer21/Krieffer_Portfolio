import React from "react";
import "./style.css";

function Portfolio(props) {
    return (
        <div className="portfolio">
            <div className="card port col-lg-6 col-md-10 col-sm-12">
                <img className="project" alt={props.alt} src={props.src} />
                <div className="card-body">
                    <h5 className="card-title">{props.project}</h5>
                    <p className="card-text aboutpro">{props.about}</p>
                    <a href={props.depl} className="btn btn-primary linkbtns btn-links">Deployed link</a>
                    <a href={props.git} className="btn btn-primary linkbtns btn-links">GitHub link</a>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
