import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../types/interface";
import { PortfolioContainer, ProjectList } from "../styles/portfolio";
import { Header } from "../styles/general";

const Portfolio = () => {
  return (
    <PortfolioContainer className="Portfolio">
      <Header>Portfolio</Header>
      <ProjectList>
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectList>
    </PortfolioContainer>
  );
};

export default Portfolio;
