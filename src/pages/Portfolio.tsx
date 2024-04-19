import { useTranslation } from "react-i18next";
import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../data/projects";
import { ProjectList } from "../styles/portfolio";
import {
  SectionContainer,
  SectionTitle,
  SectionDescription,
} from "../styles/style";

const Portfolio = () => {
 const { t } = useTranslation();
 PROJECTS.title = `${t("portfolio.title")}`;
 PROJECTS.description = `${t("portfolio.description")}`;
 
  return (
    <SectionContainer  id={`${t("portfolio.id")}`}>
      <SectionTitle>{PROJECTS.title}</SectionTitle>
      <SectionDescription>{PROJECTS.description}</SectionDescription>
      <ProjectList>
        {PROJECTS.projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectList>
    </SectionContainer>
  );
};

export default Portfolio;
