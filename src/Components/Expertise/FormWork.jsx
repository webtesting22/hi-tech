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
import { Row, Col } from "antd";
import "./FormWork.css"
// C:\Users\meghn\OneDrive\Documents\GitHub\New folder\hi-tech\public\images\AllImages\expertise\formwork
// import image1 from "../../../public/images/AllImages/expertise/formwork/Handset_Alpha.png"

const FormWork = () => {
    const content = {
        title: "Form work",
        description:
            "Our formwork cell caters to the designing, detailing, customization, procurement, deployment, training and implementation requirements of our projects. Based on the formwork scheme, the deployment schedule is firmed up to meet the construction sequence at site. It ensures proper utilisation of formwork,achieving cycle time, productivity targets, handling, cleaning and upkeep of formwork materials." +
            "For each concrete structure and component, Hitech deploys the most suitable formwork system from major formwork companies such as PERI, DOKA and Alsina around the globe." +
            "Hitech makes sure the kind of materials and formworks used for every project are based after considering on-site efficiency of production, health , safety and environmental issues, driving towards ever-increasing efficiency."
    }
    const formWorkImages = [
        {
            img: image1,
        },
        {
            img: image2,
        },
        {
            img: image3,
        },
        {
            img: image4,
        },
        {
            img: image5,
        },
        {
            img: image6,
        },
        {
            img: image7,
        },
        {
            img: image8,
        },
        {
            img: image9,
        },
    ]
    return (
        <>
            <ProjectPage title={content.title} description={content.description} />
            <div className="section-padding">
                <Row style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                    {formWorkImages.map((item, index) => (
                        <Col
                            xxl={6}
                            lg={8}
                            md={12}
                            sm={24}
                            xs={24}
                            style={{ display: "flex", justifyContent: "center", margin: "40px" }}
                        >
                            <div className="card_gallery_warpper">
                                <div className="card_gallery">
                                    <div className="content">
                                        <div className="front">
                                            <img src={item.img} alt="404 - Not Given" />
                                        </div>
                                        <div className="back">
                                            <p className="is-size-6 has-text-centered  is-uppercase">
                                                {item.title}
                                            </p>
                                            <br />
                                            <p className="is-size-7 has-text-centered gallery_title2">
                                                {item.BackContent}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    )
}
export default FormWork;