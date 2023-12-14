import { FooterContainer, BlackLogo, FooterText } from "../styles/footer";
import Socials from "./Socials";

function Footer() {
  return (
    <>
      <FooterContainer>
        <BlackLogo>TG</BlackLogo>

        <FooterText>© 2023 Tareez Ghandour</FooterText>
        <Socials />
      </FooterContainer>
    </>
  );
}

export default Footer;
