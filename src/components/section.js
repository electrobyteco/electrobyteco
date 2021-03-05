import styled from "styled-components";
import Container from "./container";

const Section = styled.section`
  position: relative;
  padding-bottom: 100px;
  font-size: 18px;
  position: relative;
  min-height: ${(props) => (props.screen ? "100vh" : "initial")};
`;

Section.Heading = styled.div`
  position: relative;
  text-align: center;
  font-weight: bold;
  font-style: italic;
  font-size: 72px;
  text-transform: lowercase;
  background: linear-gradient(180deg, #ffffff 0%, #a394ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 80px;
  z-index: 5;
  @media (max-width: 1280px) {
    font-size: 56px;
  }
  @media (max-width: 600px) {
    font-size: 48px;
  }
`;

Section.Body = styled(Container)`
  position: relative;
  z-index: 5;
`;

Section.BackgroundFadeable = styled.div`
  position: relative;
  z-index: 0;
`;

Section.BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -10;
`;

Section.BackgroundFadeBefore = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  height: 200px;
  background: linear-gradient(180deg, #1d153e 0%, rgba(29, 21, 62, 0) 100%);
  z-index: 0;
`;

Section.BackgroundFadeAfter = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0px;
  height: 100px;
  background: red;
  opacity: 0.2;
  /* background: linear-gradient(180deg, #1d153e 100%, rgba(29, 21, 62, 0) 0%); */
  z-index: 0;
`;

Section.Background = (props) => (
  <Section.BackgroundFadeable>
    <Section.BackgroundImage {...props} />
  </Section.BackgroundFadeable>
);

export default Section;
