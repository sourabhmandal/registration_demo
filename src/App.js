import "./scss/custom.scss";
import React from "react";
import Form from "./components/Form";
import NavSteps from "./components/NavSteps";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      fullname: "",
      gender: "male",
      country: "India",
      state: "Arunanchal Pradesh",
      phone: "",
      company: "",
      job: "",
      experience: 0,
    };
    this.prevStep = this.prevStep.bind(this);
    this.nextStep = this.nextStep.bind(this);
  }

  //proceed to next step
  nextStep() {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  }

  //proceed to next step
  prevStep() {
    const step = this.state.step;
    this.setState({
      step: step - 1,
    });
  }

  //handle field change
  handleChange = (i) => (e) => {
    this.setState({ [i]: e.target.value });
  };
  handleSelectChange = (i, e) => {
    this.setState({ [i]: e.target.value });
  };
  handleGender = (gen) => {
    this.setState({ gender: gen });
  };

  render() {
    const {
      step,
      fullname,
      gender,
      country,
      states,
      phone,
      company,
      job,
      experience,
    } = this.state;
    const values = {
      fullname,
      gender,
      country,
      states,
      phone,
      company,
      job,
      experience,
    };
    return (
      <div className="App">
        <div className="container-fluid py-3 bg_navyblue d-flex justify-content-center">
          <NavSteps
            text="Personal Detail"
            step={step}
            count="1"
            changeStep={this.changeStep}
          />
          <NavSteps
            text="Personal Detail"
            step={step}
            count="2"
            changeStep={this.changeStep}
          />
          <NavSteps
            text="Personal Detail"
            step={step}
            count="3"
            changeStep={this.changeStep}
          />
        </div>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <Form
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
              step={step}
              handleGender={this.handleGender}
              handleSelectChange={this.handleSelectChange}
            />
          </div>
        </div>
      </div>
    );
  }
}
