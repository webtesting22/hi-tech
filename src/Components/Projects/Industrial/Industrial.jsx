import React from "react";
import ProjectPage from "../CommonProject/ProjectPage";
const content = {

    title: "Industrial Projects",
    description: "Hitech delivers high-quality residential projects, creating homes that blend comfort with modern design. Each project reflects our commitment to excellence and attention to detail, ensuring a perfect living experience."

}
const industriallist = [
    {
      src: "",
      title: "Harsha Enginners Manufactuing Plan",
      segment: "Industrial",
      client: "HARSHA ENGINEERS ADVANTEK LIMITED",
      location: "Bhayala, Ahmedabad",
      architect: "Shah & Talati",
      consultant: "Shah & Talati",
      projectSize: "- Sq. ft.",
      projectDes: "-",
      projectYear: "2022-Current",
      scope: "Civil, Plumbing & Finishing , Aluminium & Infra Works for the Manufacturing Plant & Associated Works ",
    },
    {
      src: "",
      title: "KHS Machinery Expansion works",
      segment: "Industrial",
      client: "KHS Machinery",
      location: "Hirapur, Ahmedabad",
      architect: "S3M Consultants",
      consultant: "S3M Consultants",
      projectSize: "- Sq. ft.",
      projectDes: "-",
      projectYear: "2022-Current",
      scope: "Civil, Plumbing & Finishing , Aluminium & Infra Works for expansion project of Plant Building",
    },
    {
      src: "",
      title: "Construction of 66kV SS at Katargam",
      segment: "Industrial",
      client: "Torrent Power Ltd",
      location: "Katargam, Surat",
      architect: "Munjal Bhatt Architects",
      consultant: "S3M Design Consultants LLP",
      projectSize: "69,481  Sq. ft.",
      projectDes: "30 Meters",
      projectYear: "2022-Current",
      scope: "Civil, Plumbing and Finishing works for Torrent Substation",
    },
    
    // {
    //   src: "Sources/images/prouctlist/industrial/ongoing/1-2.jpeg",
    //   title: "TORRENT POWER “B” STATION",
    //   segment: "Industrial",
    //   client: "Torrent Power Ltd",
    //   location: "Katargam, Surat",
    //   architect: "Munjal Bhatt Architects",
    //   consultant: "S3M Design Consultants LLP",
    //   projectSize: "111,000  Sq. ft.",
    //   projectDes: "30 Meters",
    //   projectYear: "2022-Current",
    //   scope: "RCC Framework, Plumbing, Finishing Work.",
    // },
  ];
  const industrialcompleted = [
    {
      src: "Sources/images/prouctlist/industrial/ongoing/1-2.jpeg",
      title: "Torrent B station at Katargam, Surat",
      segment: "Industrial",
      client: "Torrent Power Ltd",
      location: "Katargam, Surat",
      architect: "Munjal Bhatt Architects",
      consultant: "S3M Design Consultants LLP",
      projectSize: "1,11,000  Sq. ft.",
      projectDes: "30 Meters",
      projectYear: "2022",
      scope: "Civil, Plumbing and Finishing works for Torrent B station",
    },
    {
      src: "Sources/images/prouctlist/industrial/completed/17.jpg",
      title: "TORRENT POWER 'E' STATION",
      content:
        "Torrent power, one of the largest integrated private sector power utilities in the country, is coming up with its Power supply center, TSD Workshop, Plug point and other applied work at 'E' station premises, Varachha Surat.",
      client: "Torrent Power Ltd",
      location: "Varachha, Surat",
      projectSize: "50,000 Sq. ft.",
      projectDes: "25.44 Meters",
      projectYear: "2022",
      architect: "Munjal Bhatt",
      consultant: "S3M Design Consultants LLP",
      scope: "RCC Framework, Plumbing, Finishing Work.",
    },
    {
      src: "Sources/images/prouctlist/commercial/ongoing/4.png",
      title: "TORRENT POWER LTD. ",
      content:
        "Torrent power, one of the largest integrated private sector power utilities in the country, is coming up with its HT PSC building and meter Lab building at Naranpura, Ahmedabad.",
      client: "Torrent Power Ltd",
      location: "NARANPURA",
      projectSize: "1,70,000 Sq. ft.",
      projectDes: "45 Meters",
  
      projectYear: "2022",
      architect: "Munjal Bhatt",
      consultant: "Ducon Consultant Pvt Ltd",
      scope: "RCC Framework, Plumbing, Finishing Work.",
    },
    {
      src: "Sources/images/prouctlist/commercial/ongoing/5.png",
      title: "TORRENT POWER LTD.",
      content:
        "Torrent power, one of the largest integrated private sector power utilities in the country, is coming up with its PSC building And Plug point building at Odhav.",
      client: "Torrent Power Ltd",
      location: "Odhav, Gujarat",
      projectSize: "1,10,000 Sq. ft.",
      projectDes: "25.44 Meters",
      projectYear: "2022",
      architect: "Munjal Bhatt",
      consultant: " Ducon Consultant Pvt Ltd",
      scope: "RCC Framework, Plumbing, Finishing Work.",
    },
   
    {
      src: "Sources/images/prouctlist/industrial/completed/1.png",
      title: "TORRENT SUBSTATION",
      content:
        "Torrent power, one of the largest integrated private sector power utilities in the country, is coming up with its 400KV and 200KV GIS building at Dholera.",
      client: "Torrent Power Ltd",
      location: "Dholera, Gujarat",
      segment: "Industrial",
      projectSize: "75,000 Sq. ft.",
      projectDes: "15 Meters",
      projectYear: "2022",
      architect: "Munjal Bhatt Architects",
      consultant: "TCS",
      scope: "Structural Work , RCC Framework , Electrical Work.",
    },
    {
      src: "Sources/images/prouctlist/industrial/completed/2.png",
      title: "FINECURE PHARMACEUTICALS LTD",
      content:
        "Finecure Pharmaceuticals Limited is leading manufacturers and marketers of Pharmaceutical formulations and Nutraceuticals and its coming up with its Pharma building at Arvind Mega Park, Ahmedabad.",
      segment: "Industrial",
      client: "Finecure Pharmaceuticals Ltd",
      location: "Arvind Megapark, Changodar",
      projectSize: "35,000 Sq. ft.",
      projectDes: "-",
      projectYear: "2019",
      architect: "N.K.Shah",
      consultant: "N.K.Shah",
      scope:
        "Structural Work , RCC Framework , Finishing Work , Infrastructural Work.",
    },
    {
      src: "Sources/images/prouctlist/industrial/completed/3.png",
      title: "HARSHA ENGINEERING",
      content:
        "Harsha Engineering opened its new plant of 50,000 Sqft designed by VMS Engineering.",
      segment: "Industrial",
      client: "Harsha Engineers Ltd.",
      location: "Chandgodar, Ahmedabad",
      projectSize: " 50,000 Sq. ft.",
      projectDes: "12 Meters",
      projectYear: "2019",
      architect: "VMS Engineering And Design Services Pvt. Ltd.",
      consultant: "VMS Engineering And Design Services Pvt. Ltd.",
      scope: "Structural Work RCC Framework, Finishing Work.",
    },
    {
      src: "Sources/images/prouctlist/industrial/completed/4.png",
      title: "HIGH TEMP FURNACES",
      content:
        "HIGHTEMP, a leading manufacturer of furnaces opens its plant of 1,00,000 Sq ft in Sanand, Gujarat designed by VBT Consortium.",
      segment: "Furnace Plant",
      client: " High Temp Furnaces Ltd",
      location: "Sanand, Gujarat",
      projectSize: "1,00,000 Sq. ft.",
      projectDes: "-",
      projectYear: "2018",
      architect: "M/s VBT Consortium",
      consultant: "Base Engineering Services",
      scope:
        "Structural Work , RCC Framework , Finishing Work , Infrastructural Work.",
    },
    {
      src: "Sources/images/prouctlist/industrial/completed/5.png",
      title: "TECHNICO INDUSTRIES",
      content:
        "Technico, a class-leading manufacturer of high-quality automotive component is opening a new plant of 1,00,000 Sq ft in Vanod.",
      segment: "Automotive",
      client: "Technico Industries Ltd.",
      location: "Vanod, Surendranagar",
      projectSize: "1,00,000 Sq. ft.",
      projectDes: "-",
      projectYear: "2018",
      architect: "S3M Design Consultants LLP",
      consultant: "S3M Design Consultants LLP",
      scope:
        "Structural Work , RCC Framework , Finishing Work , Infrastructural Work.",
    },
    {
      src: "Sources/images/prouctlist/industrial/completed/6.png",
      title: "UNICHARM INDIA PVT LTD.",
      content:
        "Sanitary products supplier Unicharm is opening its third disposable diaper plant in Sanand.",
      segment: "Disposable Diaper Plant",
      client: "Kajima India Pvt Ltd",
      location: "Sanand, Gujarat",
      projectSize: "7,00,000 Sq. ft.",
      projectDes: "-",
      projectYear: "2018",
      architect: "Kajima India Pvt Ltd.",
      consultant: "Kajima India Pvt Ltd.",
      scope:
        "Structural Work , RCC Framework , Finishing Work , Infrastructural Work.",
    },
    {
      src: "Sources/images/prouctlist/industrial/completed/7.png",
      title: "JBM AUTO SYSTEM",
      content:
        "Plant designed for the Press Shop And Weld Shop, equipped with presses up to 1200 ton capacity and a total built up area of 7,800 m2.",
      segment: "Automotive",
      client: "JBM Auto System Pvt. Ltd.",
      location: "Sanand, Gujarat",
      projectSize: "2,00,000 Sq. ft.",
      projectDes: "-",
      projectYear: "2015",
      architect: "VMS Engineering Consultant",
      consultant: "VMS Engineering Consultant",
      scope:
        "Structural Work , RCC Framework , Finishing Work , Infrastructural Work.",
    },
    // {
    //   src: "Sources/images/prouctlist/industrial/completed/7.png",
    //   title: " Ford Vendor Park",
    //   content:
    //     "Plant designed for the Press Shop And Weld Shop, equipped with presses up to 1200 ton capacity and a total built up area of 7,800 m2.",
    //   segment: "Automotive",
    //   client: "JBM Auto System Pvt. Ltd.",
    //   location: "Sanand, Ahmedabad",
    //   projectSize: "2,00,000 Sqft.",
    //   projectYear: "2015",
    //   architect: "VMS Engineering Consultant",
    //   consultant: "VMS Engineering Consultant",
    //   scope: "Civil, Structural, Finishing, Services and Infrastructural Work",
    // },
    {
      src: "Sources/images/prouctlist/industrial/completed/8.png",
      title: "URMIN PRODUCTS PVT LTD.",
      content:
        "Urmin Sari has a state-of-the-art facility spread over a 10,000 sq. m. area to cater to the production, warehousing and cold storage needs at Changodar.",
      segment: "Food Industry",
      client: "Urmin Product Pvt. Ltd..",
      location: "Sari, Ahmedabad",
      projectSize: "1,00,000 Sq. ft.",
      projectDes: "-",
      projectYear: "2017",
      architect: "Taknik Consultants, Ahmedabad",
      consultant: "Taknik Consultants",
      scope:
        "Structural Work , RCC Framework , Finishing Work , Infrastructural Work.",
    },
    {
      src: "Sources/images/prouctlist/industrial/completed/9.png",
      title: "URMIN PRODUCTS PVT LTD.",
      content:
        "Urmin Bavla is spread across 80000 sqft area to set up its production facility in the city.",
      segment: "Food Industry",
      client: "Urmin Product Pvt. Ltd..",
      location: "Bavla, Ahmedabad",
      projectSize: "80,000 Sq. ft.",
      projectDes: "1 Floor",
      projectYear: "2016",
      architect: "Taknik Consultants, Ahmedabad",
      consultant: "Taknik Consultants",
      scope:
        "Structural Work , RCC Framework , Finishing Work , Infrastructural Work.",
    },
    {
      src: "Sources/images/prouctlist/industrial/completed/10.png",
      title: "NIRMITI PRECISION",
      content:
        "Nirmiti precision is one of the leading engineering and manufacturing companies of of metal nut, metal bolt and metal bush which opened its factory in Sanand.",
      segment: "Automotive",
      client: "Nirmiti Precision Pvt. Ltd..",
      location: "Sanand, Ahmedabad",
      projectSize: "1,00,000 Sq. ft.",
      projectDes: "-",
      projectYear: "2016",
      architect: "L. J. Purani Architect, Ahmedabad",
      consultant: " L. J. Purani Architect",
      scope:
        "Structural Work , RCC Framework , Finishing Work , Infrastructural Work.",
    },
    {
      src: "Sources/images/prouctlist/industrial/completed/11.png",
      title: "RELIABLE AUTO TECH",
      content:
        "Reliable established a new manufacturing setup in Sanand GIDC catering to the automobile OEMs in the western region.",
      segment: "Automotive",
      client: "Reliable Auto System Pvt. Ltd",
      location: "Sanand, Ahmedabad",
      projectSize: "1,00,000 Sq. ft.",
      projectDes: "-",
      projectYear: "2016",
      architect: " M. R. Fegde And Associate, Nasik",
      consultant: "Chhaya Consulting Engineers",
      scope:
        "Structural Work , RCC Framework , Finishing Work , Infrastructural Work.",
    },
  
    {
      src: "Sources/images/prouctlist/industrial/completed/13.png",
      title: "TATA NANO WELD SHOP",
      content:
        "A high level of economy was achieved in the development of this project and was benchmarked by TATA Motors for similar projects in future.",
      segment: "Automotive",
      client: "TATA Motors",
      projectSize: "2,50,000 Sq. ft.",
      projectDes: "-",
      location: "Sanand, Gujarat",
      projectYear: "2008",
      architect: "Tata Motors",
      consultant: "Tata Motors",
      scope:
        "Structural Work , RCC Framework , Finishing Work , Infrastructural Work.",
    },
    {
      src: "Sources/images/prouctlist/industrial/completed/14.png",
      title: "JEKSON HYDRAULICS",
      content:
        "Jekson Hydraulics, manufacturer and Exporter of Hydraulic Presses, opened its new plant of 70,000 Sqft in Changodar, Ahmedabad.",
      segment: "Hydraulic Plant",
      client: "Jekson Hydraulics",
      location: "Changodar, Ahmedabad",
      projectSize: "70,000 Sq. ft.",
      projectDes: "-",
      projectYear: "2009",
      architect: "N.K. Shah Consulting Engineers LLP",
      consultant: "N.K. Shah Consulting Engineers LLP",
      scope:
        "Structural Work , RCC Framework , Finishing Work , Infrastructural Work.",
    },
    {
      src: "Sources/images/prouctlist/industrial/completed/15.png",
      title: "HARSHA ENGINEERS",
      content:
        "Harsha Engineers, a global solution provider of Bearing Cages opened its new plant of 22,000 Sqft in 2008 designed by SMPS Consultants.",
      segment: " Mechanical Plant",
      client: "Harsha Engineers Pvt. Ltd",
      location: "Sanand, Gujarat",
      projectSize: "22,000 Sq. ft.",
      projectDes: "-",
      projectYear: "2008",
      architect: "SMPS, Ahmedababad",
      consultant: "SMPS, Ahmedababad",
      scope:
        "Structural Work , RCC Framework , Finishing Work , Infrastructural Work.",
    },
    {
      src: "Sources/images/prouctlist/industrial/completed/16.png",
      title: "SAFEXPRESS WAREHOUSE",
      content:
        "Safexpress,a Pan India supply chain services provider opened its Warehouse in 2008 at Changodar measuring 75,000 Sqft designed by CivTech Consultants.",
      segment: "Logistics Warehouse Plant",
      client: "Safexpress Warehouse",
      location: "Changodar, Ahmedabad",
      projectDes: "-",
      projectSize: "75,000 Sq. ft.",
      projectYear: "2009",
      architect: "CivTech Consultants",
      consultant: "CivTech Consultants",
      scope:
        "Structural Work , RCC Framework , Finishing Work , Infrastructural Work.",
    },
    //  {
    //   src: "Sources/images/prouctlist/commercial/ongoing/2.png",
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
    //   src: "Sources/images/prouctlist/industrial/ongoing/1-2.jpeg",
    //   title: "TORRENT POWER 66 KV SS",
    //   segment: "Industrial",
    //   client: "Torrent Power Ltd",
    //   location: "Katargam, Surat",
    //   architect: "SQFT",
    //   consultant: "S3M Design Consultants LLP",
    //   projectSize: "160,000  Sqft.",
    //   projectYear: "2022-Current",
    //   scope:
    //     "Plug Point, PSC and VCB building, outdoor store facility including civil and finishing work.",
    // },
  ];
const Industrial = () => {
    return (
        <>
            <ProjectPage title={content.title} description={content.description} />
        </>
    )
}
export default Industrial;