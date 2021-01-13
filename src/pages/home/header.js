import styled from "styled-components";
import BackgroundAstronaut from "../../images/backgrounds/astronaut.png";

const Wrapper = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -90px;
  background-size: cover;
  z-index: 0;
`;

const HeadingContainer = styled.div`
  position: absolute;
  top: calc(90px + 150px); // Navbar Compensation + Actual Padding
  text-align: center;
`;

const Heading = styled.div`
  font-size: 72px;
  font-weight: bold;
  font-style: italic;
`;

const Subheading = styled.div`
  font-size: 36px;
  font-weight: bold;
  font-style: italic;
`;

const Backdrop = styled.img`
  width: 100%;
  min-width: 1280px;
  min-height: 100vh;
  z-index: -10;
`;

const BackdropPhaseOut = styled.div`
  position: absolute;
  bottom: 0;

  width: 100%;
  height: 250px;
  background: linear-gradient(180deg, rgba(29, 21, 62, 0) 0%, #1d153e 100%); ;
`;

function Header() {
  return (
    <Wrapper>
      <HeadingContainer>
        <Heading>We craft experiences.</Heading>
        <Subheading>From Design to Development.</Subheading>
      </HeadingContainer>
      <Backdrop src={BackgroundAstronaut} />
      <BackdropPhaseOut />
    </Wrapper>
  );
}

export default Header;
