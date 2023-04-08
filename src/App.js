import React from "react";
import { textContext } from "./components/TextContext";
import Cards from "./components/cards/Cards";
import Container from "./components/container/Container";
import data from "./components/data/containerData";
import "./index.css";

function App() {
  return (
    <div>
      <Cards />
      <textContext.Provider value={data}>
        <Container />
      </textContext.Provider>
    </div>
  );
}

export default App;
