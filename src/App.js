import React from "react";
import Footer from "./components/footer/Footer";
import { data } from "./data";
import { Context } from "./components/Cards/Context";
import Card from "./components/Cards/Card";

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
