import React from "react";
import {
  Image,
  ImageGroup,
  SkillBar,
  SkillBarText,
  SkillBars,
  SkillsIcons,
  SkillsListGroup,
} from "../styles/skills";
import {
  SectionContainer,
  SectionTitle,
  SectionDescription,
} from "../styles/style";

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
            <Image src={url + skill} />
          </ImageGroup>
        ))}
      </SkillsListGroup>
    );
  };

  return (
    <SectionContainer className="About">
      <SectionTitle>What I Offer</SectionTitle>
      <SectionDescription>
        As a Full-Stack Developer specializing in web, mobile, and app design, I
        bring a comprehensive skill set that spans across these domains
      </SectionDescription>
      <SkillBars>
        <SkillBar>
          <SkillBarText>
            <h2>Web Development</h2>
            <p>
              Proficiency in creating responsive, user-centric web applications
              using React, HTML, CSS, and JavaScript. Passionate about
              delivering seamless experiences across various browsers and
              devices.
            </p>
          </SkillBarText>
        </SkillBar>
        <SkillBar>
          <SkillBarText>
            <h2>Mobile Development</h2>
            <p>
              Skilled in mobile app development, utilizing frameworks such as
              React Native to build cross-platform applications. Ensuring
              intuitive UI/UX and optimal performance across iOS and Android
              platforms.
            </p>
          </SkillBarText>
        </SkillBar>
        <SkillBar>
          <SkillBarText>
            <h2>App Design</h2>
            <p>
              Proficient in UI/UX design principles, contributing to visually
              stunning and intuitive applications. Adept at using design tools
              like Figma to craft engaging interfaces.
            </p>
          </SkillBarText>
        </SkillBar>
      </SkillBars>
      <SkillsIcons>
        {renderSkills()}
        {renderSkills()}
      </SkillsIcons>
    </SectionContainer>
  );
};

export default TechSkills;
