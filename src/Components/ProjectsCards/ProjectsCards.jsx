import React from "react";
import { Row, Col } from "antd";
import "./ProjectCards.css"
import Item from "antd/es/list/Item";
import img1 from "./Images/1.png"
import img2 from "./Images/2.png"
import img3 from "./Images/3.png"
import img4 from "./Images/4.png"
import img5 from "./Images/5.png"
import img6 from "./Images/6.png"
import img7 from "./Images/7.png"
import img8 from "./Images/8.png"
import img9 from "./Images/9.png"
const ProjectsCards = () => {

    const FlipCardsContent = [
        {
            img: img1,
            title: "Entrance lounge",
            BackContent: "In the entrance lounge dreams take flight and anticipation fills the air."
        },
        {
            img: img2,
            title: "New Head Office",
            BackContent: "As far as top quality construction goes, we stand tall-literally."
        },
        {
            img: img3,
            title: "workspace",
            BackContent: "We keep moving forward, opening new doors, and doing new things, because we’re curious and curiosity keeps leading us down new paths."
        },
        {
            img: img4,
            title: "Cafeteria",
            BackContent: "As far as top quality construction goes, we stand tall-literally."
        },
        {
            img: img5,
            // title: "Executive lounge",
            BackContent: "Hitech Projects celebrated 25 successful years of its entrepreneurial journey of growth in the construction industry by moving into a spacious new office."
        },
        {
            img: img6,
            title: "Executive lounge",
            BackContent: "Relationships are the only thing that matter business in life."
        },
        {
            img: img7,
            title: "workspace",
            BackContent: "In your workspace, surround yourself with objects that bring you joy and ignite your creativity."
        },
        {
            img: img8,
            title: "Reception",
            BackContent: "We express gratitude to all our business partners and stakeholders who have supported us throughout this exciting journey."
        },
        {
            img:img9,
            title:"Training room",
            BackContent:"Success in business requires: Training, Discipline, Hard Work",
        }
    ]
    return (
        <>
            <section className="containerPadding">
                <div className="container">
                    <Row style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                        {FlipCardsContent.map((item, key) => {
                            return (
                                <Col
                                    xxl={6} gallery_title1
                                    lg={8}
                                    md={12}
                                    sm={24}
                                    xs={24}
                                    style={{ display: "flex", justifyContent: "center",margin:"20px" }}
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
                            );
                        })}
                    </Row>
                </div>
            </section>

        </>

    )
}

export default ProjectsCards;