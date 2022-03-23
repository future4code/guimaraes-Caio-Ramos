import styled from "styled-components";

export const StyledBody = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-rows: 20vh 70vh 10vh;
  grid-template-columns: 1fr 3fr 1fr;
  justify-items: center;
  justify-content: stretch;
  background-color: #51d6ff;
`;
export const StyledHeader = styled.header`
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  color: #231651;
  font-size: 2rem;
  font-family: "Courier New", Courier, monospace;
  justify-self: center;
`;
export const StyledMain = styled.main`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  justify-self: stretch;
  align-self: stretch;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 3px dashed #ff934f;
  border-radius: 15px;
  background-color: whitesmoke;
  box-shadow: 2px 3px #231651;
`;
