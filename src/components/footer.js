import styled from "styled-components";
import Container from "./container";
import Logo from "../images/logo-white.svg";

// Social Icons
import IconFacebook from "../images/social/facebook.svg";
import IconInstagram from "../images/social/instagram.svg";
import IconLinkedin from "../images/social/linkedin.svg";
import IconPinterest from "../images/social/pinterest.svg";
import IconTwitter from "../images/social/twitter.svg";

const FooterBody = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const FooterCopyright = styled.div`
  display: flex;
  justify-content: center;
  font-size: 16px;
  margin-top: 100px;
  margin-bottom: 50px;
`;

const FooterSection = styled.div`
  display: flex;
  flex-basis: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin: 0 auto;
  @media (max-width: 1280px) {
    flex-basis: 100%;
  }
  @media (max-width: 1000px) {
    margin-bottom: 60px;
    width: 80%;
  }
  @media (max-width: 800px) {
    /* display: ${(props) => (props.logo ? "none" : "flex")}; */
  }
`;

const FooterLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterLogo = styled.img`
  width: 100%;
`;

const FooterSectionHeading = styled.div`
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 25px;
  text-align: center;
  align-self: center;
`;

const FooterSectionBody = styled.div`
  padding-right: 100px;
  @media (max-width: 1000px) {
    padding-right: 0px;
  }
`;

const FooterSocialIcons = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const FooterSocialIcon = styled.a`
  cursor: pointer;
  margin-left: 10px;
  margin-right: 10px;
  &:hover {
    filter: brightness(0.5) sepia(1) saturate(10000%) hue-rotate(270deg)
      brightness(0.9);
  }
`;

const FooterWrapper = styled.div`
  display: block;
  position: absolute;
  left: 0;
  bottom: -80vh;
  width: 100%;
  z-index: 10;
  @media (max-width: 1500px) {
    bottom: -70vh;
  }
  @media (max-height: 850px) {
    bottom: -100vh;
  }
  @media (max-height: 650px) {
    bottom: -110vh;
  }
  @media (max-height: 500px) {
    bottom: -135vh;
  }
  @media (max-height: 400px) {
    bottom: -160vh;
  }
  @media (max-height: 350px) {
    display: none;
    /* Thats what you deserve! */
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <FooterBody>
          <FooterSection logo>
            <FooterLogoContainer>
              <FooterLogo src={Logo} alt="Electrobyte Logo" />
            </FooterLogoContainer>
          </FooterSection>
          <FooterSection>
            <FooterSectionHeading>About Us</FooterSectionHeading>
            <FooterSectionBody>
              At Electrobyte, we believe every idea holds immense promise, and
              therefore, we impart innovation and intelligence to transform your
              vision into an impeccable reality.
            </FooterSectionBody>
          </FooterSection>
          <FooterSection right={true}>
            <FooterSectionHeading>Follow Us</FooterSectionHeading>
            <FooterSocialIcons>
              <FooterSocialIcon href="http://facebook.com" target="_blank">
                <img src={IconFacebook} alt="Link to our Facebook page" />
              </FooterSocialIcon>
              <FooterSocialIcon href="http://instagram.com" target="_blank">
                <img src={IconInstagram} alt="Link to our Instagram page" />
              </FooterSocialIcon>
              <FooterSocialIcon href="http://linkedin.com" target="_blank">
                <img src={IconLinkedin} alt="Link to our Linkedin page" />
              </FooterSocialIcon>
              <FooterSocialIcon href="http://pinterest.com" target="_blank">
                <img src={IconPinterest} alt="Link to our Pinterest page" />
              </FooterSocialIcon>
              <FooterSocialIcon href="http://twitter.com" target="_blank">
                <img src={IconTwitter} alt="Link to our Twitter page" />
              </FooterSocialIcon>
            </FooterSocialIcons>
          </FooterSection>
        </FooterBody>
      </Container>
      <FooterCopyright>
        &copy; Electrobyte 2020 All Rights Reserved.
      </FooterCopyright>
    </FooterWrapper>
  );
}

export default Footer;
