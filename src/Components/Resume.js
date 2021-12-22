import React from "react";

function Resume(props) {
  const skillsdata = [
    { name: "ReactJS", level: "80%" },
    { name: "HTML", level: "50%" },
    { name: "SCSS", level: "70%" },
    { name: "NextJS", level: "80%" },
    { name: "Graphql", level: "50%" },
    { name: "Material UI", level: "70%" },
    { name: "Bootstrap", level: "60%" },
    { name: "Git", level: "40%" },
  ];

  const educationData = [
    {
      school: "ETKPI",
      degree: "Dance Director",
      description:
        "Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know.",
      graduated: "2019",
    },
    {
      school: "ACA Armenia",
      degree: "Front End Developer",
      description:
        "Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know.",
      graduated: "2019",
    },
  ];

  const workData = [
    {
      company: "TirSoft",
      title: "Front End Developer",
      description:
        "Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know.",
      years: "February 2021 - September 2021",
    },
  ];

  var education = educationData.map(function (education) {
    return (
      <div key={education.school}>
        <h3>{education.school}</h3>
        <p className="info">
          {education.degree} <span>&bull;</span>
          <em className="date">{education.graduated}</em>
        </p>
        <p>{education.description}</p>
      </div>
    );
  });
  var work = workData.map(function (work) {
    return (
      <div key={work.company}>
        <h3>{work.company}</h3>
        <p className="info">
          {work.title}
          <span>&bull;</span> <em className="date">{work.years}</em>
        </p>
        <p>{work.description}</p>
      </div>
    );
  });
  var skills = skillsdata.map(function (skills) {
    var className = "bar-expand " + skills.name.toLowerCase();
    return (
      <li key={skills.name}>
        <span style={{ width: skills.level }} className={className}></span>
        <em>{skills.name}</em>
      </li>
    );
  });

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{education}</div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">{work}</div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="bars">
            <ul className="skills">{skills}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Resume;
