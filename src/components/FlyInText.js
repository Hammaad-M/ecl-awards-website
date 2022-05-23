import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { flyInFromRight } from "./animations";

const FlyInText = ({ text, waitForScroll = true, speed = 1 }) => {
  const textArray = [];
  const textRef = useRef(null);
  for (let i = 0; i < text.length; i++) {
    textArray.push(text[i]);
  }
  const getGap = (c) => (c === " " ? " w-3" : " ");
  useLayoutEffect(() => {
    let q = gsap.utils.selector(textRef);
    flyInFromRight(q(".text-letter"), waitForScroll, speed);
  }, []);
  return (
    <div ref={textRef} className="flex justify-center">
      {textArray.map((c, i) => (
        <div className={"text-letter" + getGap(c)}>{c}</div>
      ))}
    </div>
  );
};

export default FlyInText;
