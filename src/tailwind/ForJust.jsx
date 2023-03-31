import React, { createContext } from "react";
import { UserCont } from "../api/UserCont";

function ForJust() {
  const user = createContext(UserCont);
  return <div>{user}</div>;
}

export default ForJust;
