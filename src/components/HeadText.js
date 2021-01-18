import React from "react";

export default function HeadText(props) {
  return (
    <figure className="text-center mt-4">
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
    </figure>
  );
}
