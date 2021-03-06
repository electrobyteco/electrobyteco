import styled from "styled-components";
import Section from "../../components/section";
import BackgroundSunset from "../../images/backgrounds/sunset_optimized.jpg";

// Icon Imports
import IconExpress from "../../images/showcase/express.svg";
import IconGraphQL from "../../images/showcase/graphql.svg";
import IconMongodb from "../../images/showcase/mongodb.svg";
import IconReact from "../../images/showcase/react.svg";
import IconFigma from "../../images/showcase/figma.svg";
import IconGithub from "../../images/showcase/github.svg";
import IconMysql from "../../images/showcase/mysql.svg";
import IconLaravel from "../../images/showcase/laravel.svg";
import IconNode from "../../images/showcase/node.svg";
import IconReactNative from "../../images/showcase/react.svg";
import IconPhp from "../../images/showcase/php8.svg";
import IconPython from "../../images/showcase/python.svg";

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 250px;
  width: 250px;
  border: 1px solid rgba(91, 108, 171, 0.5);
  border-radius: 10px;
  margin: 30px;
  background: rgba(23, 30, 38, 0.1);
  backdrop-filter: blur(20px);
  @media (max-width: 1280px) {
    height: 200px;
    width: 200px;
    margin: 10px;
  }
  @media (max-width: 600px) {
    height: 150px;
    width: 150px;
    margin: 10px;
  }
`;

const CardTitle = styled.div`
  font-size: 28px;
  font-weight: bold;
  margin-top: 10px;
  color: ${(props) => (props.color ? props.color : "white")};

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const CardImage = styled.img`
  @media (max-width: 600px) {
    width: 50px;
  }
`;

function Software({ name, icon, color }) {
  return (
    <Card draggable>
      <CardImage src={icon} alt={name} />
      <CardTitle color={color}>{name}</CardTitle>
    </Card>
  );
}

const SoftwareGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 1280px) {
  }
`;

function Showcase() {
  return (
    <Section id="tech" screen={true}>
      <Section.BackgroundImage src={BackgroundSunset} fade={true} />
      <Section.Heading>Tech We Use</Section.Heading>
      <Section.Body>
        <SoftwareGrid>
          <Software name="Express" icon={IconExpress} color="#3AA840" />
          <Software name="GraphQL" icon={IconGraphQL} color="white" />
          <Software name="MongoDB" icon={IconMongodb} color="white" />
          <Software name="React" icon={IconReact} color="#00D8FF" />
          <Software name="Figma" icon={IconFigma} color="#EF533F" />
          <Software name="GitHub" icon={IconGithub} color="white" />
          <Software name="MySQL" icon={IconMysql} color="white" />
          <Software name="Laravel" icon={IconLaravel} color="white" />
          <Software name="Node" icon={IconNode} color="#8CC84B" />
          <Software
            name="React Native"
            icon={IconReactNative}
            color="#00D8FF"
          />
          <Software name="" icon={IconPhp} color="white" />
          <Software name="Python" icon={IconPython} color="#FFD550" />
        </SoftwareGrid>
      </Section.Body>
    </Section>
  );
}

export default Showcase;
