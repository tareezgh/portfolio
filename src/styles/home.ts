import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 50px;
  margin-left: 10%;
  margin-top: 50px;
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

export const HeroImage = styled.div`
  border-radius: 1rem;

  object-fit: contain;
  overflow: hidden;
  img {
    width: 600px;
    height: 550px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const WelcomeTitle = styled.div`
  color: #f7c343;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  @media (max-width: 768px) {
    gap: 5px;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  color: #232020;
  font-family: Inter;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 28px;
    flex-direction: column;
  }
`;

export const Name = styled.div`
  color: #f7c343;
  margin-left: 10px;
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const Description = styled.div`
  width: 550px;
  color: #474658;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 768px) {
    font-size: 14px;
    width: auto;
    margin-right: 30px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;
