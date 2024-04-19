import styled from "styled-components";

export const PrimaryColor = "#f7c343";
export const MidBlackColor = "#232020";

export const PrimaryButtonColor = "#5b5b5b";
export const SecondaryButtonColor = "#474658";

export const GreyColor = "#eee";
export const WhiteColor = "#fff";
export const LightGreyColor = "#f5f5f5";

export const FlexCol = `
  display: flex;
  flex-direction: column;
`;

export const FlexRow = `
  display: flex;
  flex-direction: row;
`;

// const fadeInAnimation = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(30px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  overflow: hidden;
  margin: 5rem auto;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: ${WhiteColor};

  @media (max-width: 768px) {
    margin: 0 auto;
    padding-bottom: 2rem;
  }

  &#Portfolio {
    margin-top: 0;
  }

  &#Features,
  &#Contact {
    background: ${LightGreyColor};
    padding-bottom: 5rem;
    margin-bottom: 0;
    @media (max-width: 768px) {
      padding-bottom: 3rem;
    }
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
  color: ${MidBlackColor};
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`;
