
import React from "react";
import projects from "../../projects.json"
import Portfolio from "../Portfolio/projects"


function Projects() {
    return (
        <div id="projects">
            {projects.map(project => (
            <Portfolio
                    id= {project.id}
                    key= {project.id}
                    project= {project.project}
                    src= {project.src}
                    alt= {project.alt}
                    depl= {project.depl}
                    git= {project.git}
            />
            ))}
           
        </div>
    );
    }

export default Projects;
