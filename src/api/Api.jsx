import { Flex, Modal } from "@mantine/core";
import React, { useEffect, useState } from "react";
import Mod from "../Modal";

function Api() {
  const [api, setApi] = useState();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setApi(data));
  }, []);
  console.log(api);

  return api?.map((item) => {
    return (
      <div
        className="w-[500px] h-[100px] bg-red-500 mx-auto flex items-center justify-around "
        key={item.id}
      >
        <h1 className="500: #fff">{item.name}</h1>
        <Mod item={item} />
      </div>
    );
  });
}

export default Api;
