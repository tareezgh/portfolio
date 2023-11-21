import { SocialContainer } from "../styles/home";
import SocialIcon from "./SocialIcon";

import LinkedInIcon from "../assets/linkedin.png";
import GitHubIcon from "../assets/github.png";
import FacebookIcon from "../assets/facebook.png";
import InstagramIcon from "../assets/instagram.png";
import GmailIcon from "../assets/gmail.png";

const Socials = () => {
  const socialMediaLinks = {
    linkedin: "https://www.linkedin.com/in/tareez-ghandour/",
    github: "https://github.com/tareezgh",
    facebook: "https://www.facebook.com/tareez.ghandour",
    instagram: "https://www.instagram.com/tareezghandour/",
    gmail: "mailto:tareezghandour15@gmail.com",
  };
  const { linkedin, github, facebook, instagram, gmail } = socialMediaLinks;
  return (
    <>
      <SocialContainer>
        <SocialIcon href={github} imageSrc={GitHubIcon} alt="GitHub" />
        <SocialIcon href={linkedin} imageSrc={LinkedInIcon} alt="LinkedIn" />
        <SocialIcon href={gmail} imageSrc={GmailIcon} alt="Gmail" />
        <SocialIcon href={facebook} imageSrc={FacebookIcon} alt="Facebook" />
        <SocialIcon href={instagram} imageSrc={InstagramIcon} alt="Instagram" />
      </SocialContainer>
    </>
  );
};

export default Socials;
