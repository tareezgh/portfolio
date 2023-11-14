import styled from "styled-components";

export const PortfolioContainer = styled.div`
  text-align: center;
  padding: 40px;
`;

export const ProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CardContainer = styled.a`
  border: 1px solid #eaeaea;
  border-radius: 10px;
  overflow: hidden;
  margin: 16px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: calc(50% - 32px);
    width: 100%;
    margin: 8px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 6px;
  object-fit: contain;
  border-bottom: 1px solid #eaeaea;
`;

export const Content = styled.div`
  padding: 10px;
`;

export const Title = styled.h3`
  margin: 8px 0;
  font-size: 1.5rem;
  text-align: center;

  &:hover {
    color: #f7c343;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
