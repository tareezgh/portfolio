import { SocialContainer } from "../styles/home";
import SocialIcon from "./SocialIcon";

import LinkedInIcon from "../assets/linkedin.svg";
import GitHubIcon from "../assets/github.svg";
import FacebookIcon from "../assets/facebook.svg";
import InstagramIcon from "../assets/instagram.svg";
import GmailIcon from "../assets/google.svg";
import WhatsappIcon from "../assets/whatsapp.svg";

const Socials = () => {
  const socialMediaLinks = {
    linkedin: "https://www.linkedin.com/in/tareez-ghandour/",
    github: "https://github.com/tareezgh",
    facebook: "https://www.facebook.com/tareez.ghandour",
    instagram: "https://www.instagram.com/tareezghandour/",
    gmail: "mailto:tareezghandour15@gmail.com",
    whatsapp: "https://api.whatsapp.com/send?phone=972524837648",
  };
  const { linkedin, github, facebook, instagram, gmail,whatsapp } = socialMediaLinks;
  return (
    <>
      <SocialContainer>
        <SocialIcon href={linkedin} imageSrc={LinkedInIcon} alt="LinkedIn" />
        <SocialIcon href={github} imageSrc={GitHubIcon} alt="GitHub" />
        <SocialIcon href={gmail} imageSrc={GmailIcon} alt="Gmail" />
        <SocialIcon href={facebook} imageSrc={FacebookIcon} alt="Facebook" />
        <SocialIcon href={instagram} imageSrc={InstagramIcon} alt="Instagram" />
        <SocialIcon href={whatsapp} imageSrc={WhatsappIcon} alt="Whatsapp" />
      </SocialContainer>
    </>
  );
};

export default Socials;
