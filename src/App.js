import Form from "./components/form/Form";
import React from "react";
import "./index.css";
import { GreetContext } from "./components/form/greet/GreetContext";
import UseContect from "./components/form/greet/UseContect";

function App() {
  const cart = "salom";
  return (
    <div className="App">
      <GreetContext.Provider value={cart}>
        <UseContect />
        <Form />
      </GreetContext.Provider>
    </div>
  );
}

export default App;
