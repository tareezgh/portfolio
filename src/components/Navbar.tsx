import React, { useRef, useState } from "react";

import hamburgerIcon from "../assets/hamburger.png";
import {
  NavbarContainer,
  Logo,
  MobileMenuIcon,
  NavItemsFrame,
  NavItem,
} from "../styles/navbar";

function Navbar() {
  const filters = ["About", "Portfolio", "Contact"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sectionsContainerRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionClassName: string) => {
    const section = document.querySelector(`.${sectionClassName}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <NavbarContainer>
        <Logo>TG</Logo>
        <MobileMenuIcon onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <img src={hamburgerIcon} alt={"Menu"} />
        </MobileMenuIcon>
        <NavItemsFrame isOpen={isMenuOpen} ref={sectionsContainerRef}>
          {filters.map((filter) => (
            <NavItem key={filter} onClick={() => scrollToSection(filter)}>
              {filter}
            </NavItem>
          ))}
        </NavItemsFrame>
      </NavbarContainer>
    </>
  );
}

export default Navbar;
