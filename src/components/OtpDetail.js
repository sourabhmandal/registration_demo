import React from "react";
import Input4 from "./Input4";

export default function OtpDetail(props) {
  const { prevStep } = props;
  return (
    <>
      <label for={"_for"} className="form-label">
        Enter your Code
      </label>
      <div className="input-group row justify-content-between">
        <Input4 />
        <Input4 />
        <Input4 />
        <Input4 />
        <Input4 />

        <div className="row justify-content-between mt-3">
          <button className="btn _button_secondary col-2" onClick={prevStep}>
            <strong>Back</strong>
          </button>
          <button className="btn btn-primary text-white col-9" onClick="">
            <strong>Verify</strong>
          </button>
        </div>
      </div>
    </>
  );
}
