import React from "react";
import Input1 from "./Input1";
import Input2 from "./Input2";
import Input3 from "./Input3";
import "../scss/custom.scss";

export default class PersonalDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genderClass: "btn text-primary px-3 _button",
      countries: ["India", "USA"],
      india: [
        "Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chhattisgarh",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Odisha",
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttarakhand",
        "Uttar Pradesh",
        "West Bengal",
        "Andaman and Nicobar Islands",
        "Chandigarh",
        "Jammu & Kashmir",
        "Ladakh",
        "Lakshadweep",
        "Puducherry",
      ],
      usa: ["Alabama", "Alaska", "Arizona", "Arkansas", "California"],
    };
  }

  listStates = () => {
    if (this.props.values.country === "USA") {
      return this.state.usa;
    } else if (this.props.values.country === "India") {
      return this.state.india;
    }
  };
  render() {
    const {
      handleChange,
      handleGender,
      nextStep,
      handleSelectChange,
      values,
    } = this.props;
    return (
      <>
        <Input1
          _label="Full Name"
          _for="input_name"
          _onchange={handleChange("fullname")}
          _type="email"
          _describedby="nameHelp"
          _placeholder="Enter full name"
        />

        <div className="mb-3">
          <label className="mb-2">Gender</label>
          <br />
          <button
            className="btn text-primary px-3 _active_button"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              handleGender("male");
            }}
          >
            <strong>Male</strong>
          </button>
          <button
            className="btn text-primary px-3 _inactive_button"
            type="button"
            onClick={() => {
              handleGender("female");
            }}
          >
            <strong>Female</strong>
          </button>
          <button
            className="btn text-primary px-3 _inactive_button"
            type="button"
            onClick={() => {
              handleGender("others");
            }}
          >
            <strong>Other</strong>
          </button>
        </div>

        <Input2
          vars={this.state.countries}
          text="Country"
          handleSelectChange={handleSelectChange}
        />
        <Input2
          vars={this.listStates()}
          text="State"
          handleSelectChange={handleSelectChange}
        />
        <Input3
          countrycode="+91"
          label={"Phone no"}
          _onchange={handleChange("phone")}
          _values={values}
        />

        <button
          className="btn btn-primary text-white col-12 "
          type="button"
          onClick={nextStep}
          handleChange={handleChange}
        >
          Next
        </button>
      </>
    );
  }
}
