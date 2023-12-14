import styled from "styled-components";
import { FlexRow, LightGreyColor, PrimaryColor } from "./style";

export const ProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const CardContainer = styled.a`
  border: 1px solid ${LightGreyColor};
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
    width: auto;
    margin: 8px;
    padding: 10px;
  }
`;

export const Image = styled.img`
  height: 12rem;
  border-radius: 6px;
  object-fit: cover;
  border-bottom: 1px solid ${LightGreyColor};

  @media (max-width: 768px) {
    height: 10rem;
  }
`;

export const Icons = styled.div`
  ${FlexRow}
  gap: 8px;
`;

export const Content = styled.div`
  ${FlexRow}
  align-items: center;
  justify-content: space-between;
  padding: 12px;
`;

export const Title = styled.h3`
  margin: 8px 0;
  font-size: 1.5rem;
  text-align: center;

  &:hover {
    color: ${PrimaryColor};
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
