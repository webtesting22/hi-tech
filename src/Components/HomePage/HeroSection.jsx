import React, { useState } from "react";
import AboutUs from "../AboutUs/AboutUs";
import People from "/images/group.png"
import Medal from "/images/achievementMedal.png";
import workForce from "/images/workForce.png";
import { Row, Col } from "antd";
import Residential from "/images/Residential.png";
import Commercial from "/images/Commercial.png";
import Industrial from "/images/Industrial.png";
import Institutional from "/images/Institutional.png";
import Arrow from "/images/arrow.png";
import PeopleGroup from "/images/People.png";
import Process from "/images/Refresh.png"
import Standards from "/images/Standards.png";
import Technology from "/images/Technology.png";
import partnerBackground from "/images/partnerBackground.png"
import "./HeroSection.css";
import ImageMap from "/images/mapImage.png";
import CardComponent from "../CardComponent/CardComponent";

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
            projectImage: Residential,
        },
        {
            projectHeading: "Commercial",
            projectImage: Commercial,
        },
        {
            projectHeading: "Industrial",
            projectImage: Industrial,
        },
        {
            projectHeading: "Institutional & Corporate",
            projectImage: Institutional,
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
            <AboutUs />
            <div className="achievements">
                <div style={{ display: "flex", justifyContent: "space-evenly" }}>
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
            <div className="projects">
                <h1>Our <div className="blueHeading">Projects</div>
                </h1>
                <Row>
                    {projectsData.map((item, index) => (
                        <Col lg={12}>
                            <div className="projectComponent" key={index}>
                                <div className="headingContainer">
                                    <h1 style={{ fontSize: "25px", paddingLeft: "20px", paddingTop: "10px" }}>{item.projectHeading}</h1>
                                </div>
                                <div className="bg2"></div>
                                <div className="bg1"></div>
                                <img src={item.projectImage} className="projectImage" alt={item.projectHeading} />
                                <img src={Arrow} className="arrow" />
                            </div>

                        </Col>
                    ))}
                </Row>
            </div>
            <div>
                <div className="section-padding">
                    {imageMap.map((item, index) => (
                        <img src={item.images} key={index} className="mapImage" />
                    ))}
                </div>
                <h1 style={{ textAlign: "center" }}>Our <div className="blueHeading">Value</div> Creation Parameters  </h1>
                <div style={{ display: "flex", flexDirection: "row", margin: "50px" }}>
                    {valuesData.map((item, index) => (
                        <Col key={index} md={6}>
                            <div className="valueBox"
                                onMouseEnter={() => setHoverIndex(index)}
                                onMouseLeave={() => setHoverIndex(null)}>
                                <img src={item.valueIcon} />
                                <h1 className="valueTitle">{item.valueHeading}</h1>
                                {/* <p className="valueDescription">{item.valueDescription}</p>
                                        <a className="valueFooter">
                                            {item.valueLink}
                                            <img src={Arrow} className="arrow1" alt="Arrow" />
                                        </a> */}
                                {hoverIndex === index && (
                                    <>
                                        <p className="valueDescription">{item.valueDescription}</p>
                                        <a className="valueFooter">
                                            {item.valueLink}
                                            <img src={Arrow} className="arrow1" alt="Arrow" />
                                        </a>
                                    </>
                                )}
                                {/* {showDescription && <p className="valueDescription">{item.valueDescription}</p>}
                        {showDescription && <a className="valueFooter">{item.valueLink}<img src={Arrow} className="arrow1" /></a>} */}
                            </div>
                        </Col>

                    ))}
                </div>
            </div>
            <div className="partner" style={{ background: `url(${partnerBackground})` }}>
                <h1 style={{ fontSize: "50px" }}>Interested in Partnering with Us?</h1>
                <button className="contactUsButton">CONTACT US
                    <img src={Arrow} style={{height:"40px",width:"40px"}} alt="Arrow" />
                </button>
            </div>
                    {/* <CardComponent/> */}
                    {/* <button className="projectButton">ONGOING PROJECTS</button> */}
        </>
    )
}
export default HeroSection;