import React, { useEffect, useRef, useState } from "react";

import hamburgerIcon from "../assets/hamburger.png";
import {
  NavbarContainer,
  Logo,
  MobileMenuIcon,
  NavItemsFrame,
  NavItem,
} from "../styles/navbar";
import { NavbarButton } from "../styles/buttons";
import { scrollToSectionById } from "../utils/helpers";

function Navbar() {
  const filters = ["Home", "Features", "Portfolio"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sectionsContainerRef = useRef<HTMLDivElement>(null);

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = document.querySelectorAll("section");
      const scrollPosition = window.scrollY;

      sectionElements.forEach((section) => {
        const top = section.offsetTop - 110;
        const bottom = top + section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <NavbarContainer id="Navbar">
        <Logo>TG</Logo>
        <MobileMenuIcon onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <img src={hamburgerIcon} alt={"Menu"} />
        </MobileMenuIcon>
        <NavItemsFrame open={isMenuOpen} ref={sectionsContainerRef}>
          {filters.map((filter) => (
            <NavItem
              key={filter}
              className={activeSection === filter ? "active" : ""}
              onClick={() => {
                scrollToSectionById(filter);
              }}
            >
              {filter}
            </NavItem>
          ))}
        </NavItemsFrame>
        <NavbarButton onClick={() => scrollToSectionById("Contact")}>
          Contact
        </NavbarButton>
      </NavbarContainer>
    </>
  );
}

export default Navbar;
