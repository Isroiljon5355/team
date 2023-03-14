import React, { useState } from "react";
export const useForm = (init) => {
  const [value, setValue] = useState(init);
  return [
    value,
    (e) => {
      setValue({ ...value, [e.target.name]: e.target.value });
    },
  ];
};
