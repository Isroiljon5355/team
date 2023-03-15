import React from "react";

function Person({ data }) {
  console.log(data);
  return (
    <div>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.name}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default Person;
