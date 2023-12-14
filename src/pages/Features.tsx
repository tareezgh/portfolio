import React from "react";
import {
  Image,
  ImageGroup,
  ServicesContainer,
  ServiceFrame,
  ServiceIcon,
  SkillsIcons,
  SkillsListGroup,
  ServiceTitle,
  ServiceDescription,
  ServiceWrapper,
} from "../styles/features";
import {
  SectionContainer,
  SectionTitle,
  SectionDescription,
} from "../styles/style";

import { SERVICES } from "../data/services";
import { skills, skillsUrl } from "../data/constant";

const Features: React.FC = () => {
  const renderSkills = () => {
    return (
      <SkillsListGroup>
        {skills.map((skill, index) => (
          <ImageGroup key={index}>
            <Image src={skillsUrl + skill} />
          </ImageGroup>
        ))}
      </SkillsListGroup>
    );
  };

  return (
    <SectionContainer id="Features">
      <SectionTitle>{SERVICES.title}</SectionTitle>
      <SectionDescription>{SERVICES.description}</SectionDescription>
      <ServicesContainer>
        {SERVICES.services.map((service, index: number) => (
          <ServiceWrapper key={index}>
            <ServiceIcon src={service.iconUrl} className="icon" />
            <ServiceFrame className="frame">
              <ServiceTitle className="title">{service.title}</ServiceTitle>
              <ServiceDescription className="description">
                {service.description}
              </ServiceDescription>
            </ServiceFrame>
          </ServiceWrapper>
        ))}
      </ServicesContainer>
      <SkillsIcons>
        {renderSkills()}
        {renderSkills()}
      </SkillsIcons>
    </SectionContainer>
  );
};

export default Features;
