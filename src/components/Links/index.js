import React from "react";
import "./style.css";
import Container from "../Container";

function Link() {
    return (
        <div className="row justify-content-md-center">
            <Container className="col-md-6 col-sm-8 col-lg-6">
                <section id="box">
                    <div className="container link">
                        <h3 className="links"> Links </h3>
                        <a className="container" type="submit" href="https://github.com/Krieffer21/">
                            <button className="link-btns">Git Hub Page</button>
                        </a>
                        <a className="container" type="submit" href="https://www.linkedin.com/in/kaelyn-rieffer-b41a811a2/">                        <button className="link-btns">LinkedIn page</button>
                        </a>
                        <a className="container" type="submit" href="https://docs.google.com/document/d/1eRAWQx83EC40dg7i9n2EdPf5q38tbL7Lx2Y2ExZxBAQ/export?format=pdf">
                            <button className="link-btns">Resume</button>
                        </a>
                    </div>
                </section>
            </Container>
        </div>
    );
}

export default Link;