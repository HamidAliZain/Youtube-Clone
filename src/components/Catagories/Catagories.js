import React, { useState } from "react";
import "./_catagories.scss";

let Catago = [
  "React",
  "React-Redux",
  "React-Native",
  "Use Of Api ",
  "React-Hooks",
  "Material-UI",
  "Bootstrap",
  "Assignment",
  "Projects",
  "GitHub Repo",
  "GitHub Push ",
  "Firebase",
  "GitHub Push ",
  "Firebase",
  "Inteviewa",
  "Updated Versions Of Vs Code",
];

export const Catagories = () => {
  const [active, setActive] = useState("active");
  const handleActive = (value) => {
    setActive(value);
  };

  return (
    <div className="Catagories">
      {Catago.map((value, index) => {
        return (
          <div
            onClick={() => handleActive(value)}
            key={index}
            className={active === value ? "active" : ""}
          >
            {value}
          </div>
        );
      })}
    </div>
  );
};
