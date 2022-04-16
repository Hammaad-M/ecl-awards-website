import React from "react";
import { HeaderResponsive } from "./components/Header.tsx";
import Hero from "./components/Hero";
import Awards from "./components/Awards";
import TimeLine from "./components/Timeline";
import Nominations from "./components/Nominations";
import { Center } from "@mantine/core";

function App() {
  return (
    <>
      <HeaderResponsive
        links={[
          {
            link: "#awards",
            label: "Awards",
          },
          {
            link: "#timeline",
            label: "Timeline",
          },
          {
            link: "#nominations",
            label: "Nominations",
          },
        ]}
      />
      <Hero />

      <div className="md:grid grid-cols-12 grid-rows-1">
        <Awards classNames="md:col-span-7 lg:col-span-8" />
        <TimeLine classNames="md:col-span-5 lg:col-span-4" />
      </div>
      <Nominations />
    </>
  );
}

export default App;
