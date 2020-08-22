import React from "react";
import "./style.css";


function Portfolio (props) {
    return (

        <div id="box" className="row">
        <section className="portfolio col-lg-6 col-md-6 col-sm-12">
            <h4> {props.project} </h4>
            <article className="container port">
                <img className="project" alt={props.alt} src={props.src} />
                <div>
                 <a type= "submit" href={props.depl}> Deployed link: {props.depl}</a>
                </div>
                <div>
                    <a type= "submit" href={props.git}> 
                    GitHub link: {props.git}</a> 
                </div>
            </article> 
        </section>
        </div>
    );
}

export default Portfolio;
