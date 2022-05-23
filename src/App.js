import React, { useLayoutEffect, useRef } from "react";
import { HeaderResponsive } from "./components/Header.tsx";
import Judges from "./components/Judges";
import Hero from "./components/Hero";
import Awards from "./components/Awards";
import TimeLine from "./components/Timeline";
import Nominations from "./components/Nominations";
import Footer from "./components/Footer.tsx";
// import Test from "./components/_test";
import {
  heroPageContent,
  awardsContent,
  timelineContent,
  judgesContent,
  nominationsContent,
} from "./SITEDATA";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  gsap.registerPlugin(ScrollTrigger);
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
      label: "Advisory Committee",
    },
    {
      link: "#nominations",
      label: "Nominations",
    },
  ];
  const overlaper = useRef();

  useLayoutEffect(() => {
    // gsap.to(overlaper.current, {
    //   scrollTrigger: {
    //     trigger: overlaper.current,
    //     pin: true,
    //     start: "top top",
    //     end: "+=200",
    //     pinSpacing: false,
    //   },
    //   opacity: 1,
    //   backgroundColor: "white",
    // });
  }, []);
  return (
    <>
      <HeaderResponsive links={links} />
      <div ref={overlaper}>
        <Hero content={heroPageContent} />
      </div>
      <div className="md:grid grid-cols-12 grid-rows-1 md:section md:gap-10 bg-white">
        <Awards content={awardsContent} classNames="md:col-span-7 " />
        <TimeLine
          {...timelineContent}
          classNames="md:col-span-5 lg:col-span-4"
        />
      </div>
      <Judges content={judgesContent} />
      <Nominations content={nominationsContent} />
      <Footer links={links} />
    </>
  );
}

export default App;
