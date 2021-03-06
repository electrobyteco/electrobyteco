import styled from "styled-components";
import Section from "../../components/section";

import ImageSampan from "../../images/people/sampan.jpg";
import ImageRazat from "../../images/people/razat.jpg";
import ImageNikhil from "../../images/people/nikhil.jpg";
import ImageManik from "../../images/people/sampan.jpg";
import ImageTushar from "../../images/people/tushar.jpg";
import ImagePrabhjot from "../../images/people/prabhjot.jpeg";
import ImageLakshay from "../../images/people/lakshay.jpeg";
import ImageMohit from "../../images/people/mohit.jpeg";

const Card = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 50px;
  opacity: ${(props) => (props.filler ? 0 : 1)};
  @media (max-width: 1280px) {
    display: ${(props) => (props.filler ? "none" : "block")};
    margin-bottom: 30px;
  }

  @media (max-width: 600px) {
    display: ${(props) => (props.filler ? "none" : "flex")};
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    width: 250px;
  }
`;

const CardTitle = styled.div`
  font-size: 22px;
  font-weight: bold;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const CardSubTitle = styled.div`
  font-size: 22px;
  @media (max-width: 600px) {
    font-size: 18px;
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
          <Person name="Sampan Verma" category="Founder" image={ImageSampan} />
          <Person name="Razat Verma" category="CTO" image={ImageRazat} />
          <Person
            name="Nikhil Kaushal"
            category="Engineer"
            image={ImageNikhil}
          />
          <Person name="Tushar Arora" category="Engineer" image={ImageTushar} />
          <Person
            name="Prabhjot Dhillon"
            category="Engineer"
            image={ImagePrabhjot}
          />
          <Person
            name="Lakshay Chabbra"
            category="Engineer"
            image={ImageLakshay}
          />
          <Person name="Mohit Mahajan" category="Engineer" image={ImageMohit} />
          <Person name="Manik Agnish" category="Engineer" image={ImageManik} />
          <Person filler={true} />
        </People>
      </Section.Body>
    </Section>
  );
}

export default Team;
