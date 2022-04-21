import React from "react";

const heroPageContent = {
  heading: "Recognizing Civic Engagement",
  subheading: "Eastside Civic Leadership Awards",
};
const awardsContent = {
  heading: "Awards",
  description:
    "There will be two tracks of honorees - individuals and organizations. Honorariums of $2,500 will be given to advance the awardees’ work in the community as individual honorariums and an honorarium of $5,000 will be awarded to 501c3 nonprofit honorees.",
  sections: [
    {
      heading: "Objective",
      description:
        "The main objective of this Eastside Civic Leadership Award pilot program is to highlight and celebrate individuals, particularly from BIPOC, immigrant, and refugee communities on the Eastside, who have applied their talent, skills, and passion to do something positive in their community, whether their work is on behalf of a nonprofit organization or as an individual.",
    },
    {
      heading: "How we define civic leadership",
      description:
        "We recognize that civic leadership takes many forms and doesn’t always have to be through traditional means or related to legislative or political processes. We define civic leadership as anyone, regardless of age, who took the initiative and dedicated their time, skills, talent, and passion to make a positive impact or improve the quality of life in a community, or to address a specific community problem.",
    },
  ],
};

const tommorow = new Date(); // gets today's date
tommorow.setDate(tommorow.getDate() + 1); // sets the date one day ahead

const timelineContent = {
  countdownDate: tommorow,
};

const judgesContent = {
  heading: "Partner Judges",
  description:
    "During the first year of the program the advisory committee will serve as judges. After the first year, judges will comprise of a mix between previous honorees and members of the advisory committee.",
  cards: [
    {
      heading: "John Doe",
      tag: "First Year",
      imagePath: "images/judge1.jpg",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, autem.",
    },
    {
      heading: "Jane Doe",
      tag: "First Year",
      imagePath: "images/judge2.jpg",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, autem.",
    },
    {
      heading: "John Doe",
      tag: "First Year",
      imagePath: "images/judge3.jpg",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, autem.",
    },
    {
      heading: "Jane Doe",
      tag: "First Year",
      imagePath: "images/judge4.jpg",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, autem.",
    },
    {
      heading: "John Doe",
      tag: "First Year",
      imagePath: "images/judge5.jpg",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, autem.",
    },
  ],
};

const nominationsContent = {
  heading: "Nominations",
  guidelines: [
    "Nominees must live or work on the Eastside.",
    "Nominees have inspired others through either their work, volunteerism, or advocacy efforts with diverse or underrepresented communities. This work is not limited to those serving through nonprofit organizations.",
    "Nominees take the initiative to engage in positive action, especially in times of need.",
    "Nominees deployed creative or innovative solutions or ways to impact change.",
    "Nominees' actions have the potential to result in long lasting positive change.",
  ],
  sections: [
    {
      heading: "Nomination Process",
      description:
        "Nominations may be self-nominations or submitted on behalf of another individual or group. Nominating someone for this award can be done online using the below form, verbally via Google Voice number, or on paper by submitting a simple form with the following questions:",
    },
  ],
};

export {
  heroPageContent,
  awardsContent,
  timelineContent,
  judgesContent,
  nominationsContent,
};
