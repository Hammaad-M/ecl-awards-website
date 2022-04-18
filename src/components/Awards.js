import React from "react";

const Awards = ({ classNames }) => {
  return (
    <section id="awards" className={"section " + classNames}>
      <h1 className="heading">Awards</h1>
      <p className="desc">
        There will be two tracks of honorees - individuals and organizations.
        Honorariums of $2,500 will be given to advance the awardees’ work in the
        community as individual honorariums and an honorarium of $5,000 will be
        awarded to 501c3 nonprofit honorees.
      </p>
      <p className="desc">
        <h3>Objective</h3>
        The main objective of this Eastside Civic Leadership Award pilot program
        is to highlight and celebrate individuals, particularly from BIPOC,
        immigrant, and refugee communities on the Eastside, who have applied
        their talent, skills, and passion to do something positive in their
        community, whether their work is on behalf of a nonprofit organization
        or as an individual.
      </p>

      <p className="desc">
        <h3>How we define civic leadership</h3>
        We recognize that civic leadership takes many forms and doesn’t always
        have to be through traditional means or related to legislative or
        political processes. We define civic leadership as anyone, regardless of
        age, who took the initiative and dedicated their time, skills, talent,
        and passion to make a positive impact or improve the quality of life in
        a community, or to address a specific community problem.
      </p>
    </section>
  );
};

export default Awards;
