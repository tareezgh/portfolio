import styled, { keyframes } from "styled-components";
import { FlexCol, MidBlackColor, PrimaryColor, WhiteColor } from "./style";

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

export const ServicesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 24px;
  align-self: stretch;
  flex-wrap: wrap;

  margin: 1.5rem;
`;

export const ServiceWrapper = styled.div`
  ${FlexCol}
  align-items: center;

  .icon,
  .frame {
    transition: background-color 0.3s ease;
  }

  &:hover {
    .frame {
      background: ${PrimaryColor};
    }
    .icon {
      background: ${WhiteColor};
      border: 1px solid ${PrimaryColor};
    }
    .title,
    .description {
      color: ${WhiteColor};
    }
  }
`;

export const ServiceFrame = styled.div`
  ${FlexCol}
  height: 300px;
  width: 414px;
  padding: 80px 32px 34px 32px;
  align-items: center;
  gap: 12px;

  position: relative;
  top: -40px;
  border-radius: 15px;
  border-bottom: 8px solid ${PrimaryColor};
  background: ${WhiteColor};
  box-shadow: 0px 4px 4px 0px rgba(247, 195, 67, 0.25);

  @media (max-width: 768px) {
    width: auto;
  }
`;

export const ServiceIcon = styled.img`
  display: flex;
  width: 84px;
  height: 84px;
  padding: 18px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  z-index: 1;
  object-fit: fit;
  border-radius: 50px;
  background: ${PrimaryColor};
`;

export const ServiceTitle = styled.h2`
  font-family: Inter;
  font-weight: 700;
  color: ${MidBlackColor};
  margin-bottom: 0.5rem;
`;

export const ServiceDescription = styled.p`
  font-family: Inter;
  font-weight: 400;
  color: ${MidBlackColor};
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
