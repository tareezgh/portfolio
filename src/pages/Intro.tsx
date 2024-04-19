import { useTranslation } from "react-i18next";
import { PrimaryButton, SecondaryButton } from "../styles/buttons";
import IntroLogo from "../assets/hero-image2.webp";
import TextAnimation from "../components/TextAnimation";
import Socials from "../components/Socials";

import { scrollToSectionById } from "../utils/helpers";

import {
  IntroContainer,
  IntroContent,
  IntroImage,
  IntroName,
  IntroPara,
  TextWrapper,
  IntroTitle,
  ButtonContainer,
  WelcomeTitle,
} from "../styles/home";

const Intro = () => {
  const { t } = useTranslation();
  const texts: string[] = [
   `${t("intro.SW")}`,
   `${t("intro.FS")}`,
   `${t("intro.freelancer")}`,
  ];
  const handleHireMeClick = () => {
    const url = "https://www.upwork.com/freelancers/~01cb2cb30ea7f12d24";
    window.open(url, "_blank");
  };

  const isDocumentRTL = (): boolean => {
    return document.documentElement.getAttribute("dir") === "rtl";
  };
  const isRTL = isDocumentRTL();
  return (
    <IntroContainer id={`${t("intro.id")}`}>
      <IntroContent>
        <WelcomeTitle>{t("intro.title")}</WelcomeTitle>
        <TextWrapper>
          <IntroTitle>
            {t("intro.subTitle")} <span style={{ marginRight: '10px' }}/><IntroName> {t("intro.name")} </IntroName>
          </IntroTitle>
          <TextAnimation texts={texts} />

          <IntroPara>{t("intro.description")}</IntroPara>
        </TextWrapper>
        <ButtonContainer>
          <SecondaryButton onClick={handleHireMeClick}>
            {t("intro.button1")}
          </SecondaryButton>
          <PrimaryButton onClick={() => scrollToSectionById(`${t("contact.id")}`)}>
            {t("intro.button2")}
          </PrimaryButton>
        </ButtonContainer>
        <Socials />
      </IntroContent>
      <IntroImage isRTL={isRTL}>
        <img src={IntroLogo} alt="HeroImage" />
      </IntroImage>
    </IntroContainer>
  );
};

export default Intro;
