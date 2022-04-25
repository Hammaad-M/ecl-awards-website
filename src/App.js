import React, { useEffect, useRef } from "react";
import { HeaderResponsive } from "./components/Header.tsx";
import Judges from "./components/Judges";
import Hero from "./components/Hero";
import Awards from "./components/Awards";
import TimeLine from "./components/Timeline";
import Nominations from "./components/Nominations";
import Footer from "./components/Footer.tsx";

import {
  heroPageContent,
  awardsContent,
  timelineContent,
  judgesContent,
  nominationsContent,
} from "./SITEDATA";

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
      label: "Advisory Committee",
    },
    {
      link: "#nominations",
      label: "Nominations",
    },
  ];

  return (
    <>
      <HeaderResponsive links={links} />
      <Hero content={heroPageContent} />
      <div className="md:grid grid-cols-12 grid-rows-1">
        <Awards
          content={awardsContent}
          classNames="md:col-span-7 lg:col-span-8"
        />
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
