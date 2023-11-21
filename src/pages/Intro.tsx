import { PrimaryButton, SecondaryButton } from "../styles/buttons";
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
import IntroLogo from "../assets/hero-image.png";
import TextAnimation from "../components/TextAnimation";

import { handleDownload } from "../utils/helpers";
import Socials from "../components/Socials";

const Intro = () => {
  const texts: string[] = ["Software Engineer.", "Full Stack Developer."];

  const scrollToSection = (sectionClassName: string) => {
    const section = document.querySelector(`.${sectionClassName}`);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <IntroContainer className="Home">
      <IntroContent>
        <WelcomeTitle>WELCOME TO MY WORLD</WelcomeTitle>
        <TextWrapper>
          <IntroTitle>
            Hi, I’m <IntroName> Tareez Ghandour a </IntroName>
          </IntroTitle>
          <TextAnimation texts={texts} />

          <IntroPara>
            A proactive B.Sc. Software Engineering student specializing in
            full-stack development. My passion lies in crafting immersive
            digital experiences through innovative web applications.
          </IntroPara>
        </TextWrapper>
        <ButtonContainer>
          <PrimaryButton onClick={handleDownload}>Download CV</PrimaryButton>
          <SecondaryButton onClick={() => scrollToSection("Contact")}>
            Contact Me
          </SecondaryButton>
        </ButtonContainer>
        <Socials />
      </IntroContent>
      <IntroImage>
        <img src={IntroLogo} alt="Intro" />
      </IntroImage>
    </IntroContainer>
  );
};

export default Intro;
