import React from "react";
import ProjectPage from "../Projects/CommonProject/ProjectPage";


const PlantAndMachinery = () => {
    const content = {
        title: "Plant And Machinery",
        description: "We have established a robust plant and machinery cell that is responsible for repair and management system. The cell also looks after resource planning, selection of right equipment for procurement, installation, commissioning and routine preventive maintenance. The tower cranes, passenger and material hoists, concrete pumps are deployed at the project sites after due consideration of the project requirement, movement restrictions, perfromance requirements etc."
      }
    return(
        <>
            <ProjectPage title={content.title} description={content.description}/>
        </>
    )
}
export default PlantAndMachinery;