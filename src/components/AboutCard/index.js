import React from "react";
import "./style.css";
import Container from "../Container"

function AboutCard() {
    return (
        <div>
            <div className="row justify-content-md-center">
                <Container id="about" className="col-md-8 col-sm-12 col-lg-10">
                    <h1> About Me </h1>
                    <img className="meimg" alt="Kaelyn Rieffer" src="https://drive.google.com/uc?export=view&id=1m-_9-569U4uKI2G4coEj9bjtrIlL_rni" />
                    <p className="meText"> I am an artist and aspiring web developer, with a creative eye for uniqueness. I am a wonderful team player full of ideas.
                    </p>
                </Container>
            </div>
            <section id="box">
                <div className="container link">
                    <h3> Links </h3>
                    <a type="submit" href="https://github.com/Krieffer21/">Git Hub Page: https://github.com/Krieffer21/ </a>
                    <Container>
                    <a className="container" type="submit" href="https://www.linkedin.com/in/kaelyn-rieffer-b41a811a2/">LinkedIn page:
                    https://www.linkedin.com/in/kaelyn-rieffer-b41a811a2/ </a>
                    <a className="container" type="submit" href="https://docs.google.com/document/d/1eRAWQx83EC40dg7i9n2EdPf5q38tbL7Lx2Y2ExZxBAQ/export?format=pdf"> Resume: https://docs.google.com/document/d/1eRAWQx83EC40dg7i9n2EdPf5q38tbL7Lx2Y2ExZxBAQ/export?format=pdf</a>
                    </Container>
                </div>
            </section>
        </div>
    );
}

export default AboutCard;