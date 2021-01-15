import Navbar from "../../components/navbar";
import Header from "./header";
import Apps from "./apps";
import Showcase from "./showcase";
import Team from "./team";
import Work from "./work";
import Contact from "./contact";
import Footer from "../../components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Apps />
      <Showcase />
      <Team />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}
