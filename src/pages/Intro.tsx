import { PrimaryButton, SecondaryButton } from "../styles/buttons";
import IntroLogo from "../assets/hero-image.png";
import TextAnimation from "../components/TextAnimation";
import Socials from "../components/Socials";

import { handleDownload, scrollToSectionById } from "../utils/helpers";
import { texts } from "../data/constant";
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
  return (
    <IntroContainer id="Home">
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
          <SecondaryButton onClick={() => scrollToSectionById("Contact")}>
            Contact Me
          </SecondaryButton>
        </ButtonContainer>
        <Socials />
      </IntroContent>
      <IntroImage>
        <img src={IntroLogo} alt="HeroImage" />
      </IntroImage>
    </IntroContainer>
  );
};

export default Intro;
