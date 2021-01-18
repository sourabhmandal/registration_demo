import React from "react";

export default function Input3(props) {
  const { countrycode, label, _onchange } = props;
  return (
    <div className="mb-3">
      <label for="exampleInputEmail1" className="form-label">
        {label}
      </label>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">
          <strong>{countrycode}</strong>
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="Mobile no."
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={_onchange}
        />
      </div>
    </div>
  );
}
