import React, { useEffect } from "react";
import { HeaderResponsive } from "./components/Header.tsx";
import Judges from "./components/Judges";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/src/ScrollTrigger";
import Hero from "./components/Hero";
import Awards from "./components/Awards";
import TimeLine from "./components/Timeline";
import Nominations from "./components/Nominations";

import Footer from "./components/Footer.tsx";

function App() {
  const links = [
    {
      link: "#awards",
      label: "Awards",
    },
    {
      link: "#timeline",
      label: "Timeline",
    },
    {
      link: "#judges",
      label: "Partner Judges",
    },
    {
      link: "#nominations",
      label: "Nominations",
    },
  ];
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   document.querySelectorAll(".section").forEach((e) => {
  //     gsap.from(e, {
  //       scrollTrigger: {
  //         trigger: expect,
  //         start: "top bottom",
  //       },
  //       y: 20,
  //       x: 50,
  //       scale: 0.4,
  //       opacity: 0,
  //       duration: 0.5,
  //       stagger: 0.3,
  //     });
  //   });
  // }, []);

  return (
    <>
      <HeaderResponsive links={links} />
      <Hero />

      <div className="md:grid grid-cols-12 grid-rows-1">
        <Awards classNames="md:col-span-7 lg:col-span-8" />
        <TimeLine classNames="md:col-span-5 lg:col-span-4" />
      </div>
      <Judges />
      <Nominations />
      <Footer links={links} />
    </>
  );
}

export default App;
