import Image from "next/image";
import React from "react";

const links = [
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/aahad-aazar-b83b77197/",
    icon: "https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-linkedin-3.png",
  },
  {
    title: "Github",
    link: "https://github.com/aahadaazar",
    icon: "https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-github-3.png",
  },
  {
    title: "Medium",
    link: "https://medium.com/@abdulaahadaazar",
    icon: "https://cdns.iconmonstr.com/wp-content/releases/preview/2018/240/iconmonstr-medium-3.png",
  },
  {
    title: "Email",
    link: "mailto:aahadaazar@hotmail.com",
    icon: "https://cdns.iconmonstr.com/wp-content/releases/preview/2013/240/iconmonstr-paper-plane-1.png",
  },
];

function Subheader(props) {
  return (
    <div className="flex items-center justify-center my-[10px]">
      {links.map((o) => {
        return (
          <a className="mx-[5px]" key={o.title} href={o.link} target="_blank">
            <Image src={o.icon} width={20} height={20} alt={o.title} />
          </a>
        );
      })}
    </div>
  );
}

export default Subheader;
