import axios from "axios";
import React, { useEffect, useState } from "react";

const workExperienceList = [
  {
    title: "Scalers",
    description: "Software Engineer (October 2023 - Present)",
  },
  {
    title: "Chikoo",
    description: "Senior Software Engineer (May 2023 - October 2023)",
  },
  {
    title: "Sudofy",
    description: "Software Engineer (July 2022 - May 2023)",
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
      "NextJs, React, Redux, Redux Toolkit, GraphQL, ApolloQL, JavaScript, Webflow, Material UI, Ant Design, Tailwind, Storybooks, Apex Charts, SASS, CSS",
  },
  {
    title: "Backend",
    description: "NodeJs, NestJs, Python, Django, Postgres, AWS, FastAPI",
  },
  {
    title: "Data Analytics",
    description:
      "Power BI, SQL, Python, AWS Quicksight, AWS Athena, Tableau, Google Data Studio, Google Optimize, Google Analytics, Hubspot Analytics",
  },
];

function Body() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@abdulaahadaazar"
      )
      .then((res) => {
        setBlogs(res.data.items);
      });
  }, []);

  return (
    <div className={"w-full h-full flex-1 p-[10px] overflow-y-auto main-body"}>
      <p className="text-xl text-center mb-[30px]">
        Hi! I'm Aahad. I'm working as Senior Software Engineer at <b>Scalers</b>
        .
        <br />I help elevate startups from <b>Engineering</b>, <b>Data</b> and{" "}
        <b>AI</b> perspective
      </p>
      <h2 className={`text-xl underline`}>
        <b>Work Experience</b>
      </h2>
      {workExperienceList.map((o, index) => {
        return (
          <div key={`${index}-${o.title}`} className="mb-[20px] mt-[10px]">
            <span className="text-[#5d5d5d]">
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
            <span className="text-[#5d5d5d]">
              <b>{o.title}</b>
            </span>
            <p className="mt-[3px]">{o.description}</p>
          </div>
        );
      })}
      <h2 className={`text-xl underline`}>
        <b>Blogs</b>
      </h2>
      {blogs.map((o) => {
        return (
          <div key={o.title} className="mb-[20px] mt-[10px]">
            <a href={o.link.split("?")[0]} target="_blank">
              <span className="text-[#5d5d5d]">
                <b>{o.title}</b>
              </span>
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Body;
