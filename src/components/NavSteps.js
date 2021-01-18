import React, { useEffect, useState } from "react";

export default function NavSteps(props) {
  const { text, count, step } = props;
  const [linkClass, setLinkClass] = useState("white_text_muted step_inactive");
  const [textClass, setTextClass] = useState("my-auto px-4 white_text_muted");
  useEffect(() => {
    activeStep();
  });

  const activeStep = () => {
    if (step == count) {
      setLinkClass("text-white step_active");
      setTextClass("my-auto px-4 text-white");
    } else {
      setLinkClass("white_text_muted step_inactive");
      setTextClass("my-auto px-4 white_text_muted");
    }
  };
  return (
    <>
      <a href="#" className={linkClass}>
        {count}
      </a>
      <p className={textClass}>{text}</p>
    </>
  );
}
