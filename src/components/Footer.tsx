import { FooterContainer, WhiteLogo, FooterText } from "../styles/footer";
import Socials from "./Socials";

function Footer() {
  return (
    <>
      <FooterContainer>
        <WhiteLogo>TG</WhiteLogo>

        <FooterText>© 2023 Tareez Ghandour</FooterText>
        <Socials />
      </FooterContainer>
    </>
  );
}

export default Footer;
