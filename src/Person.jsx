import React from "react";
import "./index.css";

function Person({ data }) {
  const [open, setOpen] = React.useState(false);

  const openHandle = () => {
    setOpen(!open);
  };
  console.log(data);
  return (
    <div>
      <div className="card">
        {data.map((item) => {
          return (
            <div className="container" key={item.id}>
              <img src={item.img} alt="" />
              <h1>{item.name}</h1>
              <h2>{item.age}</h2>
              <h3>{item.location.address}</h3>
              <h4>{item.location.street}</h4>
              <h5>{item.location.phone.number}</h5>
              <button onClick={openHandle}>More info</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Person;
