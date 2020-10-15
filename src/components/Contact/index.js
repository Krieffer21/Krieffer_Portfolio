import React from 'react';
import "./style.css";
import Links from "../Links";
import Container from "../Container";
// import Resume from "../Resume";
import Skills from "../Skills";

function contact() {
    return (
        <div className="cont-bg-img">
            <Container className="cont-links mt-5 ">
                <div className="container col-lg-4 col-md-8 col-sm-12" >
                    <header className="card-header">
                        Contact
                        </header>
                    <Container className="card-body">
                        <div className="cardbod">
                            <a href="mailto:kaelynrieffer@gmail.com">
                                <p className="cont">Email: kaelynrieffer@gmail.com </p>
                            </a>
                            <p className="cont">Phone: 520-907-4678 </p>
                        </div>
                        <Links />
                    </Container>
                </div>
            </Container>
            <Skills/>
        </div>
    );
}

export default contact;
