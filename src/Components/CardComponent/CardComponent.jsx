import React from "react";
import "./CardComponent.css";
import { Col } from "antd";


const CardComponent = (props) => {
    return (
        <>
        <Col lg={8}>
            <div className="cardContainer">
                <div>
                    <img src={props.image} className="projectCardImage" />
                    <h1 className="projectHeading">{props.title}</h1>
                    <div className="projectList">
                        <p className="label">Clients:</p><p className="description">{props.client}</p><br />
                        <p className="label">Location:</p><p className="description">{props.location}</p><br />
                        <p className="label">Project Size:</p><p className="description">{props.projectSize}</p><br />
                        <p className="label">Project Description:</p><p className="description">{props.projectDes}</p><br />
                        <p className="label">Project Year:</p><p className="description">{props.projectYear}</p><br />
                        <p className="label">Architect:</p><p className="description">{props.architect}</p><br />
                        <p className="label">Str. Consultant:</p><p className="description">{props.consultant}</p><br />
                        <p className="label">Scope:</p><p className="description">{props.scope}</p><br />
                    </div>
                </div>
            </div>
            </Col>
        </>
    )
}
export default CardComponent;