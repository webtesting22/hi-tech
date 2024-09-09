import React from "react";
import ProjectPage from "../Projects/CommonProject/ProjectPage";
import { Row, Col } from "antd"
import ERP from "/images/ERP.png";
import HMapp from "/images/2 6.png"
import "./Technology.css";

const Technology = () => {
   window.addEventListener('scroll', () => {
      const scrollPercentage = window.scrollY / document.body.scrollHeight;
      document.documentElement.style.setProperty('--scroll', scrollPercentage);
  });
  
   const content = {
      title: "Focusing On The Right Technology",
      description: "Continually developing information systems to improve our work by focusing on Latest Technologies and being the pioneer in Technology also.",
   }
   return (
      <>
         <ProjectPage title={content.title} description={content.description} />
         <div>
            <Row>
               <Col lg={12}>
                  <h1 className="blueHeading"><span>ERP</span></h1>
                  <p className="ERPparagraph">Our ERP System combines advanced enterprise technologies with decades of construction industry experience into one, integrated system. Going beyond traditional construction management software, our ERP combines Analytics to Documentation to Planning, all the things at one place within one click. It also incorporates document, content, and business process management capabilities apart from:</p>
               </Col>
               <Col lg={12} className="imgContainer"><img src={ERP} /></Col>
            </Row>
            <Row>
               <Col lg={12} className="imgContainer"><img src={HMapp}/></Col>
               <Col lg={12} >
                  <h1 className="blueHeading"><span>Hi-Mapp</span></h1>
               </Col>
            </Row>
         </div>
      </>
   )
}
export default Technology;