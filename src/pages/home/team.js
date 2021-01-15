import styled from "styled-components";
import Section from "../../components/section";

import ImageSteve from "../../images/people/steve.png";

const Card = styled.div`
  margin-bottom: 50px;
  opacity: ${(props) => (props.filler ? 0 : 1)};
`;

const CardImage = styled.img`
  width: 350px;
  border-radius: 10px;
`;

const CardTitle = styled.div`
  font-size: 22px;
  font-weight: bold;
`;

const CardSubTitle = styled.div`
  font-size: 22px;
`;

function Person({ name, category, image, filler }) {
  return (
    <Card filler={filler}>
      {filler ? (
        <>
          <CardImage src={ImageSteve} />
          <CardTitle>Your name</CardTitle>
          <CardSubTitle>This could be you</CardSubTitle>
        </>
      ) : (
        <>
          <CardImage src={image} />
          <CardTitle>{name}</CardTitle>
          <CardSubTitle>{category}</CardSubTitle>
        </>
      )}
    </Card>
  );
}

const People = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

function Team() {
  return (
    <Section>
      <Section.Heading>We are a team</Section.Heading>
      <Section.Body>
        <People>
          <Person name="Sampan" category="Founder" image={ImageSteve} />
          <Person name="Barry Allen" category="Developer" image={ImageSteve} />
          <Person name="Stu" category="Developer" image={ImageSteve} />
        </People>
        <People>
          <Person name="Stevie" category="Designer" image={ImageSteve} />
          <Person name="Boris" category="Developer" image={ImageSteve} />
          <Person filler={true} />
        </People>
      </Section.Body>
    </Section>
  );
}

export default Team;
