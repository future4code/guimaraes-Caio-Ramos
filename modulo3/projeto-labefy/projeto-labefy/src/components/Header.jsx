import React from "react";
import styled from "styled-components";
import axios from "axios";

const StyledHeader = styled.div`
  margin: 0px;
  padding: 0px;
  border: 8px solid #9fa4a9;
  background-color: #f72585;
  width: 99%;
  grid-column: 1 / 4;
  grid-row: 1 / 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-self: center;
  align-self: center;
`;

const StyledH2 = styled.h2`
  color: #DED6D1;
  font-family: font-family: font-family: 'Bakbak One', cursive;
  font-size: 2rem;
  text-shadow: 2px 2px #5f5e5e;
  margin: 0.8vh 0.36603221083455345vw;
  padding: 0.8vh 0.36603221083455345vw;
  
  
  
 

`;

const StyledH4 = styled.h4`
  color: #DED6D1;
  font-family: font-family: 'Work Sans', sans-serif;
  font-size: 1.5rem;
  text-shadow: 2px 2px #5f5e5e;
  margin: 0.8vh 0.36603221083455345vw;
  padding: 0.8vh 0.36603221083455345vw;
  
  

`;
export default class Header extends React.Component {
  render() {
    return (
      <StyledHeader>
        <StyledH2>
          <em>Labefy</em>
        </StyledH2>

        {/* <StyledH4>Música do seu jeito!</StyledH4> */}
      </StyledHeader>
    );
  }
}
