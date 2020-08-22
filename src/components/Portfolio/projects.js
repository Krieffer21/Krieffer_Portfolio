import React from "react";
import "./style.css";
import Container from "../Container"


function Portfolio (props) {
    return (

        <div id="box" size="lg-6 md-12 sm-12">
        <section className="portfolio ">
            <h4> {props.project} </h4>
            <article className="container port">
                <img className="project" alt={props.alt} src={props.src} />
                <Container>
                 <a className="container" type= "submit" href={props.depl}> Deployed link: {props.depl}</a>

                <a className="container" type= "submit" href={props.git}> GitHub link: {props.git}</a> 
                </Container>
            </article> 
        </section>
        </div>
    );
}

export default Portfolio;
