import styled from "styled-components";
import { PrimaryColor } from "./style";

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
  background: #eee;
  color: #5b5b5b;
  &:hover {
    color: ${PrimaryColor};
  }
`;

export const SecondaryButton = styled(Button)`
  background: #474658;
  color: #fff;
  &:hover {
    color: ${PrimaryColor};
  }
`;

export const NavbarButton = styled(SecondaryButton)`
  background: #474658;
  color: #fff;
  &:hover {
    color: ${PrimaryColor};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
