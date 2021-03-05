import styled from "styled-components";

const Container = styled.div`
  display: block;
  position: relative;
  width: 75%;
  min-width: 1280px;
  margin: 0 auto;
  @media (max-width: 1280px) {
    min-width: auto;
    width: 95%;
  }
`;

export default Container;
