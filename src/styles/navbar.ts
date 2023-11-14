import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 64px;
  padding: 5px 10%;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 1000;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid #a6a4a4;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0);
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
  color: #f7c343;
  font-family: Barlow Semi Condensed;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-bottom: 4px solid #f7c343;
  cursor: pointer;
`;

export const NavItemsFrame = styled.div<{
  isOpen: boolean;
}>`
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #fff;
    padding: 10px;
  }
`;

export const NavItem = styled.div`
  display: flex;
  padding: 10px 0px;
  align-items: center;
  color: #232020;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  &:hover {
    color: #f7c343;
    font-weight: 700;
    border-bottom: 1px solid #f7c343;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;
