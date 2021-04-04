import styled from "styled-components";
import Section from "../../components/section";
import { ReactComponent as IconOpenInNewTab } from "../../images/open-new-tab.svg";
import AppIconWorkmap from "../../images/apps/workmap.svg";
import AppIconStreamDeck from "../../images/apps/stream-deck.svg";
import AppIconPartySplit from "../../images/apps/partysplit.svg";

const Card = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ background, backgroundImage }) =>
    backgroundImage ? `url(${backgroundImage})` : background ?? "black"};
  background-size: cover;
  width: 30%;
  min-width: 300px;
  min-height: 500px;
  background-color: magenta;
  height: 60vh;
  border-radius: 10px;
  box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.15);
  transition: all 0.1s ease-in-out;
  &:hover {
    transform: translateY(-30px);
  }

  @media (max-width: 1280px) {
    width: 30%;
    min-height: 400px;
    height: 45vh;
    margin-bottom: 50px;
  }
`;

const CardLink = styled.a`
  position: absolute;
  top: 22px;
  right: 22px;
`;

const CardTitle = styled.div`
  position: absolute;
  bottom: 22px;
  left: 22px;
  font-weight: bold;
  font-size: 24px;
  color: ${(props) => (props.invertColor ? "black" : "white")};
`;

function App({ backgroundImage, title, icon, link, background, invertColor }) {
  return (
    <Card
      background={background}
      backgroundImage={backgroundImage}
      draggable={true}
    >
      <CardLink href={link} target="_blank">
        <IconOpenInNewTab fill={invertColor ? "black" : "white"} />
      </CardLink>
      <CardTitle invertColor={invertColor}>{title}</CardTitle>
      {icon ? <img src={icon} alt={title} /> : null}
    </Card>
  );
}

const SectionBody = styled(Section.Body)`
  display: flex;
  padding-bottom: 100px;
  justify-content: space-between;
  perspective: 1000px;
  @media (max-width: 1280px) {
    flex-direction: column;
    align-items: center;
  }
`;

function Apps() {
  return (
    <Section id="apps">
      <Section.Heading>Apps</Section.Heading>
      <SectionBody>
        <App
          title={
            <>
              <div>Party Split</div>
              <small>Organize great parties!</small>
            </>
          }
          link="https://www.figma.com/proto/1YV3387l7L9MqjmANWar1X/The-Party-App?node-id=1%3A2&viewport=366%2C527%2C1.1641124486923218&scaling=scale-down&page-id=0%3A1"
          icon={AppIconPartySplit}
          background="linear-gradient(180deg, #FFFFFF 0%, #D0D0D0 100%)"
          invertColor={true}
        />
        <App
          title={
            <>
              <div>Workmap</div>
              <small>Project Management Effective</small>
            </>
          }
          link="https://www.figma.com/proto/qccMREvgMKDQJXJF9zfdbn/Workmap?node-id=1%3A2&viewport=74%2C78%2C0.621474027633667&scaling=min-zoom&page-id=0%3A1"
          icon={AppIconWorkmap}
          background="linear-gradient(180deg, #FFFFFF 0%, #D0D0D0 100%)"
          invertColor={true}
        />
        <App
          title="Stream Deck App"
          link="https://www.figma.com/proto/8kipUpe7O1gGl36M9YGRA5/Stream-Deck?node-id=1%3A3&viewport=25%2C283%2C0.15678733587265015&scaling=min-zoom&page-id=0%3A1"
          icon={AppIconStreamDeck}
          background="linear-gradient(180deg, #000000 0%, #1D1D1D 100%)"
        />
      </SectionBody>
    </Section>
  );
}

export default Apps;
