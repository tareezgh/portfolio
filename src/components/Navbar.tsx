import React, { useEffect, useRef, useState } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import {
  NavbarContainer,
  Logo,
  MobileMenuIcon,
  NavItemsFrame,
  NavItem,
  LanguageButton,
  LanguageDropdown,
  LanguageOption,
  SideFrame,
} from "../styles/navbar";
import { NavbarButton } from "../styles/buttons";
import { scrollToSectionById } from "../utils/helpers";
import hamburgerIcon from "../assets/hamburger.svg";
import langIcon from "../assets/globe.svg";

function Navbar() {
  const { t } = useTranslation();
  const filters = [
    `${t("navbar.home")}`,
    `${t("navbar.services")}`,
    `${t("navbar.portfolio")}`,
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [buttonRect, setButtonRect] = useState<DOMRect | undefined>(undefined);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const sectionsContainerRef = useRef<HTMLDivElement>(null);
  const languageButtonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

    const handleResize = () => {
      if (languageButtonRef.current) {
        const rect = languageButtonRef.current.getBoundingClientRect();
        setButtonRect(rect);
      }
    };
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    if (languageButtonRef.current) {
      handleResize();
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleLanguageSelect = (language: string) => {
    i18next.changeLanguage(language);
    localStorage.setItem("selectedLanguage", language);
    if (language === "ar" || language === "he") {
      document.documentElement.setAttribute("dir", "rtl");
      document.documentElement.setAttribute("lang", language);
    } else {
      document.documentElement.setAttribute("dir", "ltr");
      document.documentElement.setAttribute("lang", "en");
    }
    setIsDropdownOpen(false);
    window.location.reload();
  };

  const isMobile = () => {
    return window.innerWidth <= 768;
  };
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
                setIsMenuOpen(false);
              }}
            >
              {filter}
            </NavItem>
          ))}
          {isMobile() ? (
            <LanguageButton ref={languageButtonRef} onClick={toggleDropdown}>
              <img src={langIcon} alt="Language" />
            </LanguageButton>
          ) : (
            <></>
          )}
        </NavItemsFrame>
        <SideFrame>
          {!isMobile() ? (
            <LanguageButton
              ref={languageButtonRef}
              onClick={toggleDropdown}
              className="desktop"
            >
              <img src={langIcon} alt="Language" />
            </LanguageButton>
          ) : (
            <></>
          )}
          <NavbarButton onClick={() => scrollToSectionById(`${t("contact.id")}`)}>
            {t("navbar.contact")}
          </NavbarButton>
        </SideFrame>
      </NavbarContainer>
      <LanguageDropdown
        open={isDropdownOpen}
        buttonRect={buttonRect}
        ref={dropdownRef}
      >
        <LanguageOption onClick={() => handleLanguageSelect("en")}>
          {t("english")}
        </LanguageOption>
        <LanguageOption onClick={() => handleLanguageSelect("he")}>
          {t("hebrew")}
        </LanguageOption>
        <LanguageOption onClick={() => handleLanguageSelect("ar")}>
          {t("arabic")}
        </LanguageOption>
      </LanguageDropdown>
    </>
  );
}

export default Navbar;
