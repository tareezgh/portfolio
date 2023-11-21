import styled from "styled-components";
import { PrimaryColor } from "./style";
import { Logo } from "./navbar";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;

  padding: 1rem 7.5%;
  margin-top: 2rem;
  background-color: ${PrimaryColor};
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const WhiteLogo = styled(Logo)`
  color: white;
  border-bottom: 4px solid white;
`;

export const FooterText = styled.div`
  font-size: 1.2rem;
  font-family: Inter;
`;
