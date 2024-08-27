import React from "react";
import HitechLogo from "/images/HitechLogo.png"
import "./Footer.css";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="footer-section">
                <Row>
                    <Col md={6} className="footer-column">
                        <img src={HitechLogo} />
                        <p style={{ paddingLeft: "17px", paddingTop: "39px" }}>Hitech is dedicated to excellence in construction, delivering quality in every project from residential homes to commercial spaces.</p>
                    </Col>
                    <hr className="verticalDivider"></hr>
                    <Col md={6} className="footer-column">
                        <h1>All Pages</h1>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <div className="links-container">
                                <Link to="/">Home</Link>
                                <a>About Us</a>
                                <a>Services</a>
                                <a>Careers</a>
                                <a>Contact Us</a>
                            </div>
                            <div className="links-container" >
                            <Link to="/Residential">Residential</Link>
                            <Link to="/Commercial">Commercial</Link>
                            <Link to="/Industrial">Industrial</Link>
                            <Link to="/Institutional">Institutional & Corporate</Link>

                            </div>
                        </div>
                    </Col>
                    <Col md={6} className="footer-column">
                        <h1>Contacts</h1>
                        <a href="tel:+91-9904592200"><p style={{ display: "inline-block" }}>+91-9904592200</p></a><a href="tel:+91-9904288900"><p style={{ display: "inline-block" }}> / +91-9904288900</p></a>
                        <a href="mailto:info@hitechprojects.co.in"><p>info@hitechprojects.co.in</p></a>
                        <p>
                            <a href="https://maps.app.goo.gl/wyvriQETiSNntYVR6" target="_blank">A-1401, Block-A,
                                West Gate Business Bay,
                                Besides Signature - 1, S.G. Highway,
                                Makarba, Ahmedabad - 380051.
                                Gujarat, India
                            </a>
                        </p>
                    </Col>
                    <Col md={5} className="footer-column">
                        <h1>Certifications</h1>
                        <p>ISO 9001</p>
                        <p>ISO 45001</p>
                    </Col>

                </Row>
                <div className="horizontal-divider" />
                <p className="footer-link"><i class='bx bx-copyright'></i><a href="https://www.outleadsolutions.com" target="_blank">2024 Outlead solution.</a>All rights reserved.</p>
            </div>
        </>
    )
}
export default Footer;