import styled from "styled-components";

export const StyledBody = styled.body`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 20vh 70vh 10vh;
  /* grid-template-areas:
    "h h h"
    "m n o"
    "f f f"; */
  width: 100%;
  height: auto;
  justify-content: center;
  align-content: center;
  font-family: "Montserrat", sans-serif;
  font-size: 1.6rem;
`;

export const StyledHeader = styled.header`
  //grid-area: h;
  grid-row: 1/2;
  grid-column: 1/4;
  font-family: "Nunito", sans-serif;
  background-color: #1c0221;
  color: #f2edeb;
  margin: 0;
  padding: 1.0672358591248665vh 0.5208333333333334vw;
`;

export const StyledFooter = styled.footer`
  grid-row: 3/4;
  grid-column: 1/4;
  // grid-area: f;
  font-family: "Nunito", sans-serif;
  background-color: #1c0221;
  color: #f2edeb;
`;
export const StyledMain = styled.main`
  width: 100%;
  // grid-area: n;
  grid-row: 2/3;
  grid-columns: 1/4
  height: 100%;
  
  //place-self: center stretch;
  background-color: #ae5bae;
`;
