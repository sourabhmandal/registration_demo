import React from "react";
import PersonalDetail from "./PersonalDetail";
import CompanyDetail from "./CompanyDetail";
import OtpDetail from "./OtpDetail";
import HeadText from "./HeadText";

export default function Form(props) {
  const {
    step,
    values,
    nextStep,
    prevStep,
    handleChange,
    handleGender,
    handleSelectChange,
  } = props;
  switch (step) {
    case 1:
      return (
        <>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xxl-6 ">
            <HeadText
              title="Add your personal details"
              subtitle="Lorem ipsum is simple dummy text of the printing and typesetting industry."
            />
            <br />
            <form className="card p-4 border-0">
              <PersonalDetail
                nextStep={nextStep}
                handleChange={handleChange}
                values={values}
                handleGender={handleGender}
                handleSelectChange={handleSelectChange}
              />
            </form>
            <p className="col-12 text-center my-3">
              Already have an account?{" "}
              <a href="#" className="text-primary">
                Log in
              </a>
            </p>
          </div>
        </>
      );

    case 2:
      return (
        <>
          <HeadText
            title="Add your company details"
            subtitle="Lorem ipsum is simple dummy text of the printing and typesetting industry."
          />
          <br />
          <div className="col-sm-12 col-md-12 col-lg-6 col-xxl-6 ">
            <form className="card p-4 border-0">
              <CompanyDetail
                nextStep={nextStep}
                prevStep={prevStep}
                handleChange={handleChange}
              />
            </form>
          </div>
        </>
      );
    case 3:
      return (
        <>
          <HeadText
            title="Enter your OTP"
            subtitle="For your security, we need to verify your identity. we sent a 5-digit code to name@domain.com. Please enter it below"
          />
          <br />
          <div className="col-sm-12 col-md-12 col-lg-6 col-xxl-6 card">
            <form className=" p-4 border-0">
              <OtpDetail
                nextStep={nextStep}
                prevStep={prevStep}
                handleChange={handleChange}
              />
            </form>
            <hr style={{ width: "100%" }} />
            <div
              className="text-center mx-5  text-muted"
              style={{ paddingLeft: "7rem", paddingRight: "7rem" }}
            >
              <p>
                Didnt receive email?Check your spam filter for an email from{" "}
                <a href="#">name@domain.com</a>
              </p>
            </div>
          </div>
        </>
      );
    default:
      return <h1>Nothing</h1>;
  }
}
