import React from "react";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

export default function App() {
  const text = "salom";

  return (
    <Main>
      <Routes>
        <Route path="/" element={<Navbar />} />
      </Routes>
    </Main>
  );
}
