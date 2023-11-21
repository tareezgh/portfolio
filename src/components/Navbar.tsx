import React, { useRef, useState } from "react";

import hamburgerIcon from "../assets/hamburger.png";
import {
  NavbarContainer,
  Logo,
  MobileMenuIcon,
  NavItemsFrame,
  NavItem,
} from "../styles/navbar";
import { NavbarButton } from "../styles/buttons";

function Navbar() {
  const filters = ["Home", "About", "Portfolio"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("");
  const sectionsContainerRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionClassName: string) => {
    const section = document.querySelector(`.${sectionClassName}`);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });

      const offsetValue = section.getBoundingClientRect().top - 100;

      window.scrollBy({
        top: offsetValue,
        behavior: "smooth",
      });

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
        <NavItemsFrame open={isMenuOpen} ref={sectionsContainerRef}>
          {filters.map((filter) => (
            <NavItem
              key={filter}
              active={filter === activeFilter ? true : false}
              onClick={() => {
                scrollToSection(filter);
                setActiveFilter(filter);
              }}
            >
              {filter}
            </NavItem>
          ))}
        </NavItemsFrame>
        <NavbarButton onClick={() => scrollToSection("Contact")}>
          Contact
        </NavbarButton>
      </NavbarContainer>
    </>
  );
}

export default Navbar;
