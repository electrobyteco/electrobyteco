import styled from "styled-components";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Header from "./header";

const Apps = styled.section`
  height: 200px;
`;
const Showcase = styled.section``;
const Team = styled.section``;
const WorkForm = styled.section``;
const Contact = styled.section``;

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Apps />
      <Showcase />
      <Team />
      <WorkForm />
      <Contact />
      <Footer />
    </div>
  );
}
