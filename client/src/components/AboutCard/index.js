import React from "react";
import "./style.css";
import Container from "../Container";
import Links from "../Links";

function AboutCard() {
    return (
        <div>
            <div className="bg-img row justify-content-md-center">
                <div className="col-md-10 col-sm-12 col-lg-10 mx-auto">
                    <div id="about" className="row ">
                        <img className="meimg mt-2 mb-1" alt="Kaelyn Rieffer" src="https://drive.google.com/uc?export=view&id=1YcMD9rA503W7n0WWbZk4DxeKdCVELjey" />
                        <p className="meText mt-2 mb-5 col"> I am an artist and aspiring web developer, with a creative eye for uniqueness. I am a wonderful team player full of ideas. As someone who is familiar with the art world I am excited to now have a hand in the coding world.
                        I was born and raised in Tucson, AZ. I have always enjoyed art, especially ceramics. My goal is to one day own a kiln and wheel so I can make my own dishes.
                    </p>
                        <Container>
                            <Links />
                        </Container>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutCard;