import React from "react";
import "./style.css";
import Container from "../Container";

function Contact() {
    return (
        <div>
            <div className="container" >
                <header className="card-header">
                    Contact
                </header>
                <Container className="card-body">
                    <p className="cont">Email: kaelynrieffer@gmail.com </p>
                    <p className="cont">Phone: 520-907-4678 </p>
                </Container>
            </div>
            
            <section id="box">
                <div className="container link">
                    <h3> Links </h3>
                    <Container >
                        <a type="submit" href="https://github.com/Krieffer21/">Git Hub Page: https://github.com/Krieffer21/ </a>
                        <a className="container" type="submit" href="https://www.linkedin.com/in/kaelyn-rieffer-b41a811a2/">LinkedIn page:
                            https://www.linkedin.com/in/kaelyn-rieffer-b41a811a2/ </a>
                        <a className="container" type="submit" href="https://docs.google.com/document/d/1eRAWQx83EC40dg7i9n2EdPf5q38tbL7Lx2Y2ExZxBAQ/export?format=pdf"> Resume: https://docs.google.com/document/d/1eRAWQx83EC40dg7i9n2EdPf5q38tbL7Lx2Y2ExZxBAQ/export?format=pdf</a>
                    </Container>
                </div>
            </section>
        </div>

    );
}

export default Contact;