import styled from "styled-components";

export const StyledBody = styled.body`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 20vh 70vh 10vh;
  grid-template-areas:
    "h h h"
    "m m m"
    "f f f";
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-content: center;
`;

export const StyledHeader = styled.header`
  grid-area: h;
  font-family: "Rubik", sans-serif;
`;

export const StyledMain = styled.main`
  grid-area: m;
`;

export const StyledFooter = styled.footer`
  grid-area: f;
  font-family: "Poppins", sans-serif;
`;
