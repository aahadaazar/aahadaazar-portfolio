import React from "react";
import styles from "@/styles/Home.module.css";

function Header(props) {
  return (
    <div className="flex items-center w-full justify-center mb-[20px]">
      <h1 className={`text-4xl text-white px-[10px] py-[2px]`}>
        <span className={`${styles["name-heading"]} relative`}>
          Aahad Aazar
        </span>
      </h1>
    </div>
  );
}

export default Header;
