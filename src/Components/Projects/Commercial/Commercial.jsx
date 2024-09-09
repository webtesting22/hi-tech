import React,{useState} from 'react';
import ProjectPage from "../CommonProject/ProjectPage";
import CardComponent from "../../CardComponent/CardComponent";
import { Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Col } from "antd";
const commerciallist = [
  {
    src: "images/Projects/commercial/ongoing/1-1.jpeg",
    title: "SHARANAM SQUARE",
    content: "...",
    client: "SHARANAM SQUARE LLP",
    location: "Khokhara, Ahmedabad",
    projectSize: "2,75,000 Sq. ft.",
    projectDes: "2 Floors, 12 Meters",
    projectYear: "2022-Current",
    architect: "99 Studio",
    consultant: "Shreeji Consultant",
    scope: "Civil Construction with Finishing Work of commercial building of B+G+2 storey (2 Blocks).",
  },
  {
    src: "images/Projects/commercial/ongoing/1-3.png",
    title: "REGALIA",
    content: "...",
    client: "Nakshatra Infracon",
    location: "GIFT City, Gandhinagar",
    projectSize: "526,000 Sq. ft.",
    projectDes: "29 Floors, 122 Meters",
    projectYear: "2022-Current",
    architect: "Neha Consultants",
    consultant: "J W Consultants LLP",
    scope: "Civil works, Masonry & Plaster, and Waterproofing.",
  },
  {
    src: "images/Projects/commercial/ongoing/1-1.jpg",
    title: "THE PROFIT",
    content: "...",
    client: "The Building Company",
    location: "Adajan, Surat",
    projectSize: "159,174 Sq. ft.",
    projectDes: "10 Floors, 45 Meters",
    projectYear: "2022",
    architect: "Tathastu",
    consultant: "SNV Engineers",
    scope: " RCC Framework, Masonry,Plaster.",
  },
  {
    src: "images/Projects/commercial/ongoing/1-4.png",
    title: "FLEXONE",
    content: "...",
    client: "Waystar Properties LLP",
    location: "GIFT City, Gandhinagar",
    projectSize: "563,000 Sq. ft.",
    projectDes: "20 Floors, 90 Meters",
    projectYear: "2022-Current",
    architect: "Studio ARA",
    consultant: "N K Shah Consulting LLP",
    scope: " RCC Framework, Finishing Work.",
  },
  {
    src: "images/Projects/commercial/ongoing/1-5.JPEG",
    title: "SHARNAM METROLINK",
    content: "Commercial projects at Khokhara, Ahmedabad",
    client: "Sharnam Metrolinks LLP",
    location: "Khokhara, Ahmedabad",
    projectSize:
      "4,91,000 Sq. ft. 7 Buildings (B+G+4 Floors) 2 Buildings (B+G+5 Floors)",
    projectDes: "5 Floors, 22.5 Meters",
    projectYear: "2022-Current",
    architect: "99 Studio",
    consultant: "S3M Design Consultants LLP",
    scope: "Structual Work, RCC Framework, Masonry ,Plaster , Painting.",
  },
];
const commercialcompleted = [

  // {
  //   src: "images/Projects/commercial/ongoing/2.png",
  //   title: "TORRENT POWER “B” STATION",
  //   content:
  //     "Torrent power, one of the largest integrated private sector power utilities in the country, is coming up with its Power supply center (PSC), Customer service (CS), Plug point and other applied work at 'B' station premises, Katargam Surat.",
  //   client: "Torrent Power Ltd",
  //   projectSize: "1,11,000 SQFT.",
  //   projectYear: "2022-Current",
  //   architect: "Munjal Bhatt",
  //   consultant: "S3M Design Consultants LLP",
  //   scope: "Civil Structure Work",
  // },
  // {
  //   src: "images/Projects/commercial/ongoing/3.png",
  //   title: "TORRENT POWER 'E' STATION",
  //   content:
  //     "Torrent power, one of the largest integrated private sector power utilities in the country, is coming up with its Power supply center, TSD Workshop, Plug point and other applied work at 'E' station premises, Varachha Surat.",
  //   client: "Torrent Power Ltd",
  //   location: "Varachha, Surat",
  //   projectSize: "50,000 SQFT.",
  //   projectYear: "2022-Current",
  //   architect: "Munjal Bhatt",
  //   consultant: "S3M Design Consultants LLP",
  //   scope: "Civil Structure Work",
  // },
  // {
  //   src: "images/Projects/commercial/ongoing/4.png",
  //   title: "TORRENT POWER LTD. ",
  //   content:
  //     "Torrent power, one of the largest integrated private sector power utilities in the country, is coming up with its HT PSC building and meter Lab building at Naranpura, Ahmedabad.",
  //   client: "Torrent Power Ltd",
  //   location: "NARANPURA",
  //   projectSize: "1,70,000 SQFT.",
  //   projectYear: "2022-Current",
  //   architect: "Munjal Bhatt",
  //   consultant: "Ducon Consultant Pvt Ltd",
  //   scope: "Civil Structure Work with all services",
  // },
  // {
  //   src: "images/Projects/commercial/ongoing/5.png",
  //   title: "TORRENT POWER LTD.",
  //   content:
  //     "Torrent power, one of the largest integrated private sector power utilities in the country, is coming up with its PSC building And Plug point building at Odhav.",
  //   client: "Torrent Power Ltd",
  //   location:"Odhav, Gujarat",
  //   projectSize: "1,10,000 SQFT.",
  //   projectYear: "2022-Current",
  //   architect: "Munjal Bhatt",
  //   consultant: " Ducon Consultant Pvt Ltd",
  //   scope: "Civil Structure Work with all services",
  // },
  // {
  //   src: "images/Projects/commercial/ongoing/6.png",
  //   title: "WEST GATE 'E' BLOCK",
  //   client: "AADHAN BUILDERS LLP.",
  //   projectSize: "35,000 SQFT. (3B+GF +07 Floors)",
  //   projectYear: "2022-Current",
  //   architect: "ADS Architects Pvt Ltd",
  //   consultant: "-",
  //   scope: "Civil Structure Work with all services",
  // },
  {
    src: "images/Projects/commercial/completed/1.png",
    title: "AHMEDABAD ONE MALL-II",
    content:
      "Ahmedabad One mall (Nexus Malls, A group of Blackstone), is the city's iconic shopping destination and it entered into constructing phase2 building with wellknown F&B and Retail brands.",
    segment: "Corporate",
    client: "Ruchi Malls Pvt. Ltd.",
    location: "Vastrapur, Ahmedabad",
    projectSize: " 2,00,000 Sq. ft.",
    projectDes: "4 Floors, 15 Meters",
    projectYear: "2022",
    architect: "Bentel Associates",
    consultant: "TPC Technical Projects Consultants",
    scope: "RCC Framework , Masonry, Plaster, Fabrication.",
  },
  {
    src: "images/Projects/commercial/completed/2.png",
    title: "KP EPITOME",
    content:
      "KP Epitome is a commercial development, providing perfectly built work spaces and commercial shops having 3 towers of 2B+G+14 And 8 towers of 2B+G+3.",
    segment: "Commercial",
    client: "Kish Developers",
    location: "Makarba, Ahmedabad",
    projectSize: "6,50,000 Sq. ft.",
    projectDes: "14 Floors, 45 Meters",
    projectYear: "2021",
    architect: "99 Studio",
    consultant: "P-Cube Consultant",
    scope: "RCC Framework, Masonry ,Plaster.",
  },
  {
    src: "images/Projects/commercial/completed/13.jpg",
    title: "SUN WEST BANK",
    content:
      "Sun Westbank is one of the commercial developments offering spacious and skillfully designed office spaces and commercial shops.",
    segment: "Commercial",
    client: "Nirguna Infrastructure LLP",
    location: "Ashram Rd, Ahmedabad",
    projectSize: "6,50,000 Sq. ft.",
    projectDes: "13 Floors, 45 Meters",
    projectYear: "2021",
    architect: "HM Architect",
    consultant: "SETU Infrastructure",
    scope: "RCC Framework , Masonry , Plaster , MEP,Finishing Work.",
  },
  {
    src: "images/Projects/commercial/completed/14.jpg",
    title: "SHARNAM SOLITAIRE",
    content:
      "A world class business centre designed to harness opportunities with its 3 Towers comprising of 1B+G+4 measuring upto a total of 2,80,000 sq ft.",
    segment: "Commercial",
    client: "Sharnam Solitaire LLP",
    location: "Khokhara, Ahmedabad",
    projectSize: "2,25,000 Sq. ft.",
    projectDes: "4 Floors, 26 Meters",
    projectYear: "2021",
    architect: "99 Studio",
    consultant: "Millimeter Designs",
    scope: "RCC Framework, Masonry ,Plaster,Finishing Work.",
  },
  {
    src: "images/Projects/commercial/completed/5.png",
    title: "SHARNAM SMART SPACE",
    content:
      "A world class business centre designed to harness opportunities with its five Towers comprising of 2B+G+4 measuring upto a total of 4,25,000 sq ft.",
    segment: "Commercial",
    client: "SHARANAM SMART SPACE LLP",
    location: "Amraiwadi, Ahmedabad",
    projectSize: "4,25,000 Sq. ft.",
    projectDes: "4 Floors, 20 Meters",
    projectYear: "2019",
    architect: "99 studio",
    consultant: "Millimeter designs",
    scope: "RCC Framework,Structural Work , Finishing Work.",
  },
  {
    src: "images/Projects/commercial/completed/6.jpg",
    title: "WESTGATE D BLOCK",
    content:
      "Westgate brings all the goodness from the heavenly powers to its occupants, a 20 storey building with 70 mt. height, 8 high speed Mitsubishi lifts and ample car parking.",
    segment: "Commercial",
    client: "Aadhan Builders Pvt Ltd.",
    location: "SG Highway, Ahmedabad",
    projectSize: "4,85,000 Sq. ft.",
    projectDes: "23 Floors, 70 Meters",
    projectYear: "2019",
    architect: "ADS Architects Pvt Ltd",
    consultant: "N.K. Shah Consulting Engineers LLP",
    scope: "RCC Framework, Masonry ,Plaster.",
  },
  {
    src: "images/Projects/commercial/completed/7.png",
    title: "SHIVALIK SHILP II",
    content:
      "Shivalik Shilp II, a magnificient architecture for the city is a perfect commercial place near Keshavbaug, Ahmedabad having 588 sqft of offices and 2289 sqft of showrooms.",
    segment: "Commercial",
    client: "Shilp Developers",
    location: "Vastrapur, Ahmedabad",
    projectSize: "4,72,000 Sq. ft.",
    projectDes: "13 Floors, 48 Meters",
    projectYear: "2019",
    architect: "INI Design Studio",
    consultant: "Ducon Consultant Pvt Ltd",
    scope: "RCC Framework, Masonry ,Plaster.",
  },
  {
    src: "images/Projects/commercial/completed/8.png",
    title: "RATNAAKAR NINE SQUARE",
    content:
      "Experience a fully furnished business center enabled with the best of form and function, to deliver everything you need.",
    segment: "Commercial",
    client: "NCLP Infracon LLP",
    location: "Vastrapur, Ahmedabad",
    projectSize: "6,00,000 Sq. ft.",
    projectDes: "13 Floors, 48 Meters",
    projectYear: "2018",
    architect: "ADS Architect Pvt Ltd",
    consultant: "Ducon Consultant Pvt Ltd",
    scope: "RCC Framework, Masonry ,Plaster.",
  },
  {
    src: "images/Projects/commercial/completed/9.png",
    title: "WESTGATE BUSINESS BAY",
    content:
      "Spread across two towers, Westgate Business Bay is a sought-after commercial project loaded with all the conveniences.",
    segment: "Commercial",
    client: "Aadhan Builders Pvt Ltd.",
    location: "SG Highway, Makarba, Ahmedabad",
    projectSize: "5,36,000 Sq. ft.",
    projectDes: "16 Floors, 54 Meters",
    projectYear: "2018",
    architect: "ADS Architect Pvt Ltd",
    consultant: "N.K. Shah Consulting Engineers LLP",
    scope: "RCC Framework, Masonry ,Plaster.",
  },
  {
    src: "images/Projects/commercial/completed/10.png",
    title: "YASH ARIAN",
    content:
      "Yash Arian comes with a total of 204 luxurious apartments measuring 4,50,000 Sq ft designed by Perkins Eastman, US.",
    segment: "Commercial",
    client: "Yash Arian Infra LLP",
    projectSize: "4,50,000 Sq. ft.",
    projectDes: "14 Floors, 42 Meters",
    projectYear: "2017",
    architect: "Design Studio",
    consultant: "N.K. Shah Consulting Engineers LLP",
    scope: "RCC Framework, Masonry ,Plaster.",
  },
  {
    src: "images/Projects/commercial/completed/11.png",
    title: "SUMEL 8",
    content:
      "Well designed by H N Safal, Sumel 8 shelters 11 high rise towers with 1983 units that are highly impressive.",
    segment: "Commercial",
    client: "H N Safal",
    location: "Rakhial, Ahmedabad",
    projectSize: "16,00,000 Sq. ft.",
    projectDes: "5 Floors, 21 Meters",
    projectYear: "2017",
    architect: "ADS Architects Pvt Ltd",
    consultant: "N.K. Shah Consulting Engineers LLP",
    scope: "RCC Framework, Masonry ,Plaster,Finishing Work.",
  },
  {
    src: "images/Projects/commercial/completed/12.jpg",
    title: "WESTGATE",
    content:
      "Conceptualized by True Value Nirman, West Gate, Ahmedabad, Gujarat offers a total of 273 fully functional commercial offices with ultra-modern facilities.",
    segment: "Commercial",
    client: "Aadhan Builders Pvt Ltd",
    location: "SG Highway, Ahmedabad",
    projectSize: "5,00,000 Sq. ft.",
    projectDes: "23 Floors, 70 Meters",
    projectYear: "2014",
    architect: "ADS Architects Pvt Ltd",
    consultant: "N.K. Shah Consulting Engineers LLP",
    scope: "RCC Framework, Masonry ,Plaster.",
  },
  // {
  //   src: "images/Projects/commercial/completed/12.png",
  //   title: "SUMEL BUSINESS PARK IV 5 ",
  //   content: "...",
  //   segment: "Commercial",
  //   client: "Aadhan Builders Pvt Ltd",
  //   location: "Saraspur, Ahmedabad",
  //   projectSize: "5,00,000 Sqft.",
  //   projectYear: "2014",
  //   architect: "ADS Architects Pvt Ltd",
  //   consultant: "N.K. Shah Consulting Engineers LLP",
  //   scope:
  //     "Civil Construction work of RCC Frame, Block Masonry Plaster work & Finishing Works of Commercial Building of B+G+4 Storey (5 Blocks).",
  // },

  // {
  //   src: "images/Projects/commercial/completed/12.png",
  //   title: "Mondeal Business Park",
  //   content: "...",
  //   segment: "Commercial",
  //   client: "Aadhan Builders Pvt Ltd",
  //   location: "SG Highway, Ahmedabad",
  //   projectSize: "5,00,000 Sqft.",
  //   projectYear: "2011",
  //   architect: "ADS Architects Pvt Ltd",
  //   consultant: "N.K. Shah Consulting Engineers LLP",
  //   scope:
  //     "Civil Construction work of RCC Frame, Block Masonry Plaster works of Commercial Building.",
  // },
];
const content = {

  title: "Commercial Projects",
  description: "Hitech delivers high-quality residential projects, creating homes that blend comfort with modern design. Each project reflects our commitment to excellence and attention to detail, ensuring a perfect living experience."

}
const Commercial = () => {
  const [selectedTab, setSelectedTab] = useState("ongoing"); // Initial tab state

  return (
    <>

      <ProjectPage title={content.title} description={content.description} />
      <button
        className={`projectButton ${selectedTab === "ongoing" ? "active" : ""}`}
        onClick={() => setSelectedTab("ongoing")}
      >
        ONGOING PROJECTS
      </button>
      <button
        className={`projectButton ${selectedTab === "completed" ? "active" : ""}`}
        onClick={() => setSelectedTab("completed")}
      >
        COMPLETED PROJECTS
      </button>
      {selectedTab === "ongoing" && (
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper" slidesPerView={3}>
        {commerciallist.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <CardComponent image={item.src} title={item.title} client={item.client} location={item.location} projectSize={item.projectSize} projectDes={item.projectDes}
                projectYear={item.projectYear} architect={item.architect} consultant={item.consultant} scope={item.scope}
              />
            </SwiperSlide>)
        })}

      </Swiper>
      )}
      {selectedTab === "completed" && (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper" slidesPerView={3}>

          {commercialcompleted.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <CardComponent key={index} image={item.src} title={item.title} client={item.client} location={item.location} projectSize={item.projectSize} projectDes={item.projectDes}
                  projectYear={item.projectYear} architect={item.architect} consultant={item.consultant} scope={item.scope}
                />
              </SwiperSlide>)

          })}

        </Swiper>)}
    </>
  )
}
export default Commercial;