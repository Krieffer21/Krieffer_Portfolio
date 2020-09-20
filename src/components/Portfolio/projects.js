import React from "react";
import "./style.css";
import Container from "../Container"


function Portfolio(props) {
    return (
        <div className="container ">

            <div className="row row-cols-2 contact">
                <div className=" col ">
                    <Container>
                        <section className="portfolio">
                            <h4> {props.project} </h4>
                            <article className="container port">
                                <img className="project" alt={props.alt} src={props.src} />
                                <div>{props.about}</div>
                                <Container>
                                    <a className="container" type="submit" href={props.depl}> <button className="btn-links">Deployed link</button></a>
                                    <a className="container" type="submit" href={props.git}> <button className="btn-links">GitHub link</button></a>
                                </Container>
                            </article>
                        </section>
                    </Container>
                </div>
            </div>
        </div>

    );
}

export default Portfolio;
