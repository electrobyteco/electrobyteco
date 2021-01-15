import styled from "styled-components";
import Section from "../../components/section";
import BackgroundFlamingo from "../../images/backgrounds/flamingo.png";

const SectionDivider = styled(Section.Heading)`
  height: 100px;
`;

const ContactHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ContactHeading = styled.div`
  font-size: 72px;
  font-weight: bold;
  background: linear-gradient(180deg, #ffffff 0%, #a394ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const ContactSubheading = styled.div`
  font-size: 22px;
  font-weight: bold;
  background: linear-gradient(180deg, #ffffff 0%, #a394ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const ContactDetails = styled.div`
  width: 50vw;
  margin: 0 auto;
  display: flex;
  margin-top: 70px;
  justify-content: space-between;
`;
const ContactItem = styled.div`
  font-size: 48px;
  font-weight: bold;
  background: ${(props) =>
    props.color === "yellow"
      ? "linear-gradient(180deg, #ffc700 0%, #ff7a00 100%)"
      : props.color === "blue"
      ? "linear-gradient(180deg, #00FFC2 0%, #0085FF 100%)"
      : "black"};
  background-clip: text;
  font-style: italic;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

function Contact() {
  return (
    <Section>
      <Section.BackgroundImage src={BackgroundFlamingo} fade={true} />
      <SectionDivider />
      <Section.Body>
        <ContactHeader>
          <ContactHeading>Contact Us</ContactHeading>
          <ContactSubheading>
            Drop a message in either of them.
          </ContactSubheading>
        </ContactHeader>
        <ContactDetails>
          <ContactItem color="yellow">+91 7888535324</ContactItem>
          <ContactItem color="blue">hello@electrobyte.co</ContactItem>
        </ContactDetails>
      </Section.Body>
    </Section>
  );
}

export default Contact;
