import { FooterContainer, BlackLogo, FooterText } from "../styles/footer";
import Socials from "./Socials";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <FooterContainer>
        <BlackLogo>TG</BlackLogo>

        <FooterText>© {currentYear} Tareez Ghandour</FooterText>
        <Socials />
      </FooterContainer>
    </>
  );
}

export default Footer;
