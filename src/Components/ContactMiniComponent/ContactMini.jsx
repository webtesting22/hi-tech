import React from "react";
import { Row, Col } from "antd";
import "./ContactMini.css"
import BackImage from "./BackImage.jpeg"
const ContactMini = () => {
    return (
        <>
            <section className="containerPadding">
                <div className="ContactUsContainer">
                    <img src={BackImage} alt="" />
                    <div className="ContentContiner">
                        <Row>
                            <Col>
                                <div className="taglineContainer">
                                    <h2>Interested in Partnering with Us?</h2>
                                </div>
                            </Col>
                            <Col>
                                <div className="ContactUsBtn">Contact Us</div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </section>

        </>
    )
}
export default ContactMini