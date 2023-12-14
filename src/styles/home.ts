import styled from "styled-components";
import { FlexCol, FlexRow, MidBlackColor, PrimaryColor } from "./style";

export const IntroContainer = styled.section`
  width: 100vw;
  height: 60vh;
  max-width: 85%;
  margin: 50px auto;
  position: relative;
  align-items: flex-start;
  gap: 50px;
  @media (max-width: 768px) {
    height: auto;
  }
`;

export const IntroContent = styled.div`
  ${FlexCol}
  align-items: flex-start;
  gap: 24px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

export const IntroImage = styled.div`
  border-radius: 1rem;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  object-fit: contain;
  overflow: hidden;
  img {
    width: 550px;
    height: 70vh;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const WelcomeTitle = styled.div`
  color: ${PrimaryColor};
  font-family: Inter;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const TextWrapper = styled.div`
  ${FlexCol}
  align-items: flex-start;
  gap: 10px;
`;

export const IntroTitle = styled.div`
  ${FlexRow}
  color: ${MidBlackColor};
  font-family: Inter;
  font-size: 3rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    ${FlexCol}
  }
`;

export const IntroName = styled.span`
  color: ${PrimaryColor};
  margin-left: 10px;
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const IntroPara = styled.div`
  width: 500px;
  color: ${MidBlackColor};
  font-family: Inter;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 768px) {
    font-size: 1rem;
    width: 85%;
    margin-right: 30px;
  }
`;

export const ButtonContainer = styled.div`
  ${FlexRow}
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    ${FlexCol}
  }
`;

export const SocialContainer = styled.div`
  ${FlexRow}
  gap:20px;
`;
