import styled, { keyframes } from "styled-components";

export const SkillsContainer = styled.div`
  display: flex;
  overflow: hidden;
  user-select: none;
  margin: 24px 32px;

  @media (max-width: 768px) {
    margin: 24px 0;
  }
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
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
