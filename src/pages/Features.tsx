import React from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  SERVICES.title = `${t("services.title")}`;
  SERVICES.description = `${t("services.description")}`;
  SERVICES.services.forEach((service, index) => {
    service.title = t(`services.service${index}.title`);
    service.description = t(`services.service${index}.description`);
  });
  const renderSkills = () => {
    return (
      <SkillsListGroup>
        {skills.map((skill, index) => (
          <ImageGroup key={index}>
            <Image src={skillsUrl + skill} alt={`${skill}`} />
          </ImageGroup>
        ))}
      </SkillsListGroup>
    );
  };

  return (
    <SectionContainer id={`${t("services.id")}`}>
      <SectionTitle>{SERVICES.title}</SectionTitle>
      <SectionDescription>{SERVICES.description}</SectionDescription>
      <ServicesContainer>
        {SERVICES.services.map((service, index: number) => (
          <ServiceWrapper key={index}>
            <ServiceIcon src={service.iconUrl} className="icon" alt="Icon" />
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
