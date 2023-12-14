import styled from "styled-components";
import { FlexCol, FlexRow, MidBlackColor, PrimaryColor } from "./style";
import { Logo } from "./navbar";

export const FooterContainer = styled.div`
  ${FlexRow}
  width: 100vw;

  padding: 1rem 7.5%;

  background-color: ${PrimaryColor};
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    ${FlexCol}
    gap: 1rem;
  }
`;

export const BlackLogo = styled(Logo)`
  color: ${MidBlackColor};
  border-bottom: 4px solid ${MidBlackColor};
`;

export const FooterText = styled.div`
  font-size: 1.2rem;
  font-family: Inter;
`;
