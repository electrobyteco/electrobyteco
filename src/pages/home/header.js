import styled from "styled-components";
import BackgroundAstronaut from "../../images/backgrounds/astronaut_optimized.jpg";

const Wrapper = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -90px;
  background-size: cover;
  z-index: 0;
  min-height: 100vh;
  @media (min-width: 1200px) {
    min-height: 150vh;
  }
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
  @media (max-width: 750px) {
    font-size: 44px;
  }
`;

const Subheading = styled.div`
  font-size: 36px;
  font-weight: bold;
  font-style: italic;
  @media (max-width: 750px) {
    font-size: 24px;
  }
`;

const Backdrop = styled.img`
  width: 100%;
  /* min-width: 1280px; */
  min-height: 100vh;
  z-index: -10;
  position: absolute;
  object-fit: cover;
`;

function Header() {
  return (
    <Wrapper id="header">
      <HeadingContainer>
        <Heading>We craft experiences.</Heading>
        <Subheading>From Design to Development.</Subheading>
      </HeadingContainer>

      <Backdrop src={BackgroundAstronaut} />
    </Wrapper>
  );
}

export default Header;
