import React from "react";
import "./AboutUs.css";
import AboutImage from "../../images/Image.png";
import Card from "../../images/Card.png";
import card2 from "../../images/card2.png";

const AboutUs = () => {
    return (
        <>
            <div className="section-padding">
                <div className="about-section">
                    <h1 className="aboutHeading">WE ARE  <div className="blueHeading" style={{ width: "289px", height: "90px" }}> HI-TECH</div>
                        <img src={AboutImage} style={{ margin: "0 50px" }} />YOUR <br />PARTNER IN ICONIC STRUCTURES.<br />EXCELLENCE IN EVERY BRICK.</h1>
                    <div style={{ display: "flex" }}>
                        <div
                            // style={{ backgroundImage: `url(${Card})` }} 
                            className="card1" >
                            <img src={Card} />
                            <button className="contactButton">Contact Us</button>
                        </div>
                        <div className="backgroundcontainer" style={{ backgroundImage: `url(${card2})` }}>
                            <p className="cardParagraph1">We are honored to be classified as a 'AA'
                                special category - I (Buildings) contractor by
                                the Government of Gujarat. Our mission is to
                                create enduring partnerships and
                                transformative projects that stand as
                                testaments to our commitment to excellence.
                                We believe in not just building structures, but
                                also in building relationships and communities.
                            </p>
                            <br />
                            <p className="cardParagraph2">Since its inception in 1996, Hitech has been a cornerstone in Ahmedabad's construction industry.
                                With certifications like ISO 9001:2015 and ISO 45001, we set the bar high for quality and safety.
                                Our portfolio is diverse, covering industrial constructions, residential developments, commercial properties, and institutional buildings.
                            </p>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutUs;