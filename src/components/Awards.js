import React from "react";

const Awards = ({ classNames, content }) => {
  return (
    <section id="awards" className={"section " + classNames}>
      <h1 className="heading">{content.heading}</h1>
      <p className="desc">{content.desc}</p>
      {content.sections.map((s) => (
        <p className="desc">
          <h3>{s.heading}</h3>
          {s.description}
        </p>
      ))}
    </section>
  );
};

export default Awards;
