import React from "react";
import "./style.css";
// import projects from "./projects.json";


function Portfolio(projects) {
    return (
        <div id="box" className="row">
        <section className="portfolio col-lg-6 col-md-6 col-sm-12">
            <h4> {projects.project} </h4>
            <article className="container port">
                <img className="project" src={projects.src} alt={projects.alt}/>
                <div>
                <link href={projects.depl}> Deployed link: {projects.depl}</link>
                </div>
                <div>
                    <link href={projects.git}> GitHub link: {projects.git}</link>
                </div>
            </article> 
        </section>
        </div>
    );
}

export default Portfolio;