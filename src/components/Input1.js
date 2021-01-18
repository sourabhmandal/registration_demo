import React, { useState } from "react";

export default function Input1(props) {
  const {
    _for,
    _onchange,
    _type,
    _describedby,
    _placeholder,
    _value,
    _label,
  } = props;

  const [errorText, setErrorText] = useState("");
  const validate = (e) => {
    if (e.target.value == "") {
      setErrorText("Name field cannot be left blank");
    } else if (!e.target.value.match(/^[A-Za-z]+$/)) {
      setErrorText("Name must contain only Alpahbetical letters A-Z, a-z");
    } else {
      setErrorText("");
    }
    _onchange(e);
  };

  return (
    <>
      <div className="mb-3">
        <label htmlFor={_for} className="form-label">
          {_label}
        </label>
        <input
          type={_type}
          className="form-control"
          id={_for}
          aria-describedby={_describedby}
          onChange={validate}
          placeholder={_placeholder}
          value={_value}
        />
        <div id={_describedby} className="form-text text-danger">
          {errorText}
        </div>
      </div>
    </>
  );
}
