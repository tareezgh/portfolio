import styled, { css } from "styled-components";
import { PrimaryColor } from "./style";

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 5rem;
  width: 100vw;
  padding: 0 7.5%;
  box-sizing: border-box;

  background-color: #fff;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  z-index: 1000;
  top: 0;
`;

export const MobileMenuIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
  img {
    width: 24px;
    height: 24px;
  }
`;

export const Logo = styled.div`
  display: flex;
  padding: 5px;
  justify-content: center;
  align-items: center;
  color: ${PrimaryColor};
  font-family: Barlow Semi Condensed;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-bottom: 4px solid ${PrimaryColor};
  cursor: pointer;
`;

export const NavItemsFrame = styled.div<{
  open: boolean;
}>`
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: 768px) {
    display: ${(props) => (props.open ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #fff;
    padding: 10px;
  }
`;

export const NavItem = styled.div<{
  active: boolean;
}>`
  display: flex;
  align-items: center;
  margin: 1rem;
  color: #232020;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  &:hover {
    color: ${PrimaryColor};
    font-weight: 700;
    border-bottom: 1px solid ${PrimaryColor};
    cursor: pointer;
  }

  ${({ active }) =>
    active &&
    css`
      color: ${PrimaryColor};
      font-weight: 700;
      border-bottom: 1px solid ${PrimaryColor};
    `}

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;
