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
    <SectionContainer className="Portfolio">
      <SectionTitle>Portfolio</SectionTitle>
      <SectionDescription>
        Discover my portfolio—where innovation meets functionality. Dive into
        projects showcasing my full-stack expertise, seamlessly blending
        technology and design for immersive web and mobile experiences.
      </SectionDescription>
      <ProjectList>
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectList>
    </SectionContainer>
  );
};

export default Portfolio;
