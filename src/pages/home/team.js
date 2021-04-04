import styled from "styled-components";
import Section from "../../components/section";

import ImageSampan from "../../images/people/sampan.jpg";
import ImageRazat from "../../images/people/razat.jpg";
import ImageManik from "../../images/people/manik.jpeg";
import ImageTushar from "../../images/people/tushar.jpg";
import ImageLakshay from "../../images/people/lakshay.jpeg";
import ImagePrabhjot from "../../images/people/prabhjot.jpeg";
import ImageMohit from "../../images/people/mohit.jpeg";
import ImageNikhil from "../../images/people/nikhil.jpg";

const Card = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 50px;
  opacity: ${(props) => (props.filler ? 0 : 1)};
  cursor: pointer;

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
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
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
  margin-top: 10px;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const CardSubTitle = styled.div`
  font-size: 22px;
  @media (max-width: 600px) {
    font-size: 18px;
  }
  margin-bottom: 50px;
`;

function Person({ name, category, image, filler, link }) {
  function onClick() {
    if (link) window.open(link, "_blank").focus();
  }

  return (
    <Card filler={filler} onClick={onClick}>
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
          <Person
            name="Razat Verma"
            category="CTO"
            image={ImageRazat}
            link="http://razat.me"
          />
          <Person
            name="Tushar Arora"
            category="Engineer"
            image={ImageTushar}
            link="http://tushararora.studio"
          />
          <Person
            name="Manik Agnish"
            category="Engineer"
            image={ImageManik}
            link="http://manikagnish.com"
          />

          <Person
            name="Lakshay Chabbra"
            category="Engineer"
            image={ImageLakshay}
            link="http://lakshaychabra.com"
          />
          {/*
            <Person
              name="Nikhil Kaushal"
              category="Engineer"
              image={ImageNikhil}
              link="http://localhost"
            />
            <Person
              name="Prabhjot Dhillon"
              category="Engineer"
              image={ImagePrabhjot}
              link="http://localhost"
            />
            <Person
              name="Mohit Mahajan"
              category="Engineer"
              image={ImageMohit}
              link="http://localhost"
            />
          */}
          <Person filler={true} />
        </People>
      </Section.Body>
    </Section>
  );
}

export default Team;
