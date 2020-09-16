import React from "react";
import "./style.css";
import Container from "../Container"

function AboutCard() {
    return (
        <div className="bg-img">
            <div className="row justify-content-md-center">
                <Container id="about" className="col-md-4 col-sm-12 col-lg-4">
                    <img className="meimg mt-2 mb-1" alt="Kaelyn Rieffer" src="https://drive.google.com/uc?export=view&id=1YcMD9rA503W7n0WWbZk4DxeKdCVELjey" />
                    <p className="meText mt-1 mb-1"> I am an artist and aspiring web developer, with a creative eye for uniqueness. I am a wonderful team player full of ideas.
                    </p>
                </Container>
            </div>
            <div className="row justify-content-md-center">

                <Container className="col-md-4 col-sm-12 col-lg-4">
                    <section id="box">
                        <div className="container link">
                            <h3 className="links"> Links </h3>
                            <a className="container" type="submit" href="https://github.com/Krieffer21/">
                                <button>Git Hub Page</button>
                            </a>
                            <a className="container" type="submit" href="https://www.linkedin.com/in/kaelyn-rieffer-b41a811a2/">                        <button>LinkedIn page</button>
                            </a>
                            <a className="container" type="submit" href="https://docs.google.com/document/d/1eRAWQx83EC40dg7i9n2EdPf5q38tbL7Lx2Y2ExZxBAQ/export?format=pdf">
                            <button>Resume</button>
                            </a>
                        </div>
                    </section>
                </Container>
            </div>
        </div>
    );
}

export default AboutCard;