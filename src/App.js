import React from "react";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import Medium from "./components/medium/Medium"
import Navbar from "./components/navbar/Navbar"
import Section1 from "./components/section1/Section1";
import Star from "./components/section2/Star"
import TheSims from "./components/section3/TheSims";
import EAOriginal from "./components/section4/EAOriginal";

function App() {
  

  return (
    <div>
      <Main>
        <Navbar/>
        <Routes>
        <Route path="/medium" element={<Medium />} />
        <Route path="/section1" element={<Section1/>} />
        <Route path="/section2" element={<Star/>} />
        <Route path="section3" element={<TheSims/>} />
        <Route path="/section4" element={<EAOriginal/>} />
        </Routes>
      </Main>
    </div>
  );
}

export default App;
