import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  margin: 0px;
  padding: 0px;
  border: 8px solid #9fa4a9;
  background-color: #f72585;
  width: 99%;
  height: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledH4 = styled.h4`
   color: #DED6D1;
  font-family: font-family: 'Work Sans', sans-serif;
  font-size: 2rem;
  margin: 0.8vh 0.36603221083455345vw;
  padding: 0.8vh 0.36603221083455345vw;

`;

export default class Footer extends React.Component {
  render() {
    return (
      <StyledFooter>
        <StyledH4>Projeto Labefy. Todos os direitos reservados. ©</StyledH4>
      </StyledFooter>
    );
  }
}
