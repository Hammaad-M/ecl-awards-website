import React from "react";
import FeaturesCard from "./Card";

const Judges = ({ content }) => {
  return (
    <section className="section " id="judges">
      <h1 className="heading">{content.heading}</h1>
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
