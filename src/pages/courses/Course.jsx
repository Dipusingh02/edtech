// import React from 'react'
import Navbar from "../../components/navbar/Navbar";
import ReactPlayer from "react-player";
import "./courses.css";
import React, { useState } from "react";
import img2 from "../../assests/Vector.png";

const Course = () => {
  const weeks = [
    {
      id: 1,
      title: <b>Intoduction</b>,
      content: [
        "Module 1: Introduction to Web Development",
        "Module 2: HTML Fundamentals",
        "Content 1.3",
        "Content 1.4",
        "Content 1.5",
        "Content 1.6",
      ],
    },

    {
      id: 2,
      title: <b>Frontend</b>,
      content: [
        <b className="aaa"> HTML </b>,
        "HTML Basics",
        "Semantic and Non-Semantics",
        "HTML Tags",
        "HTML Forms",
        "HTML Lists",
        "HTML Tables",
        "HTML Attributes",
        "HTML Graphics",
        "HTML APIs",
        "HTML DOM",
        "HTML Audio/Video",
        "HTML 5",
        "HTML 5 MathML",
        <b className="aaa"> CSS </b>,
        "CSS Colors",
        "CSS Borders",
        "CSS Height and Width",
        "CSS Align",
        "CSS Lists",
        "CSS Tables",
        "CSS Flex",
        "CSS Grid",
        "CSS DropDown",
        "CSS Z-index",
        "CSS Box-Model",
        "CSS Transitions",
        <b className="aaa">Tailwind CSS</b>,
        "Introduction to Tailwind CSS",
        "Tailwind CSS Layout",
        "Tailwind CSS Backgrounds ",
        "Tailwind CSS Borders",
        "Tailwind CSS Alignment ",
        "Tailwind CSS Spacing",
        "Tailwind CSS Sizing ",
        "Tailwind CSS Typography",
        "Tailwind CSS Flexbox",
        "Tailwind CSS Grid",
        "Tailwind CSS Effects",
        " Tailwind CSS Filters ",
        "Tailwind CSS Tables ",
        "Tailwind CSS Transitions and Animation ",
        "Tailwind CSS Transforms",
        "Tailwind CSS Interactivity ",
        "Tailwind CSS SVG",
        <b className="aaa">JavaScript</b>,
        "JS Basics",
        "JS Operators",
        "JS Loops",
        "JS Debugging",
        "JS Array Methods",
        "JS String Methods",
        "JS Math Object",
        "JS Date Object",
        "JS Boolean and DataView",
        "JS Form",
        "JS Advance",
        "DOM",
      ],
    },

    {
      id: 3,
      title: <b>Backend</b>,
      content: [
        <b className="aaa">Node.js </b>,
        "Node.js Basic ",
        "Node.js Assert Module",
        "Node.js Buffer Module",
        "Node.js Console Module",
        "Node.js Crypto Module",
        "Node.js DNS Module",
        "Node.js File System Module",
        "Node.js Globals",
        "Node.js HTTP Module",
        "Node.js OS Module",
        <b className="aaa">Express.js</b>,
        "Express Introduction",
        "Express.js Application creation",
        "Express.js express() functions",
        "Express.js Applications",
        "Express.js Requests Functions",
        "Express.js Response Functions",
        "Express.js Router Functions",
      ],
    },

    {
      id: 4,
      title: <b>Database</b>,
      content: [
        <b className="aaa"> MongoDB </b>,
        "Introduction to MongoDB",
        "Installation of MongoDB",
        "Basics of MongoDB",
        "MongoDB Methods",
        "MongoDB Operators",
        "Working with Documents and Collections",
        "Indexing in MongoDB",
        "MongoDB Applications and Projects",
        "CRUD in MongoDB",
      ],
    },

    {
      id: 5,
      title: <b>Version Control</b>,
      content: [
        <b className="aaa"> Git </b>,
        "git init",
        "git config",
        "git clone",
        "git add",
        "git commit",
        "git push",
        "git origin master",
        "git fork",
        " git rename",
      ],
    },
  ];

  const [openWeeks, setOpenWeeks] = useState({});

  const toggleDropdown = (id) => {
    setOpenWeeks((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div >
      <div className="container-courses">
        <ReactPlayer
          className="react-player"
          url={"https://youtu.be/iu-LBY7NXD4?si=RxKHDPCc4AVRr3AI"}
        />

        <div className="content">
          Full Stack <spam className="name"> Web Devlopment </spam>Course.
        </div>
        <p className="para">
          Embark on a creative journey and master the art of crafting your
          unique 3D character using Blender. Dive into the fascinating process
          of bringing your imaginative ideas to life as you explore the
          intricate features of Blender. Embark on a creative journey and master
          the art of crafting your unique 3D character using Blender. Dive into
          the fascinating process of bringing your imaginative ideas to life as
          you explore the intricate features of Blender.
        </p>
      </div>
      <div className="course">
        <h3>Course curriculum for the curious </h3>
      </div>

      <div className="container-intro">
        <div>
          {weeks.map((week) => (
            <div key={week.id} className="dropdown">
              <button
                onClick={() => toggleDropdown(week.id)}
                className="dropdown-button"
              >
                <span className="icon">{openWeeks[week.id] ? "×" : "+"}</span>
                {week.title}
              </button>
              {openWeeks[week.id] && (
                <ul className="dropdown-content">
                  {week.content.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Course;
