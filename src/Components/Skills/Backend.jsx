import React from "react";

import MySQL from "../../assets/mysql-logo.svg";

const Backend = () => {
  const skillArr = [
    {
      icon: (
        <img
          className="skill__icons"
          alt=""
          src={MySQL}
        />
      ),
      skillName: "MySQL",
    },

    { icon: <i className="bx bxl-git"></i>, skillName: "Git" },
  ];

  let renderSkills = () => {
    return skillArr.map((skill, index) => {
      return (
        <div
          className="skills__data"
          key={index}
        >
          {skill.icon}
          <div>
            <h3 className="skills__name">{skill.skillName}</h3>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="skills__content">
      <h3 className="skills__title">
        Backend Developer <small>(studying)</small>
      </h3>

      <div className="skills__box">
        <div className="skills__group">{renderSkills()}</div>
      </div>
    </div>
  );
};

export default Backend;
