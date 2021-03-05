import styled from "styled-components";
import Section from "../../components/section";

import ImageSampan from "../../images/people/sampan.jpg";

const Card = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 50px;
  opacity: ${(props) => (props.filler ? 0 : 1)};
  @media (max-width: 1280px) {
    display: ${(props) => (props.filler ? "none" : "block")};
    margin-bottom: 30px;
  }
`;

const CardImage = styled.img`
  width: 350px;
  border-radius: 10px;
  @media (max-width: 1280px) {
    width: 300px;
  }
  @media (max-width: 1000px) {
    width: 250px;
  }
  @media (max-width: 800px) {
    width: 200px;
  }
`;

const CardTitle = styled.div`
  font-size: 22px;
  font-weight: bold;
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const CardSubTitle = styled.div`
  font-size: 22px;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

function Person({ name, category, image, filler }) {
  return (
    <Card filler={filler}>
      {filler ? (
        <>
          <CardImage src={ImageSampan} />
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
    <Section id="team">
      <Section.Heading>We are a team</Section.Heading>
      <Section.Body>
        <People>
          <Person name="Sampan" category="Founder" image={ImageSampan} />
          <Person name="Sampan" category="Founder" image={ImageSampan} />
          <Person name="Sampan" category="Founder" image={ImageSampan} />

          <Person name="Sampan" category="Founder" image={ImageSampan} />
          <Person name="Sampan" category="Founder" image={ImageSampan} />
          <Person filler={true} />
        </People>
      </Section.Body>
    </Section>
  );
}

export default Team;
