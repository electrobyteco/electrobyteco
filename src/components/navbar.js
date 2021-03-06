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
  @media (max-width: 1280px) {
    width: 100vw;
    font-size: 36px;
    text-align: center;
  }
`;

const Links = styled.div`
  margin-left: auto;
  display: flex;
  font-size: 24px;
  text-transform: lowercase;
  @media (max-width: 1280px) {
    display: none;
  }
`;

const Link = styled.div`
  margin-right: 50px;
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

function smoothScrollTo(query = null, margin = 200) {
  let top = query ? document.querySelector(query).offsetTop : 0;
  top = top - margin;
  if (top < 0) top = 0;
  window.scrollTo({
    top,
    behavior: "smooth",
  });
}

const Navbar = () => {
  return (
    <Wrapper>
      <NavbarContainer>
        <Logo>Electrobyte</Logo>
        <Links>
          <Link onClick={(e) => smoothScrollTo()}>Home</Link>
          <Link onClick={(e) => smoothScrollTo("#apps")}>Apps</Link>
          <Link onClick={(e) => smoothScrollTo("#tech")}>Tech</Link>
          <Link onClick={(e) => smoothScrollTo("#team")}>Team</Link>
          <Link onClick={(e) => smoothScrollTo("#work")}>Work With Us</Link>
          <Link onClick={(e) => smoothScrollTo("#contact", 0)}>Contact</Link>
        </Links>
      </NavbarContainer>
    </Wrapper>
  );
};

export default Navbar;
