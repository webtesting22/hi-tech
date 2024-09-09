import React, { useState } from "react";
import AboutUs from "../AboutUs/AboutUs";
import People from "/images/group.png"
import Medal from "/images/achievementMedal.png";
import workForce from "/images/workForce.png";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import Residentialimg from "/images/Residential.png";
import Residential from "../Projects/Residential/Residential";
import Commercialimg from "/images/Commercial.png";
import Industrialimg from "/images/Industrial.png";
import Institutionalimg from "/images/Institutional.png";
import Arrow from "/images/arrow.png";
import PeopleGroup from "/images/People.png";
import Process from "/images/Refresh.png"
import Standards from "/images/Standards.png";
import Technology from "/images/Technology.png";
import partnerBackground from "/images/partnerBackground.png"
import "./HeroSection.css";
import ImageMap from "/images/mapImage.png";
import CardComponent from "../CardComponent/CardComponent";
import ProjectsCards from "../ProjectsCards/ProjectsCards";
import ContactMini from "../ContactMiniComponent/ContactMini";

const HeroSection = () => {
    const [hoverIndex, setHoverIndex] = useState(null);
    const achievementData = [
        {
            achievementIcon: Medal,
            achievementHeading: "25+",
            achievementDescription: "Years of Experience",
        },
        {
            achievementIcon: People,
            achievementHeading: "500+",
            achievementDescription: "Total Members",
        },
        {
            achievementIcon: workForce,
            achievementHeading: "3000+",
            achievementDescription: "Workforce",
        }
    ]
    const projectsData = [
        {
            projectHeading: "Residential",
            projectImage: Residentialimg,
            projectLink:"/Residential",
        },
        {
            projectHeading: "Commercial",
            projectImage: Commercialimg,
            projectLink:"/Commercial",
        },
        {
            projectHeading: "Industrial",
            projectImage: Industrialimg,
            projectLink:"/Industrial",
        },
        {
            projectHeading: "Institutional & Corporate",
            projectImage: Institutionalimg,
            projectLink:"/Institutional",
        }
    ]
    const valuesData = [
        {
            valueIcon: PeopleGroup,
            valueHeading: "People",
            valueDescription: "We believe in creating a culture of leadership, accountability & competence",
            valueLink: "Our Team",
        },
        {
            valueIcon: Process,
            valueHeading: "Process",
            valueDescription: "Our process & expertise ensures quality and timely delivery irrespective of the project size.",
            valueLink: "Our Service",
        },
        {
            valueIcon: Standards,
            valueHeading: "Standards",
            valueDescription: "A Proven record of following best quality, safety standards and training practices in the construction industry.",
            valueLink: "Standards",
        },
        {
            valueIcon: Technology,
            valueHeading: "Technology",
            valueDescription: "We promptly embrace state of the art construction technologies and enable our proceses with Information Technology",
            valueLink: "Our Technology",
        },
    ]
    const imageMap = [
        {
            images: ImageMap,
        },
        {
            images: ImageMap,
        },
        {
            images: ImageMap,
        },
        {
            images: ImageMap,
        },
        {
            images: ImageMap,
        },
        {
            images: ImageMap,
        },
        {
            images: ImageMap,
        },
        {
            images: ImageMap,
        },
        {
            images: ImageMap,
        },
    ]
    return (
        <>
            <AboutUs /> {/* Home Page hero Section */}
            <div className="achievements">
                <div className="InsideContainers">
                    {achievementData.map((item, index) => (
                        <div key={index} className="achievementCard">
                            <img src={item.achievementIcon} style={{ height: "70px", width: "70px", marginRight: "10px" }} />
                            <div style={{ display: "flex", flexDirection: "column", top: "100px" }}>
                                <h1>{item.achievementHeading}</h1>
                                <p>{item.achievementDescription}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="projects containerPadding">
                <h1 className="blueHeading">Our <span >Projects</span>
                </h1>
                <Row>
                    {projectsData.map((item, index) => (
                        <Col lg={12}
                            md={24}
                            sm={24}
                            xs={24}>
                            <Link to={item.projectLink}>
                            <div className="projectComponent" key={index}>
                                <div className="headingContainer">
                                    <h1>{item.projectHeading}</h1>
                                </div>
                                <div className="bg2"></div>
                                <div className="bg1"></div>
                                <img src={item.projectImage} className="projectImage" alt={item.projectHeading} />
                                <img src={Arrow} className="arrow" />
                            </div>
                        </Link>
                        </Col>
                    ))}
                </Row>
            </div>
            <ProjectsCards />
            <ContactMini />
        </>
    )
}
export default HeroSection;