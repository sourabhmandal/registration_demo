import React, { useState } from "react";

export default function Input3(props) {
  const { countrycode, label, _onchange, _values } = props;

  const [errorText, setErrorText] = useState("");
  const validate = (e) => {
    if (e.target.value === "") {
      setErrorText("Please enter your phone number");
    } else if (!e.target.value.match(/^[0-9]+$/)) {
      setErrorText("Phone number must contain only Digits 0-9");
    } else if (e.target.value.length !== 10) {
      setErrorText("Please enter a 10 digit number");
    } else {
      setErrorText("");
    }
    _onchange(e);
  };
  return (
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">
        {label}
      </label>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          <strong>{countrycode}</strong>
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Mobile no."
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={validate}
        />
      </div>
      <div className="form-text text-danger">{errorText}</div>
    </div>
  );
}
