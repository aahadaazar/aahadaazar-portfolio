import axios from "axios";
import React, { useEffect, useState } from "react";

const workExperienceList = [
  {
    title: "Sudofy",
    description: "Software Engineer (July 2022 - Present)",
  },
  {
    title: "Sudofy",
    description: "Associate Software Engineer (May 2018 - June 2022)",
  },
  {
    title: "Sudofy",
    description: "Intern (Feb 2018 - Apr 2018)",
  },
];

const skillsList = [
  {
    title: "Frontend",
    description:
      "NextJs, React, Redux, Redux Toolkit, GraphQL, JavaScript, Webflow, Material UI, Ant Design, Storybooks, Apex Charts, SASS, CSS",
  },
  {
    title: "Backend",
    description: "NodeJs, NestJs",
  },
  {
    title: "Data Analytics",
    description:
      "Power BI, SQL, Python, AWS Quicksight, AWS Athena, Tableau, Google Data Studio, Google Optimize, Google Analytics, Hubspot Analytics",
  },
];

function Body(props) {
  return (
    <div className={"w-full h-full flex-1 p-[10px] overflow-y-auto"}>
      <p className="text-xl text-center mb-[30px]">
        Hi! I'm Aahad. I'm working Software Engineer at <b>Sudofy</b>.
        <br />I help elevate startups from <b>Engineering</b>, <b>Data</b> and{" "}
        <b>Product</b> perspective
      </p>
      <h2 className={`text-xl underline`}>
        <b>Work Experience</b>
      </h2>
      {workExperienceList.map((o, index) => {
        return (
          <div key={`${index}-${o.title}`} className="mb-[20px] mt-[10px]">
            <span className="text-[#8b8b8b]">
              <b>{o.title}</b>
            </span>
            <p className="mt-[3px]">{o.description}</p>
          </div>
        );
      })}
      <h2 className={`text-xl underline`}>
        <b>Skills</b>
      </h2>
      {skillsList.map((o) => {
        return (
          <div key={o.title} className="mb-[20px] mt-[10px]">
            <span className="text-[#8b8b8b]">
              <b>{o.title}</b>
            </span>
            <p className="mt-[3px]">{o.description}</p>
          </div>
        );
      })}
      <h2 className={`text-xl underline`}>
        <b>Blogs</b>
      </h2>
      <div className="mb-[20px] mt-[10px]">
        <span className="text-[#8b8b8b]">
          <b>Coming soon!</b>
        </span>
      </div>
    </div>
  );
}

export default Body;
