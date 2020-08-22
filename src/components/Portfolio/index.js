import React from "react";
import "./style.css";
// import projects from "./projects.json";
import { Link } from 'react-router-dom';



function Portfolio(projects) {
    return (
        <div id="box" className="row">
        <section className="portfolio col-lg-6 col-md-6 col-sm-12">
            <h4> {projects.project} </h4>
            <article className="container port">
                <img className="project" src={projects.src} alt={projects.alt}/>
                <div>
                <Link> Deployed link: {projects.depl}</Link>
                </div>
                <div>
                    <Link> GitHub link: {projects.git}</Link>
                </div>
            </article> 
        </section>
        </div>
    );
}

export default Portfolio;