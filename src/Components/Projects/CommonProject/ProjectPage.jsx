import React from "react";
import "./ProjectPage.css";
import CardComponent from "../../CardComponent/CardComponent";
const ProjectPage = (props) => {
    return(
        <>
            <div className="backgroundOverlay">
                <h1 className="ProjectTitle">{props.title}</h1>
                <p className="ProjectDescription">{props.description}</p>
            </div>
           
        </>
    )
}
export default ProjectPage;