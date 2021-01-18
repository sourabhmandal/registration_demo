import React from "react";

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
  return (
    <div className="mb-3">
      <label for={_for} className="form-label">
        {_label}
      </label>
      <input
        type={_type}
        className="form-control"
        id={_for}
        aria-describedby={_describedby}
        onChange={_onchange}
        placeholder={_placeholder}
        value={_value}
      />
    </div>
  );
}
