import Form from "./components/form/Form";
import React from "react";
import "./index.css";
import UseContect from "./components/form/greet/UseContect";
import { data } from "./data";
import { Context } from "./components/Cards/Context";
import { GreetContext } from "./components/form/greet/GreetContext";
import Card from "./components/Cards/Card";

function App() {
  const cart = "salom";
  return (
    <div className="App">
      <Context.Provider value={data}>
        <Card />
        <Form />
      </Context.Provider>
    </div>
  );
}
export default App;
