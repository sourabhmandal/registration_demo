import React from "react";
import checked from "../assets/checked.png";
export default function Success() {
  return (
    <div className="row justify-content-center">
      <div className="col-8 mx-auto m-4">
        <div className="card text-center p-5">
          <img
            src={checked}
            style={{ width: "10rem", height: "10rem" }}
            className="m-4 mx-auto"
          />
          <p className="display-1">Success</p>
          <h2>You are successfully registered !</h2>
          <h4>
            Please <a href="#">Login</a> here
          </h4>
        </div>
      </div>
    </div>
  );
}
