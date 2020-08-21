import React from "react";
import "./style.css";


function AboutCard() {
return (
    <div className="row justify-content-md-center">
        <container id="about" className="col-md-8 col-sm-12 col-lg-10">
            <h1> About Me </h1>
            <img className="meimg" src="./Images/IMG_20180226_202959_616.jpg" alt="picture of Kaelyn Rieffer"/>
            <p className="meText"> I am a native Tucsonan and art is my passion. I have experience with ceramics, graphic design photography and painting. Recently I have been focused on painting specifically with watercolors.
            </p>
        </container>
    </div>
    );
}

export default AboutCard;