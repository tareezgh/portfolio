import styled from "styled-components";

export const PrimaryColor = "#f7c343";

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 65rem;
  overflow: hidden;
  margin: 5rem auto;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;
export const SectionTitle = styled.div`
  font-size: 3rem;
  font-family: Inter;
  font-weight: 600;
  padding-top: 3rem;
  margin-bottom: 1.5rem;
  color: ${PrimaryColor};

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
`;
export const SectionDescription = styled.div`
  font-size: 1.5rem;
  font-family: Inter;
  font-weight: 300;
  max-width: 50rem;
  padding: 0 2rem;
  margin-bottom: 1rem;
  color: #474658;
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`;
