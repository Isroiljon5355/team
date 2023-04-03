import React from "react";
import { useContext } from "react";
import { GreetContext } from "./GreetContext";

function UseContect() {
  const cart = useContext(GreetContext);
  return <div>{cart}</div>;
}

export default UseContect;
