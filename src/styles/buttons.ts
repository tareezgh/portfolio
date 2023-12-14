import styled from "styled-components";
import {
  GreyColor,
  PrimaryButtonColor,
  PrimaryColor,
  SecondaryButtonColor,
  WhiteColor,
} from "./style";

const Button = styled.div`
  display: flex;
  padding: 14px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  font-weight: 600;

  &:hover {
    font-weight: 700;
    cursor: pointer;
  }
`;

export const PrimaryButton = styled(Button)`
  background: ${GreyColor};
  color: ${PrimaryButtonColor};
  &:hover {
    color: ${PrimaryColor};
  }
`;

export const SecondaryButton = styled(Button)`
  background: ${SecondaryButtonColor};
  color: ${WhiteColor};
  &:hover {
    color: ${PrimaryColor};
  }
`;

export const NavbarButton = styled(SecondaryButton)`
  @media (max-width: 768px) {
    display: none;
  }
`;
