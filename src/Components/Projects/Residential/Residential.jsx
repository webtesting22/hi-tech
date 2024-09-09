import React,{useState} from "react";
import { Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import ProjectPage from "../CommonProject/ProjectPage";
import CardComponent from "../../CardComponent/CardComponent";

const residentialList = [
  {
    src: "/images/Projects/residential/ongoing/1-4.png",
    title: "ARANYAM",
    content: "...",
    segment: "Residential",
    client: "Aaryan Developers",
    location: "Shilaj, Ahmedabad",
    projectSize: "18,61,168 Sq. ft.",
    projectDes: "21 Floors, 70 Meters",
    projectYear: "2023-Current",
    architect: "AAA Architects",
    consultant: "HNBS Associates",
    scope: "RCC Frame works, Block work, Plaster work",
  },
  {
    src: "/images/Projects/residential/ongoing/2-2.jpg",
    title: "THE BELLAGIO",
    content: "...",
    segment: "Residential",
    client: "Palak Group",
    location: "S. G. Highway, Ahmedabad",
    projectSize: "1,060,422 Sq. ft.",
    projectDes: "23 Floors, 85 Meters",
    projectYear: "2023-Current",
    architect: "Studio Mansi Shah",
    consultant: "HNBS Associates",
    scope: "Construction of 02 Basement+ G.F + 2 Podium+ HP + 20 floors of Residential Building. ",
  },
  {
    src: "/images/Projects/residential/ongoing/1-2.png",
    title: "CELESTE@GODREJ",
    content: "...",
    segment: "Residential",
    client: "Shree Siddhi Group",
    location: "Godrej Garden City, Ahmedabad",
    projectSize: "1,550,196 Sq. ft.",
    projectDes: "14 Floors, 55 Meters",
    projectYear: "2022-Current",
    architect: "Placekinesis Associates",
    consultant: "Japan Shah Consulting Engineers",
    scope: "RCC Framework, Masonry ,Plaster.",
  },
  // {
  //   src: "/images/Projects/residential/ongoing/Ikaria.png",
  //   title: "Ikaria - Easy Living",
  //   content: "...",
  //   segment: "Residential",
  //   client: "Alinea Properties LLP",
  //   location: "Adani Shantigram, Ahmedabad",
  //   projectSize: "2,24,000 Sq. ft.",
  //   projectDes: "-",
  //   projectYear: "2022-Current",
  //   architect: "Studio ARA",
  //   consultant: "N K Shah Consulting LLP",
  //   scope: "Civil Structure (Core & Shell) and Finishing works.",
  // },
  {
    src: "/images/Projects/residential/ongoing/1-3.png",
    title: "IKARIA - EASY LIVING",
    content: "...",
    segment: "Residential",
    client: "Alinea Properties LLP",
    location: "Adani Shantigram",
    projectSize: "2,24,000 Sq. ft.",
    projectDes: "13 Floors, 45 Meters",
    projectYear: "2022-Current",
    architect: "Studio ARA, Ahmedabad",
    consultant: "N K Shah Consulting LLP",
    scope: "Structural Work, RCC Framework, Finishing Work.",
  },
  {
    src: "/images/Projects/residential/ongoing/2.png",
    title: "GHARANA",
    content: "5 and 6 BHK Sky Villas of 22 floored structure.",
    segment: "Residential",
    client: "Sheetal Infrastructure",
    location: "Ambli, Ahmedabad",
    projectSize: "5,00,000 Sqft.",
    projectDes: "21 Floors, 75 Meters",
    projectYear: "2022-Current",
    architect: "ADS Architect",
    consultant: "Ducon Consultants",
    scope:
      "Structural Work , Diaphragm Wall , RCC Framework, Masonry ,Plaster.",
  },
  {
    src: "/images/Projects/residential/ongoing/3.png",
    title: "OEUVRE-2",
    content:
      "4 BHK spacious and luxurious apartments, the architectural design and modern amenities that Oeuvre-2 entails is remarkable.",
    segment: "Residential",
    client: "Madhav Oeuvre-2 LLP - Madhav Group",
    location: "Bodakdev, Amedabad",
    projectSize: "6,05,957 Sq. ft.",
    projectDes: "23 Floors, 85 Meters",
    projectYear: "2022-Current",
    architect: "H M Architects",
    consultant: "Setu Infrastructure",
    scope: "RCC Framework, Masonry ,Plaster.",
  },
  {
    src: "/images/Projects/residential/ongoing/4.png",
    title: "VENUS PASHMINA",
    content: "4 and 5 BHK regal Appartments.",
    segment: "Residential",
    client: "Sarthi Prospace LLP- Venus Lifespace Creators",
    location: "Bodakdev, Amedabad",
    projectSize: "8,89,160 Sq. ft.",
    projectDes: "21 Floors, 70 Meters",
    projectYear: "2022",
    architect: "H M Architects",
    consultant: "Setu Infrastructure",
    scope:
      "Structural Work , Diaphragm Wall , RCC Framework, Masonry ,Plaster.",
  },
  {
    src: "/images/Projects/residential/ongoing/5.png",
    title: "SUN ATMOSPHERE",
    content: "Sun Atmosphere are 2 to 3 BHK Appartments And Retail at Shela.",
    segment: "Residential",
    client: "Sun Realty",
    location: "Shela, Ahmedabad",
    projectSize: "1,25,000 Sq. ft.",
    projectDes: "14 Floors, 50 Meters",
    projectYear: "2022-Current",
    architect: "H M Architects",
    consultant: "Setu Infrastructure",
    scope:
      "Structural Work , Diaphragm Wall , RCC Framework, Masonry ,Plaster.",
  },
  // {
  //   src: "/images/Projects/residential/ongoing/Gharana.png",
  //   title: "Gharana",
  //   content: "...",
  //   segment: "Residential",
  //   client: "Sheetal Infrastructure",
  //   location: "Ambli, S G Highway, Ahmedabad",
  //   projectSize: "4,93,802 Sq. ft.",
  //   projectDes: "-",
  //   projectYear: "2021-Current",
  //   architect: "ADS Architect P L",
  //   consultant: "Ducon Consultants P L",
  //   scope: "Civil works for R.C.C. Core and shell work Package which shal1 be include Excavation and backfilling, Capping beam and finishing of D wall, RCC works , Block work, Plaster.",
  // },
  // {
  //   src: "",
  //   title: "Dharohar",
  //   content: "...",
  //   segment: "Residential",
  //   client: "MAHICA PROCON PRIVATE LIMITED",
  //   location: "Vaishnovdevi Circle, Ahmedabad",
  //   projectSize: "16,92,477 Sq. ft.",
  //   projectDes: "-",
  //   projectYear: "2024-Current",
  //   architect: "Hiren Patel & Associates",
  //   consultant: "Setu Infrastructure",
  //   scope: "RCC Frame works, Block work, Plaster work for Residential Building 3B+G+22 Floors (5 Towers).",
  // },
  // {
  //   src: "",
  //   title: "Supercity Luxuria 3",
  //   content: "...",
  //   segment: "Residential",
  //   client: "Shrinivas Organisors Pvt ltd.",
  //   location: "Bhadaj, Ahmedabad",
  //   projectSize: "4,44,723 Sq. ft.",
  //   projectDes: "-",
  //   projectYear: "2024-Current",
  //   architect: "9th Street Architech",
  //   consultant: "NK shah Consultant",
  //   scope: "RCC Frame works, Block work, Plaster works for Residential  Building 3 basement + G.F + 20 Floors (2 Towers).",
  // },

  // {
  //   src: "/images/Projects/residential/ongoing/Oeuvre.png",
  //   title: "Oeuvre -2",
  //   content: "...",
  //   segment: "Residential",
  //   client: "Madhav Associates",
  //   location: "Rajpath Club, Bodakdev, Amedabad",
  //   projectSize: "6,05,957 Sq. ft.",
  //   projectDes: "-",
  //   projectYear: "2021-Current",
  //   architect: "HM Architects",
  //   consultant: "Setu Infrastructure",
  //   scope: "Construction of residential building with material having 2 no of Basement (with 107 stores with plaster) + G.F. + P-1 + P-2 + H.P- + Typical 22 floors as below considerations including parapet terrace cabin, water tank (UGWT & OHWT).",
  // },

  // {
  //   src: "/images/Projects/residential/ongoing/VenusPashmina.png",
  //   title: "Venus Pashmina",
  //   content: "...",
  //   segment: "Residential",
  //   client: "Venus Lifespace Creators",
  //   location: "Rajpath Club, Bodakdev, Amedabad",
  //   projectSize: "8,89,160 Sq. ft.",
  //   projectDes: "-",
  //   projectYear: "2020-Current",
  //   architect: "HM Architects",
  //   consultant: "Setu Infrastructure",
  //   scope: "Civil works for Earthwork ( Excavation, Dressing and Back Filling) , Capping Beam on Diaphragm Wall, PCC Work, RCC Frame Structure including Shuttering & Reinforcement steel work with coupler joint,Block Masonry work with single RCC Bend,Plaster & Rendering work.",
  // },


  // {
  //   // src: "/images/Projects/residential/ongoing/1.png",
  //   title: "Secuirty Housing for RIL",
  //   content: "...",
  //   segment: "Residential",
  //   client: "Reliance Industries Ltd.",
  //   location: "Moti Khavdi, Jamnagar",
  //   projectSize: "115,000 Sq. ft.",
  //   projectYear: "2022-Current",
  //   architect: "PVDRS",
  //   consultant: "PVDRS",
  //   scope:
  //     "Civil works for RCC Core and Shell , waterproofing, masonry, all in-building MEP, interior finishing works",
  // },
  // {
  //   src: "/images/Projects/residential/ongoing/1.png",
  //   title: "Secuirty Housing for RIL",
  //   content: "...",
  //   segment: "Residential",
  //   client: "Reliance Industries Ltd.",
  //   location: "Moti Khavdi, Jamnagar",
  //   projectSize: "36,338 Sq. ft.",
  //   projectYear: "2021-Current",
  //   architect: "PVDRS",
  //   consultant: "PVDRS",
  //   scope:
  //     "Civil works for RCC Core and Shell , waterproofing, masonry, all in-building MEP, interior finishing works",
  // },




];
const residentialCompletedList = [

  {
    src: "/images/Projects/residential/completed/12.jpeg",
    title: "SECURITY STAFF HOUSING",
    content:
      "Security Staff Housing Complex project at Jamnagar-LC 01, LC 04 and LC 10",
    segment: "Residential",
    client: "Reliance Industries Ltd",
    location: "Jamnagar",
    projectSize: "281,000 Sq. ft.",
    projectDes: "2 Floors, 12 Meters",
    projectYear: "2020-2023",
    architect: "PVDRS, Ahmedabad",
    consultant: "PVDRS, Ahmedabad",
    scope:
      "Structural Work, RCC Framework, Masonry,Plaster, MEP, Finishing Work.",
  },
  {
    src: "/images/Projects/residential/ongoing/7.png",
    title: "THE WATERFALL",
    content:
      "The waterfall project by Armaan Infrastucture is a high-end luxurious apartment scheme constructed at Ambli Road",
    segment: "Residential",
    client: "Armaan Developer",
    location: "Ambli, Ahmedabad",
    projectSize: "4,55,000 Sq. ft.",
    projectDes: "11 Floors, 45 Meters",
    projectYear: "2022",
    architect: "Scarlett Design",
    consultant: "Ducon Consultant Pvt Ltd",
    scope: "Structural Work, RCC Framework, MEP, Finishing Work.",
  },
  {
    src: "/images/Projects/residential/ongoing/6.png",
    title: "ALPHABET A",
    content: "4 BHK, 5 BHK class-apart lifestyle apartments",
    segment: "Residential",
    client: "Jaydeep Buildcon LLP",
    location: "Bhat, Gandhinagar",
    projectSize: "1,00,000 Sq. ft.",
    projectDes: "9 Floors, 33 Meters",
    projectYear: "2022",
    architect: "9th Street Architects",
    consultant: "Bhoomi Consultants",
    scope: "Earthwork,Structural Work,RCC Framework,Masonry, Plaster.",
  },
  {
    src: "/images/Projects/residential/completed/1.png",
    title: "ARVIND AAVISHKAR",
    content:
      "Arvind Aavishkaar is a residential development constructed by Arvind Smartspaces.",
    client: "Arvind Smartspaces",
    location: "Naroda, Ahmedabad",
    projectSize: "6,10,000 Sqft.",
    projectDes: "14 Floors, 44 Meters",
    projectYear: "2022",
    architect: "Jagrut And Partners LLP",
    consultant: "Alpha consultancy services",
    scope: "Structural Work, RCC Framework, MEP, Finishing Work.",
  },
  {
    src: "/images/Projects/residential/completed/2.png",
    title: "SUN SKY PARK",
    content:
      "Welcome to a new perspective to city living in Ahmedabad through Community, Central Park, Club, Homes, Penthouse etc.",
    client: "Shilp Developers - Sun Builders",
    location: "Ambli, Ahmedabad",
    projectSize: " 8,41,464 Sq. ft.",
    projectDes: "22 Floors, 70 Meters",
    projectYear: "2020",
    architect: "Placekinesis Associates",
    consultant: "Setu Infrastructure",
    scope: "RCC Framework, Masonry ,Plaster , MEP , Finishing Work.",
  },
  {
    src: "/images/Projects/residential/completed/3.png",
    title: "INDRAPRASTH GULMOHAR",
    content:
      "Indraprasth Gulmohar is a name that will make the difference between elite and everyone else.",
    client: "Deep Group",
    location: "Vastrapur, Ahmedabad",
    projectSize: "5,00,000 Sq. ft.",
    projectDes: "14 Floors, 45 Meters",
    projectYear: "2019",
    architect: "Hiren Patel Architects",
    consultant: "Setu Infrastructure",
    scope: "RCC Framework, Masonry ,Plaster.",
  },
  {
    src: "/images/Projects/residential/completed/4.png",
    title: "THE BANYAN",
    content:
      "For the first time in Gujarat, Quintessentially, the world’s leading luxury lifestyle concierge service is now at ‘The Banyan’.",
    client: "Suryam Group",
    location: "Ashok Vatika, Bodakev, Ahmedabad",
    projectSize: "  2,10,000 Sq. ft.",
    projectDes: "12 Floors, 45 Meters",
    projectYear: "2018",
    architect: "Design Module",
    consultant: "N.K. Shah Consulting Engineers LLP",
    scope: "RCC Framework, Masonry ,Plaster,Finishing Work.",
  },
  {
    src: "/images/Projects/residential/completed/5.png",
    title: "ONE49",
    content:
      "ONE49, an iconic high-rise residential development is one of the most sought after neighborhoods in Ahmedabad today.",
    client: "Amaya Properties Group",
    location: "Ambli, Ahmedabad",
    projectSize: "4,00,000 Sq. ft.",
    projectDes: "19 Floors, 70 Meters",
    projectYear: "2018",
    architect: "ONG AND ONGS",
    consultant: "N.K. Shah Consulting Engineers LLP",
    scope: "RCC Framework, Masonry ,Plaster,Finishing Work.",
  },
  {
    src: "/images/Projects/residential/completed/6.JPG",
    title: "SUN EVOQ",
    content:
      "The project offers residential units with top class specifications that meet the expectations of the lifestyle of the urban.",
    client: "Shilp Developers",
    location: "Bodakdev, Ahmedabad",
    projectSize: "1,25,000 Sq. ft.",
    projectDes: "13 Floors, 45 Meters",
    projectYear: "2017",
    architect: "MODO Designs",
    consultant: "Umang Patel",
    scope: "RCC Framework , Masonry , Plaster , MEP, Finishing Work.",
  },
  {
    src: "/images/Projects/residential/completed/7.png",
    title: "YASH ARIAN",
    content:
      "Yash Arian is a project with several modern amenities.It comes with a total of 204 spacious and luxurious apartments.",
    client: "Yash Arian Infra LLP",
    location: "Memnagar, Ahmedabad",
    projectSize: "4,50,000 Sq. ft.",
    projectDes: "14 Floors, 42 Meters",
    projectYear: "2017",
    architect: "Design Studio",
    consultant: "N.K. Shah Consulting Engineers LLP",
    scope: "RCC Framework, Masonry ,Plaster.",
  },
  {
    src: "/images/Projects/residential/completed/8.png",
    title: "SLUM REHABILITATION",
    content:
      "A 2,10,000 Sqft project to help nearly 1200 families living in the slums of Amraiwadi with a one-BHK flat with good drainage and supply of drinking water.",
    client: "H N Safal",
    location: "Amraiwadi, Ahmedabad",
    projectSize: "2,10,000 Sq. ft.",
    projectDes: "-",
    projectYear: "2015",
    architect: "Design Module",
    consultant: "Design Module",
    scope: "Structural Work,RCC Framework, MEP, Finishing Work.",
  },
  {
    src: "/images/Projects/residential/completed/9.jpg",
    title: "APPLEWOODS",
    content:
      "The Applewoods township consists of 400 luxurious bungalows accommodated in a plush green environment occupied with open garden spaces, parks and lakes.",
    client: "Goyal Safal Developers",
    location: "Shela, Ahmedabad",
    projectSize: "9,00,000 Sq. ft.",
    projectDes: "16 Floors, 60 Meters",
    projectYear: "2013",
    architect: "Apurva Amin",
    consultant: "N.K. Shah Consulting Engineers LLP",
    scope: "RCC Framework, Masonry ,Plaster.",
  },
  {
    src: "/images/Projects/residential/completed/10.png",
    title: "SHALVIK SHUKAN",
    content:
      "Shalvik Shukan by Aakar Developers offers a total of 132 well-planned and world class residential units with top line specifications.",
    client: "Aakar Developers",
    location: "Vavol, Gandhinagar",
    projectSize: "3,00,000 Sq. ft.",
    projectDes: "-",
    projectYear: "2013",
    architect: "Neha Consultants",
    consultant: "N.K. Shah Consulting Engineers LLP",
    scope: "RCC Framework, Structural Work.",
  },
  {
    src: "/images/Projects/residential/completed/11.png",
    title: "SHALVIK HOMES",
    content:
      "Shalvik Homes by Aakar Developers offers 53 residential bungalows with common plots and play area.",
    client: "Aakar Developers",
    location: "Vavol, Gandhinagar",
    projectSize: "1,00,000 Sq. ft.",
    projectDes: "-",
    projectYear: "2010",
    architect: "Consultants",
    consultant: "N.K. Shah Consulting Engineers LLP",
    scope: "RCC Framework, Structural Work.",
  },
];
const content = {

  title: "Residential Projects",
  description: "Hitech delivers high-quality residential projects, creating homes that blend comfort with modern design. Each project reflects our commitment to excellence and attention to detail, ensuring a perfect living experience."

}
const Residential = () => {
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
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper" slidesPerView={3}  >
        {residentialList.map((item, index) => {
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

          {residentialCompletedList.map((item, index) => {
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
export default Residential;