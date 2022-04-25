const heroPageContent = {
  heading: "Recognizing Civic Engagement",
  subheading: "Eastside Civic Leadership Awards",
};
const awardsContent = {
  heading: "Awards",
  description:
    "There will be two tracks of honorees - individuals and organizations. Honorariums of $2,500 will be given to individuals and an honorarium of $5,000 will be awarded to 501c3 nonprofit honorees. A total of $40,000 will be awarded in 2022.",
  sections: [
    {
      heading: "Objective and Outcomes",
      description:
        "The objective of the Eastside Civic Leadership Award pilot program is to highlight and celebrate individuals, particularly from Black, Indigenous, Latinx, Native Hawaiian, Asian, immigrant, and refugee communities on the Eastside (Bellevue, Redmond, Sammamish, Issaquah, Kirkland, and Mercer Island), who have applied their talent, skills, and passion to have an impact in their community, whether their work is on behalf of a nonprofit organization or as an individual.",
    },
    {
      heading: "How we define civic leadership",
      description:
        "We recognize that civic leadership takes many forms and doesn’t always have to be through traditional means or related to legislative or political processes. We define civic leadership as anyone, regardless of age, who took the initiative and dedicated their time, skills, talent, and passion to make an impact or improve the quality of life in a community, or to address a specific community issue.",
    },
  ],
};

const tommorow = new Date(); // gets today's date
tommorow.setMinutes(tommorow.getMinutes() + 1); // sets the date one day ahead
const later = new Date();
later.setMinutes(tommorow.getMinutes() + 2);
const timelineContent = {
  countdownDates: [
    "May 16, 2022 12:00:00",
    "July 31, 2022 12:00:00",
    "August 1, 2022 12:00:00",
    "August 25, 2022 12:00:00",
    "September 1, 2022 12:00:00",
  ],
  events: [
    "Nominations open",
    "Nominations Close",
    "Selection Committee Convenes",
    "Awardees Notified",
    "Award Celebration",
  ],
  displayDates: [
    "May 16",
    "July 31",
    "Early August",
    "Late August",
    "Early September",
  ],
};

const judgesContent = {
  heading: "Advisory Committee Members",
  description:
    "During the first year of the program the advisory committee will serve as judges. After the first year, judges will comprise of a mix between previous honorees and members of the advisory committee.",
  cards: [
    {
      heading: "Debbie Lacy",
      tag: "Eastside for All",
      imagePath: "none",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, autem.",
    },
    {
      heading: "Kalika Curry",
      tag: "Pono Pursuit",
      imagePath: "none",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, autem.",
    },
    {
      heading: "Lalita Uppala",
      tag: "IACS",
      imagePath: "none",
      description: "Indian American Community Services.",
    },
    {
      heading: "Mohamed Bakr",
      tag: "MCNA",
      imagePath: "none",
      description: "Muslim Community Network Association.",
    },
    {
      heading: "Monik Martinez",
      tag: "4 Tomorrow",
      imagePath: "none",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, autem.",
    },
    {
      heading: "Pearl Leung",
      tag: "Amazon",
      imagePath: "none",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, autem.",
    },
  ],
};

const nominationsContent = {
  heading: "Nominations",
  guidelines: [
    "Nominees must live or work or volunteer on the Eastside (Bellevue, Redmond, Sammamish, Issaquah, Kirkland, and Mercer Island).",
    "Nominees have inspired others through either their work, volunteerism, or advocacy efforts with diverse or underrepresented communities. This work is not limited to those serving through nonprofit organizations.",
    "Nominees took the initiative to engage in impactful action, especially in times of need.",
    "Nominees deployed creative or innovative solutions or ways to impact change.",
    "Nominees' actions have the potential to result in long-lasting change.",
  ],
  sections: [
    {
      heading: "Nomination Process",
      description:
        "Nominations may be self-nominations or submitted on behalf of another individual or group. Nominating someone for this award can be done online using the below form, verbally by calling and leaving a voicemail at (XXX) XXX-XXXX, or on paper by submitting a simple form with the following questions:",
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
