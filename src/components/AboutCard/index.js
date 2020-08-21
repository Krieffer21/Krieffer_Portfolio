import React from "react";
import "./style.css";

function AboutCard() {
return (
    <div>
    <div className="row justify-content-md-center">
        <container id="about" className="col-md-8 col-sm-12 col-lg-10">
            <h1> About Me </h1>
            <img className="meimg" src="./Images/IMG_20180226_202959_616.jpg" alt="picture of Kaelyn Rieffer"/>
            <p className="meText"> I am an artist and aspiring web developer, with a creative eye for uniqueness. I am a wonderful team player full of ideas. 
            </p>
        </container>
    </div>
        <section id="links">
        <div className="container link">
            <h3> Links </h3>
            <link href="https://github.com/Krieffer21/">Git Hub Page: https://github.com/Krieffer21/ </link>
            <div>
                <link href="https://www.linkedin.com/in/kaelyn-rieffer-b41a811a2/">LinkedIn page:
                    https://www.linkedin.com/in/kaelyn-rieffer-b41a811a2/ </link>
            </div>
            <div>
                <link
                    href="https://docs.google.com/document/d/1eRAWQx83EC40dg7i9n2EdPf5q38tbL7Lx2Y2ExZxBAQ/export?format=pdf">
                    Resume:
                    https://docs.google.com/document/d/1eRAWQx83EC40dg7i9n2EdPf5q38tbL7Lx2Y2ExZxBAQ/export?format=pdf</link>
            </div>
        </div>
     </section>
    </div>
    );
}

export default AboutCard;