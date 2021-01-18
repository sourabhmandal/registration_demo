import React, { useState } from "react";
import Input1 from "./Input1";
import img from "../assets/placeholder.png";
export default function CompanyDetail(props) {
  const { handleChange, nextStep, prevStep } = props;
  return (
    <>
      <div className="col-12 mb-3">
        <img
          src={img}
          alt="image-preview"
          style={{ width: "7rem", height: "7rem", borderRadius: "50%" }}
        />
        <a href="#" className="m-3">
          Upload your company logo
        </a>
      </div>

      <Input1
        _label="Company Name"
        _for="input_company"
        _onchange={handleChange("company")}
        _type="name"
        _describedby="companyHelp"
        _placeholder="Abc company"
      />

      <Input1
        _label="Email id"
        _for="input_email"
        _onchange={handleChange("email")}
        _type="email"
        _describedby="emailHelp"
        _placeholder="rahul@abc.com"
      />
      <Input1
        _label="Job Title"
        _for="input_job"
        _onchange={handleChange("job")}
        _type="job"
        _describedby="jobHelp"
        _placeholder="User Experience Designer |"
      />
      <Input1
        _label="Years of Experience"
        _for="input_experience"
        _onchange={handleChange("experience")}
        _type="experience"
        _describedby="experienceHelp"
        _placeholder="9"
      />
      <div class="form-check mb-3">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          I accept the <a href="#">Terms and conditions</a>
        </label>
      </div>
      <div className="row justify-content-between">
        <button className="btn _button_secondary col-2" onClick={prevStep}>
          <strong>Back</strong>
        </button>
        <button className="btn btn-primary text-white col-9" onClick={nextStep}>
          <strong>Send OTP</strong>
        </button>
      </div>
    </>
  );
}
