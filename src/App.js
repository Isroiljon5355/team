import React from "react";
import Footer from "./components/footer/Footer";
import Card from "./components/Cards/Card";
import { Context } from "./components/Cards/Context";
import { data } from "./data";

function App() {
  return (
    <div>
      <Context.Provider value={data}>
        <Card />
      </Context.Provider>
      <Footer />
    </div>
  );
}
export default App;
