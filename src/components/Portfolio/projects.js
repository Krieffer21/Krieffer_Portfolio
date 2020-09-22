import React from "react";
import "./style.css";
import Container from "../Container"


function Portfolio(props) {
    return (
        <div className="portfolio">
                <div className="card d-flex">
                    <img className="project" alt={props.alt} src={props.src} />
                    <div className="card-body">
                        <h5 className="card-title">{props.project}</h5>
                        <p className="card-text aboutpro">{props.about}</p>
                        <a href={props.depl} class="btn btn-primary linkbtns">Deployed link</a>
                        <a href={props.git} class="btn btn-primary linkbtns">GitHub link</a>
                </div>
            </div>

            {/* <div className="contact">
                <Container>
                    <div className="row">
                        <section className="portfolio col-lg-6">
                            <h4> {props.project} </h4>
                            <article className="port d-flex">
                                <img className="project" alt={props.alt} src={props.src} />
                                <div className="aboutpro">{props.about}</div>
                                <a className="linkbtns" type="submit" href={props.depl}> <button className="btn-links">Deployed link</button></a>
                                <a className="linkbtns" type="submit" href={props.git}> <button className="btn-links">GitHub link</button></a>
                            </article>
                        </section>
                    </div>
                </Container>
            </div> */}

        </div>


    );
}

export default Portfolio;
