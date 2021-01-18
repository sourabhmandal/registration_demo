import React from "react";

export default function Input4(props) {
  const { _for, _onchange, _type, _describedby, _placeholder, _value } = props;
  return (
    <div className="col-2">
      <input className="form-control p-4" />
    </div>
  );
}
