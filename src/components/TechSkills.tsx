import React from "react";
import {
  Image,
  ImageGroup,
  SkillsContainer,
  SkillsListGroup,
} from "../styles/skills";

const TechSkills: React.FC = () => {
  const url = "https://skillicons.dev/icons?i=";
  const skills = [
    "c",
    "java",
    "html",
    "css",
    "js",
    "ts",
    "react",
    "redux",
    "nodejs",
    "express",
    "mongodb",
    "mysql",
    "jest",
    "bootstrap",
    "styledcomponents",
    "git",
    "github",
    "vscode",
    "visualstudio",
    "androidstudio",
    "idea",
    "eclipse",
    "figma",
    "postman",
    "unity",
    "firebase",
  ];

  const renderSkills = () => {
    return (
      <SkillsListGroup>
        {skills.map((skill, index) => (
          <ImageGroup key={index}>
            <Image src={url + skill} alt={skill} />
          </ImageGroup>
        ))}
      </SkillsListGroup>
    );
  };

  return (
    <SkillsContainer>
      {renderSkills()}
      {renderSkills()}
    </SkillsContainer>
  );
};

export default TechSkills;
