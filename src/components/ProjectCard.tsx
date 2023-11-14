import React from "react";
import { Project } from "../types/interface";
import { CardContainer, Content, Image, Title } from "../styles/portfolio";

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
    <CardContainer onClick={handleCardClick}>
      <Image src={project.imageUrl} alt={project.title} />
      <Content>
        <Title>{project.title}</Title>
      </Content>
    </CardContainer>
  );
};

export default ProjectCard;
