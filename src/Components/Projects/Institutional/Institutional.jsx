import React from "react";
import { Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import ProjectPage from "../CommonProject/ProjectPage";
import CardComponent from "../../CardComponent/CardComponent";

const institutionalprojectslist = [
  {
    src: "/images/Projects/Institutional_projects/ongoing/1-1.jpg",
    title: "ANAND NIKETAN SCHOOL",
    content:
      "Anand Niketan is a School having 50,000 Sqft built up area in Sughad, Ahmedabad with various facilities including Special Room, Sports Arenas & Activity Rooms.",
    segment: "Education",
    client: "Utthan Sewa Trust",
    location: "Sanand, Ahmedabad",
    projectSize: "349,062 Sq. ft.",
    projectDes: "8 Floors, 43 Meters",
    projectYear: "2022 - Current",
    architect: "Kakani Associates",
    consultant: "DELF Consulting Engineers (India) Private Limited",
    scope:
      "Civil works, Masonry & Plaster, Painting, Flooring, and Waterproofing.",
  },
  // {
  //   src: "",
  //   title: "Anubhav School",
  //   content:
  //     "Anand Niketan is a School having 50,000 Sqft built up area in Sughad, Ahmedabad with various facilities including Special Room, Sports Arenas & Activity Rooms.",
  //   segment: "Education",
  //   client: "Pilak Shah",
  //   location: "Sanand, Ahmedabad",
  //   projectSize: "75,704 Sq. ft.",
  //   projectDes: "8 Floors, 43 Meters",
  //   projectYear: "2024 - Current",
  //   architect: "Kakani Associates",
  //   consultant: "Japan Shah Consulting Engineers",
  //   scope:
  //     "Civil Works Excavation, Backfiling, pile Foundation work, masonary, plaster, flooring, painting for School Building",
  // },

];
const institutionalprojectscompleted = [
 
  {
    src: "/images/Projects/Institutional_projects/ongoing/2.png",
    title: "MUSEUM KOBA",
    content:
      "The Museum- Samrat Samprati Sangrahalaya of Shri Mahavir Jain Aradhana Kendra,Koba preserves and nourishes the rare heritage of Jain Art and architecture",
    segment: "Corporate",
    client: "Shri Mahavir Jain Aradhana Kendra, Koba (SMJAK Trust)",
    location: "Koba, Gandhinagar",
    projectSize: "1,00,000 Sq. ft.",
    projectDes: "16 Meters",
    projectYear: "2022",
    architect: "SJK Architects",
    consultant: "Global Engineering Services",
    scope: "RCC Framework,Structural Work , Finishing Work.",
  },

  {
    src: "/images/Projects/Institutional_projects/ongoing/1.png",
    title: "JITO HOSTEL",
    content:
      "Hostel building work for Jain International Trade organisation-An Educational Trust",
    segment: "Residential",
    client: "JITO Ahmedabad Educational Trust",
    location: "CG Road, Ahmedabad",
    projectSize: "37,200 Sq. ft.",
    projectDes: "5 Floors, 24 Meters",
    projectYear: "2022",
    architect: "PVDRS, Ahmedabad",
    consultant: "P-CUBE Consultant",
    scope: "RCC Framework, Masonry ,Plaster.",
  },
  {
    src: "/images/Projects/Institutional_projects/completed/lubi corporate.jpg",
    title: "LUBI CORPORATE",
    content: "Corporate office at Tragad, Ahmedabad",
    segment: "Corporate",
    client: "Lubi Industries LLP",
    location: "Tragad, Ahmedabad",
    projectSize: "1,68,400 Sq. ft.",
    projectDes: "7 Floors, 36 Meters",
    projectYear: "2022",
    architect: "DSP Design Associates",
    consultant: "KMH Engineering",
    scope: "RCC Framework, Masonry ,Plaster.",
  },
  {
    src: "/images/Projects/Institutional_projects/completed/2.png",
    title: "ANAND NIKETAN SCHOOL",
    content:
      "Anand Niketan is a School having 50,000 Sqft built up area in Sughad, Ahmedabad with various facilities including Special Room, Sports Arenas & Activity Rooms.",
    segment: "Education",
    client: "Anand Niketan",
    location: "Sindhu Bhavan road, Ahmedabad",
    projectSize: "50,000 Sq. ft.",
    projectDes: "4 Floors, 20 Meters",
    projectYear: "2015",
    architect: "Kakani Associates",
    consultant: "Himanshu Parikh Consulting Engineers",
    scope: "RCC Framework,Structural Work , Finishing Work.",
  },
  {
    src: "/images/Projects/Institutional_projects/completed/3.png",
    title: "NARAYANA HRUDALAYA HOSPITAL",
    content: "NARAYANA HRUDALAYA HOSPITAL",
    segment: "Healthcare",
    client: "Narayana Hrudalaya Hospital",
    location: "Rakhial, Ahmedabad",
    projectSize: "2,00,000 Sq. ft.",
    projectDes: "4 Floors, 20 Meters",
    projectYear: "2011",
    architect: "Shapoorji Pallonji & Co. Ltd, Umesh & Co.",
    consultant: "Umesh & Co",
    scope: "Earthwork,RCC Framework,Masonry, Plaster.",
  },
];

const content = {

  title: "Institutional Projects",
  description: "Hitech delivers high-quality residential projects, creating homes that blend comfort with modern design. Each project reflects our commitment to excellence and attention to detail, ensuring a perfect living experience."

}
const Institutional = () => {
  return (
    <>
      <ProjectPage title={content.title} description={content.description} />
      <button className="projectButton">ONGOING PROJECTS</button>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper"  slidesPerView={3}>
        

          {institutionalprojectslist.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <CardComponent image={item.src} title={item.title} client={item.client} location={item.location} projectSize={item.projectSize} projectDes={item.projectDes}
                  projectYear={item.projectYear} architect={item.architect} consultant={item.consultant} scope={item.scope}
                />
              </SwiperSlide>)
          })}
        
      </Swiper>
      <button className="projectButton">COMPLETED PROJECTS</button>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper" slidesPerView={3}>
        
          {institutionalprojectscompleted.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <CardComponent key={index} image={item.src} title={item.title} client={item.client} location={item.location} projectSize={item.projectSize} projectDes={item.projectDes}
                  projectYear={item.projectYear} architect={item.architect} consultant={item.consultant} scope={item.scope}
                />
              </SwiperSlide>)

          })}
        
      </Swiper>
    </>
  )
}
export default Institutional;