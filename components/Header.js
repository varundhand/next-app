import React from "react";
import headerStyles from "../styles/Header.module.css";

const Header = () => {
  // const mode = "dark";
  return (
    <div className={headerStyles.title}>
      <h1 className="title">
        <span>WebDev</span> News
      </h1>
      {/* <style jsx> //* INLINE CSS
        {` 
          .title {
            color: ${mode == "dark" ? "whitesmoke" : "black"};
          }
        `}
      </style> */}
      <p className={headerStyles.description}>
        Keep up to date with the latest webdev news
      </p>
    </div>
  );
};

export default Header;
