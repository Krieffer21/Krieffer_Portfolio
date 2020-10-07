import React, { Component } from 'react';
import "./style.css";
import Container from "../Container";

function res() {
    return (
        <div>
            <Container>
                <iframe
                    className="resume"
                    src="https://docs.google.com/document/d/e/2PACX-1vQOzyBpZjO_V978m9n02olvcJUEMjg_B_ZExz6qLtPumTabezGZTjeqYXPOIS6vWMv-tphrA2CNGpYW/pub?embedded=true"
                ></iframe>
            </Container>
        </div>
    );
}

export default res;
