import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroSection from "./Components/HomePage/HeroSection"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer";
import Residential from "./Components/Projects/Residential/Residential";
import Commercial from "./Components/Projects/Commercial/Commercial";
import Institutional from "./Components/Projects/Institutional/Institutional";
import Industrial from "./Components/Projects/Industrial/Industrial";
const App = () => {
  return(
  <>
    <BrowserRouter>
    <div>
    <Navbar/>
      <Routes>
        <Route exact path='/' element={<HeroSection />}></Route>
        <Route exact path='/Residential' element={<Residential/>} />  
        <Route exact path='/Commercial' element={<Commercial/>} />  
        <Route exact path='/Industrial' element={<Industrial/>} />  
        <Route exact path='/Institutional' element={<Institutional/>} />  
        {/* <Route exact path='/PlantAndMachinery' element={<PlantAndMachinery/>} />  
        <Route exact path='/Formwork' element={<Formwork/>} />  
        <Route exact path='/Technology' element={<Technology/>} />  
        <Route exact path='/WhoWeAre' element={<WhoWeAre/>} />  
        <Route exact path='/OurManagement' element={<OurManagement/>} />  
        <Route exact path='/OurStandards' element={<OurStandards/>} />  
        <Route exact path='/Awards' element={<Awards/>} />  
        <Route exact path='/CSR' element={<CSR/>} />  
        <Route exact path='/Careers' element={<Careers/>} />   */}
      </Routes>
      <Footer />
      </div>
    </BrowserRouter>
  </>
  )
}
export default App;