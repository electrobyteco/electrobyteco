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
`;

const FooterCopyright = styled.div`
  display: flex;
  justify-content: center;
  font-size: 18px;
`;

const FooterSection = styled.div``;

const FooterSectionHeading = styled.div``;

const FooterSectionBody = styled.div``;

const FooterSocialIcons = styled.div``;

const FooterSocialIcon = styled.div``;

const FooterWrapper = styled.div`
  display: block;

  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 10;
`;

function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <FooterBody>
          <FooterSection>
            <img src={Logo} alt="Electrobyte Logo" />
          </FooterSection>
          <FooterSection>
            <FooterSectionHeading>About Us</FooterSectionHeading>
            <FooterSectionBody>
              At Electrobyte, we believe every idea holds immense promise, and
              therefore, we impart innovation and intelligence to transform your
              vision into an impeccable reality.
            </FooterSectionBody>
          </FooterSection>
          <FooterSection>
            <FooterSectionHeading>Follow Us</FooterSectionHeading>
            <FooterSocialIcons>
              <FooterSocialIcon>
                <img src={IconFacebook} alt="Link to our Facebook page" />
              </FooterSocialIcon>
              <FooterSocialIcon>
                <img src={IconInstagram} alt="Link to our Instagram page" />
              </FooterSocialIcon>
              <FooterSocialIcon>
                <img src={IconLinkedin} alt="Link to our Linkedin page" />
              </FooterSocialIcon>
              <FooterSocialIcon>
                <img src={IconPinterest} alt="Link to our Pinterest page" />
              </FooterSocialIcon>
              <FooterSocialIcon>
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
