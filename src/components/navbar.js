import styled from "styled-components";
import Container from "./container";

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  font-weight: bold;
  height: 90px;
  line-height: 90px;
  z-index: 100;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  backdrop-filter: blur(20px);
`;

const NavbarContainer = styled(Container)`
  display: flex;
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
  &:last-child {
    margin-right: 0px;
  }
  &:hover {
    color: #7663fa;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
    transform: scale(1.2);
  }
`;

const Navbar = () => (
  <Wrapper>
    <NavbarContainer>
      <Logo>Electrobyte</Logo>
      <Links>
        <Link>Home</Link>
        <Link>Apps</Link>
        <Link>Tech</Link>
        <Link>Team</Link>
        <Link>Work With Us</Link>
        <Link>Contact</Link>
      </Links>
    </NavbarContainer>
  </Wrapper>
);

export default Navbar;
