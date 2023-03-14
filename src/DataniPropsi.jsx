import React from "react";

function DataniPropsi({ data }) {
  return (
    <div style={{ display: "flex" }}>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <div
              style={{
                width: "250px",
                height: "250px",
                border: "1px solid red",
              }}
            >
              <p>{item.name}</p>
              <p>{item.surname}</p>
              <p>{item.button}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DataniPropsi;
