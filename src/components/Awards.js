import React, { useRef, useLayoutEffect } from "react";
import { fadeIn } from "./animations";
import { gsap } from "gsap";
import FlyInText from "./FlyInText";

const Awards = ({ classNames, content }) => {
  const wrapper = useRef(null);
  useLayoutEffect(() => {
    const q = gsap.utils.selector(wrapper);
    fadeIn(q("*"));
  });
  return (
    <section
      id="awards"
      className={"section md:p-0 bg-white z-50 " + classNames}
    >
      <h1 className="heading">
        <FlyInText text={content.heading} />
      </h1>
      <div ref={wrapper}>
        <p className="desc">{content.desc}</p>
        {content.sections.map((s) => (
          <p className="desc">
            <h3>{s.heading}</h3>
            {s.description}
          </p>
        ))}
      </div>
    </section>
  );
};

export default Awards;
