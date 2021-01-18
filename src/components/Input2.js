import React, { useState } from "react";

export default function Input2(props) {
  const { vars, text, handleSelectChange } = props;
  const [value, setValue] = useState("India");
  const [errorText, setErrorText] = useState("");

  const handleChanges = (v) => {
    setValue(v.target.value);
    handleSelectChange(text.toLowerCase(), v);
  };
  const validate = (e) => {
    if (e.target.value == "") {
      setErrorText("Please select an option");
    } else {
      setErrorText("");
    }
    handleChanges(e);
  };

  return (
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">
        {text}
      </label>
      <select
        className="form-select"
        aria-label="Default select example"
        value={value}
        onChange={validate}
      >
        {vars.map((c) => {
          return (
            <option
              value={c}
              onChange={() => {
                setValue(c);
              }}
              key={c}
            >
              {c}
            </option>
          );
        })}
      </select>
      <div class="form-text text-danger">{errorText}</div>
    </div>
  );
}
