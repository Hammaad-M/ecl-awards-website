import React from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

const Hero = ({ contentRef, content }) => {
  gsap.registerPlugin(ScrollToPlugin);
  return (
    <section className="hero w-full overflow-hidden relative">
      <div className="animated-bg absolute h-full"></div>
      <div className="shadow-md hero-wrapper w-[90%] text-center p-12 rounded-lg bg-white border-none relative m-auto mt-20 sm:w-4/6">
        <h1
          ref={contentRef}
          className="hero-heading text-3xl font-bold sm:text-4xl"
        >
          {content.heading}
        </h1>
        <h2 className="text-xl my-3 sm:my-4">{content.subheading}</h2>
        <a
          href="#nominations"
          onClick={(e) => {
            e.preventDefault();
            gsap.to(window, { duration: 1, scrollTo: "#nominations" });
          }}
        >
          <button className="btn-primary">Nominate</button>
        </a>
      </div>
      <div className="mt-6 sm:mt-8 mb-3 w-max py-1 px-0.5 slider-wrapper rounded-full bg-white relative m-auto ">
        <div className="slider bg-blue-600 p-2 rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;
