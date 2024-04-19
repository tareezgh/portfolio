import styled from "styled-components";
import { MidBlackColor, PrimaryColor, WhiteColor } from "./style";

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 5rem;
  width: 100vw;
  padding: 0 7.5%;
  box-sizing: border-box;

  background-color: ${WhiteColor};
  align-items: center;
  justify-content: space-between;
  position: sticky;
  z-index: 1000;
  top: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
    background-color: ${WhiteColor};
    padding: 10px;
  }
`;

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem;
  color: ${MidBlackColor};
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

  &.active {
    color: ${PrimaryColor};
    font-weight: 700;
    border-bottom: 1px solid ${PrimaryColor};
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const SideFrame = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LanguageButton = styled.button`
  padding: 0.5rem 1rem;
  padding-bottom: 0;
  border: 1px solid transparent;
  background-color: transparent;

  img {
    width: 20px;
    hight: 20px;
  }
  &:hover {
    cursor: pointer;
    img {
      width: 24px;
      hight: 24px;
    }
  }


`;

export const LanguageDropdown = styled.div<{
  open: boolean;
  buttonRect: DOMRect | undefined;
}>`
  position: fixed;
  z-index: 1000;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 5px;
  gap: 2px;
  display: ${({ open }) => (open ? "block" : "none")};
  transition: opacity 0.3s ease, transform 0.3s ease;
  opacity: ${({ open }) => (open ? "1" : "0")};

  ${({ buttonRect }) =>
    buttonRect &&
    `
    top: ${buttonRect.bottom}px;
    left: ${buttonRect.left}px;
  `}

  transform: translateY(${({ open }) => (open ? "0" : "-10px")});

  @media (max-width: 768px) {
    top: 340px;
    left: 45%;
  }
`;
export const LanguageDropdown1 = styled.div<{
  open: boolean;
  buttonRect: DOMRect | undefined;
}>`
  position: absolute;

  top: ${({ buttonRect }) => (buttonRect ? `${buttonRect.bottom}px` : "60px")};
  left: ${({ buttonRect }) => (buttonRect ? `${buttonRect.left}px` : "60px")};
  z-index: 1000;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 5px;
  gap: 2px;
  display: ${({ open }) => (open ? "block" : "none")};
  transition: opacity 0.3s ease, transform 0.3s ease;
  transform: translateY(${({ open }) => (open ? "0" : "-10px")});
  opacity: ${({ open }) => (open ? "1" : "0")};

  @media (max-width: 768px) {
    top: 340px;
    left: 45%;
  }
`;

export const LanguageOption = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;
