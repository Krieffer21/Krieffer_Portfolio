import React from "react";
import "./style.css";

function Link() {
    return (
        <div className="row justify-content-md-center ">
                <section id="box" className="">
                    <div className=" link">
                        <a className=" lbtns" type="submit" href="https://github.com/Krieffer21/">
                            <button className="link-btns">GitHub</button>
                        </a>
                        <a className=" lbtns" type="submit" href="https://www.linkedin.com/in/kaelyn-rieffer-b41a811a2/">
                            <button className="link-btns">LinkedIn</button>
                        </a>
                        <a className=" lbtns" type="submit" href="https://docs.google.com/document/d/1eRAWQx83EC40dg7i9n2EdPf5q38tbL7Lx2Y2ExZxBAQ/export?format=pdf">
                            <button className="link-btns">Resume</button>
                        </a>
                    </div>
                </section>
        </div>
    );
}

export default Link;