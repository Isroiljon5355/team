import React from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Main>
      <Routes>
        <Route path="/" element={<Navbar />} />
      </Routes>
    </Main>
  );
}
