import React from "react";
import { Project } from "../data/projects";
import {
  CardContainer,
  Content,
  Icons,
  Image,
  Title,
} from "../styles/portfolio";
import SocialIcon from "./SocialIcon";
import codeIcon from "../assets/code.webp";
import linkIcon from "../assets/link.webp";
interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const handleCardClick = () => {
    if (project.webUrl) {
      window.open(project.webUrl, "_blank");
    }
  };
  return (
    <CardContainer>
      <Image
        src={project.imageUrl}
        alt={project.title}
        onClick={handleCardClick}
      />
      <Content>
        <Title onClick={handleCardClick}>{project.title}</Title>
        <Icons>
          <SocialIcon href={project.webUrl} imageSrc={linkIcon} alt="Website" />
          {project.codeUrl ? (
            <SocialIcon
              href={project.codeUrl}
              imageSrc={codeIcon}
              alt="Code-GitHub"
            />
          ) : (
            ""
          )}
        </Icons>
      </Content>
    </CardContainer>
  );
};

export default ProjectCard;
