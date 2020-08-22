import React from "react";
import "./style.css";


function Portfolio (props) {
    return (

        <div id="box" className="row">
        <section className="portfolio col-lg-6 col-md-6 col-sm-12">
            <h4> {props.project} </h4>
            <article className="container port">
                <img className="project" src={props.src} alt={props.alt}/>
                <div>
                 Deployed link: {props.depl}
                </div>
                <div>
                     GitHub link: {props.git}
                </div>
            </article> 
        </section>
        </div>
    );
}

export default Portfolio;
