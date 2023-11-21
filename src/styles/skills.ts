import styled, { keyframes } from "styled-components";
import { PrimaryColor } from "./style";

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

export const SkillBars = styled.div`
  margin: 1.5rem;
  width: 100vw;
  max-width: 80%;
  text-align: center;
`;
export const SkillBar = styled.div`
  display: flex;
  margin: 1rem;
  padding: 2rem 2rem;
  border-radius: 0.5rem;

  background: ${PrimaryColor};
`;
// not used
export const SkillBarImg = styled.img`
  object-fit: cover;
  height: 3rem;
  width: 3rem;
  margin-right: 2rem;
`;
export const SkillBarText = styled.div`
  font-size: 1rem;
  font-family: Inter;
  font-weight: 500;

  h2 {
    margin-bottom: 0.5rem;
  }

  p {
    color: #474658;
  }
`;

export const SkillsIcons = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SkillsListGroup = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  animation: ${scrollX} 20s linear infinite;
`;

export const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  padding: 0.5rem;
`;

export const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;
