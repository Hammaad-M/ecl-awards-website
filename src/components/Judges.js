import React, { useState } from "react";
import FeaturesCard from "./Card";

const Judges = () => {
  const [judges, setJudges] = useState([
    {
      name: "John Doe",
      image: { src: "images/1.jpg", alt: "judge" },
      label: "First Year",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, autem",
    },
    {
      name: "Jane Doe",
      image: { src: "images/2.jpg", alt: "judge" },
      label: "First Year",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, autem",
    },
    {
      name: "John Doe",
      image: { src: "images/3.jpg", alt: "judge" },
      label: "First Year",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, autem",
    },
    {
      name: "Jane Doe",
      image: { src: "images/4.jpg", alt: "judge" },
      label: "First Year",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, autem",
    },
    {
      name: "John Doe",
      image: { src: "images/5.jpg", alt: "judge" },
      label: "First Year",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, autem",
    },
  ]);
  return (
    <section className="section " id="judges">
      <h1 className="heading">Partner Judges</h1>
      <p className="desc">
        During the first year of the program the advisory committee will serve
        as judges. After the first year, judges will comprise of a mix between
        previous honorees and members of the advisory committee
      </p>
      <div className="mt-3 sm:mt-4 md:mt-5 grid sm:grid-cols-2 gap-2 lg:grid-cols-3 justify-items-center items-center">
        {judges.map((judge) => (
          <FeaturesCard {...judge} />
        ))}
        {/* {judges.map((judge) => (
          <FeaturesCard
            title={judge.name}
            classNames="h-min flex-auto md:w-auto judge-card bg-gray-100 p-4 pl-6 shadow-lg m-2 rounded-tl-2xl rounded-br-2xl sm:flex sm:flex-row md:flex-initial"
            contentItems={[judge.desc]}
            titleClassNames="text-lg -ml-5 mt-2 text-main 2xl:text-2xl"
            contentClassNames="mt-0 text-md text-main 2xl:text-xl"
            imageURI={judge.hasImage ? judge.image : ""}
          />
        ))} */}
      </div>
    </section>
  );
};

export default Judges;
