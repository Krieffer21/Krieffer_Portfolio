import React from "react";
import "./style.css";
import Container from "../Container";
import Links from "../Links";

function Footer() {
    return (
        <div className="fixed-bottom foot">
            <p >
                <a className="foot" href="mailto:kaelynrieffer@gmail.com"> Email: kaelynrieffer@gmail.com </a>
            ~ Phone: 520-907-4678
            </p>
            <Container>
                <Links />
            </Container>
        </div>
    );
}

export default Footer;