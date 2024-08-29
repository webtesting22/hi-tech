import React from "react";
import ProjectPage from "../Projects/CommonProject/ProjectPage";
import image1 from "/images/AllImages/expertise/formwork/Handshet Alpha.png";
import image2 from "/images/AllImages/expertise/formwork/Ring Lock.png"
import image3 from "/images/AllImages/expertise/formwork/Eco- Speedy.png"
import image4 from "/images/AllImages/expertise/formwork/Alpha dek 2.png"
import image5 from "/images/AllImages/expertise/formwork/Material Lifter Final.jpg"
import image6 from "/images/AllImages/expertise/formwork/Climbing Platform.jpg"
import image7 from "/images/AllImages/expertise/formwork/Multi flex.jpg"
import image8 from "/images/AllImages/expertise/formwork/Standard Belex.png"
import image9 from "/images/AllImages/expertise/formwork/Alsina.jpeg"
import "./FormWork.css"
// C:\Users\meghn\OneDrive\Documents\GitHub\New folder\hi-tech\public\images\AllImages\expertise\formwork
// import image1 from "../../../public/images/AllImages/expertise/formwork/Handset_Alpha.png"

const FormWork = () => {
        const content= {
            title:"Form work",
            description:
            "Our formwork cell caters to the designing, detailing, customization, procurement, deployment, training and implementation requirements of our projects. Based on the formwork scheme, the deployment schedule is firmed up to meet the construction sequence at site. It ensures proper utilisation of formwork,achieving cycle time, productivity targets, handling, cleaning and upkeep of formwork materials."+
            "For each concrete structure and component, Hitech deploys the most suitable formwork system from major formwork companies such as PERI, DOKA and Alsina around the globe."+
            "Hitech makes sure the kind of materials and formworks used for every project are based after considering on-site efficiency of production, health , safety and environmental issues, driving towards ever-increasing efficiency."
        }
        const formWorkImages = [
            {
                images:image1,
            },
            {
                images:image2,
            },
            {
                images:image3,
            },
            {
                images:image4,
            },
            {
                images:image5,
            },
            {
                images:image6,
            },
            {
                images:image7,
            },
            {
                images:image8,
            },
            {
                images:image9,
            },
        ]
    return(
        <>
            <ProjectPage title={content.title} description={content.description}/>
            <div className="section-padding">
                    {formWorkImages.map((item, index) => (
                        <img src={item.images} key={index} className="mapImage" />
                    ))}
                </div>
        </>
    )
}
export default FormWork;