import React from "react";
import "./style.css";

function Portfolio(props) {
    return (
        <div id="box" className="row">
        <section className="portfolio col-lg-6 col-md-6 col-sm-12">
            <h4> Lyrics to Go </h4>
            <article className="container port">
                <img className="project" src="./Images/lyricsTOgo.png" alt="Lyrics to Go App"/>
                <div>
                    <link href="https://krieffer21.github.io/Lyrics-To-Go/"> Deployed link:
                        https://krieffer21.github.io/Lyrics-To-Go/ </link>
                </div>
                <div>
                    <link href="https://github.com/Krieffer21/Lyrics-To-Go"> GitHub link:
                        https://github.com/Krieffer21/Lyrics-To-Go </link>
                </div>
            </article> 
        </section>
        </div>

    );
}

export default Portfolio;