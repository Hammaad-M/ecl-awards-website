import React, { useLayoutEffect, useRef } from "react";
import FeaturesCard from "./Card";
import { gsap } from "gsap";
import { fadeInSmall } from "./animations";

const Judges = ({ content }) => {
  const wrapper = useRef(null);
  useLayoutEffect(() => {
    const q = gsap.utils.selector(wrapper);
    // q("*").forEach((e) => fadeInSmall(e, true, 2.56));
    // fadeInSmall(q("*", true, 2));
    gsap.from(q("*"), {
      opacity: 0.01,
      duration: 0.105,
      stagger: 0.05,
      y: 50,
      ease: "back",
      delay: 0.1,
      scrollTrigger: {
        trigger: q("*"),
        start: "top 80%",
      },
    });
  });

  return (
    <section ref={wrapper} className="section " id="judges">
      <h1 className="heading">{content.heading} </h1>
      <p className="desc">{content.description}</p>

      <div className="mt-3 sm:mt-4 md:mt-5 grid sm:grid-cols-2 gap-2 lg:grid-cols-3 justify-items-center items-center">
        {content.cards.map((judge) => (
          <FeaturesCard
            className="card"
            name={judge.heading}
            desc={judge.description}
            image={{ src: judge.imagePath, alt: "judge" }}
            label={judge.tag}
          />
        ))}
      </div>
    </section>
  );
};

export default Judges;
