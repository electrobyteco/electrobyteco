import styled from "styled-components";
import Container from "./container";

const Wrapper = styled(Container)`
  display: flex;
  position: fixed;
  top: 0;
  left: 7.5%;
  font-weight: bold;
  height: 90px;
  line-height: 90px;
  z-index: 100;
`;

const Logo = styled.div`
  font-size: 42px;
  text-transform: uppercase;
`;

const Links = styled.div`
  margin-left: auto;
  display: flex;
  font-size: 24px;
  text-transform: lowercase;
`;

const Link = styled.div`
  margin-right: 85px;
  white-space: nowrap;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    color: #faff00;
    transform: scale(1.2);
  }
`;

const Navbar = () => (
  <Wrapper>
    <Logo>Electrobyte</Logo>
    <Links>
      <Link>Home</Link>
      <Link>Apps</Link>
      <Link>Tech</Link>
      <Link>Team</Link>
      <Link>Work With Us</Link>
      <Link>Contact</Link>
    </Links>
  </Wrapper>
);

export default Navbar;
