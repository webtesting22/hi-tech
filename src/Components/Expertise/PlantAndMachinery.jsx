import React from "react";
import ProjectPage from "../Projects/CommonProject/ProjectPage";
import image1 from "/images/AllImages/expertise/machinary2/1.png";
import image2 from "/images/AllImages/expertise/machinary2/bp.jpg"; 
import image3 from "/images/AllImages/expertise/machinary2/6.png";
import image4 from "/images/AllImages/expertise/machinary2/DJI_0019.JPG?url";
import image5 from "/images/AllImages/expertise/machinary2/DJI_0039.JPG?url";
import image6 from "/images/AllImages/expertise/Machinery/3.png";
import {Row,Col} from "antd";
 
const PlantAndMachinery = () => {
    const content = {
        title: "Plant And Machinery",
        description: "We have established a robust plant and machinery cell that is responsible for repair and management system. The cell also looks after resource planning, selection of right equipment for procurement, installation, commissioning and routine preventive maintenance. The tower cranes, passenger and material hoists, concrete pumps are deployed at the project sites after due consideration of the project requirement, movement restrictions, perfromance requirements etc."
      }
      const machineryImages=[
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
      ]
    return(
        <>
            <ProjectPage title={content.title} description={content.description}/>
            <div className="section-padding">
                <Row style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                    {machineryImages.map((item, index) => (
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
export default PlantAndMachinery;