import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../data/projects";
import { ProjectList } from "../styles/portfolio";
import {
  SectionContainer,
  SectionTitle,
  SectionDescription,
} from "../styles/style";

const Portfolio = () => {
  return (
    <SectionContainer id="Portfolio">
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
