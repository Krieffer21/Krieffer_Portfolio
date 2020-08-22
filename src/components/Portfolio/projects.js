
import React, { Component } from "react";
import projects from "../projects.json"
import Portfolio from "../Portfolio/projects"


class Projects extends Portfolio {
    state = {
        projects 
    }
    render() {
    return (
        <div id="projects">
            {props.projects.map(projects => (
            <Portfolio
                    id= {projects.id}
                    key= {projects.id}
                    project= {projects.project}
                    src= {projects.src}
                    alt= {projects.alt}
                    depl= {projects.depl}
                    git= {projects.git}
                    />
            ))}
           
        </div>
    );
    }
}

export default Projects;
