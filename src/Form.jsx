import React from "react";

const dataState = [
  {
    name: "",
    age: "",
  },
];
function Form() {
  const [value, SetValue] = React.useState(dataState);

  const formState = (e) => {
    e.preventDefault();
  };

  const inputState = (e) => {
    const { name, value } = e.target;
    SetValue((prev) => ({ ...prev, [name]: value }));
  };
  console.log(value);
  return (
    <div>
      <form onSubmit={formState}>
        <input
          type="name "
          placeholder="name"
          onChange={inputState}
          value={value.name}
        />
        <br />
        <input
          type="number"
          placeholder="number"
          onChange={inputState}
          value={value.age}
        />
        <br />
        <button>Click me</button>
      </form>
    </div>
  );
}

export default Form;
