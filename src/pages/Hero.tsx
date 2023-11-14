import { PrimaryButton, SecondaryButton } from "../styles/buttons";
import {
  HeroContainer,
  HeroContent,
  WelcomeTitle,
  TextWrapper,
  ContentWrapper,
  Title,
  Name,
  Description,
  ButtonContainer,
  SocialContainer,
  HeroImage,
} from "../styles/home";
import HeroLogo from "../assets/hero-image.png";
import SocialIcon from "../components/SocialIcon";
import TextAnimation from "../components/TextAnimation";
import LinkedInIcon from "../assets/linkedin.png";
import GitHubIcon from "../assets/github.png";
import FacebookIcon from "../assets/facebook.png";
import InstagramIcon from "../assets/instagram.png";
import GmailIcon from "../assets/gmail.png";

import { handleDownload } from "../utils/helpers";

const Hero = () => {
  const texts: string[] = ["Software Engineer.", "Full Stack Developer."];
  const socialMediaLinks = {
    linkedin: "https://www.linkedin.com/in/tareez-ghandour/",
    github: "https://github.com/tareezgh",
    facebook: "https://www.facebook.com/tareez.ghandour",
    instagram: "https://www.instagram.com/tareezghandour/",
    gmail: "mailto:tareezghandour15@gmail.com",
  };
  const { linkedin, github, facebook, instagram, gmail } = socialMediaLinks;

  const scrollToSection = (sectionClassName: string) => {
    const section = document.querySelector(`.${sectionClassName}`);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <HeroContainer className="About">
      <HeroContent>
        <WelcomeTitle>WELCOME TO MY WORLD</WelcomeTitle>
        <TextWrapper>
          <ContentWrapper>
            <Title>
              Hi, I’m <Name> Tareez Ghandour a</Name>
            </Title>
            <TextAnimation texts={texts} />
          </ContentWrapper>
          <Description>
            I am a proactive B.Sc. Software Engineering student excelling in
            both front-end and back-end development. With expertise in
            technologies like React, NodeJS, and MongoDB, I've actively
            contributed to diverse projects showcasing my proficiency in
            full-stack development, including web applications that seamlessly
            blend functionality and aesthetics. <br />A quick learner and team
            player, I am eager to bring my skills to innovative projects and
            contribute to collaborative development teams.
          </Description>
        </TextWrapper>
        <ButtonContainer>
          <PrimaryButton onClick={handleDownload}>Download CV</PrimaryButton>
          <SecondaryButton onClick={() => scrollToSection("Contact")}>
            Contact
          </SecondaryButton>
        </ButtonContainer>
        <SocialContainer>
          <SocialIcon href={github} imageSrc={GitHubIcon} alt="GitHub" />
          <SocialIcon href={linkedin} imageSrc={LinkedInIcon} alt="LinkedIn" />
          <SocialIcon href={gmail} imageSrc={GmailIcon} alt="Gmail" />
          <SocialIcon href={facebook} imageSrc={FacebookIcon} alt="Facebook" />
          <SocialIcon
            href={instagram}
            imageSrc={InstagramIcon}
            alt="Instagram"
          />
        </SocialContainer>
      </HeroContent>
      <HeroImage>
        <img src={HeroLogo} alt="Hero" />
      </HeroImage>
    </HeroContainer>
  );
};

export default Hero;
