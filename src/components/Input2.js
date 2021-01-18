import React, { useState } from "react";

export default function Input2(props) {
  const { vars, text, handleSelectChange } = props;
  const [value, setValue] = useState("India");

  const handleChanges = (v) => {
    setValue(v.target.value);
    handleSelectChange(text.toLowerCase(), v);
  };
  return (
    <div className="mb-3">
      <label for="exampleInputEmail1" className="form-label">
        {text}
      </label>
      <select
        class="form-select"
        aria-label="Default select example"
        value={value}
        onChange={handleChanges}
      >
        {vars.map((c) => {
          return (
            <option
              value={c}
              onChange={() => {
                setValue(c);
              }}
            >
              {c}
            </option>
          );
        })}
      </select>
    </div>
  );
}
