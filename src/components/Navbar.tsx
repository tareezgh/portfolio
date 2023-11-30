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
import { scrollToSection } from "../utils/helpers";

function Navbar() {
  const filters = ["Home", "About", "Portfolio"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("");
  const sectionsContainerRef = useRef<HTMLDivElement>(null);


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
