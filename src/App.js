import React from "react";
import Card from "./components/Cards/Card";
import { Context } from "./components/Cards/Context";
import Form from "./components/form/Form";
import { data } from "./data";
import "./index.css";

function App() {
  const cart = "salom";
  return (
    <div className="App">
      <Context.Provider value={data}>
        <Card />
      </Context.Provider>
      <Form />
    </div>
  );
}
export default App;
