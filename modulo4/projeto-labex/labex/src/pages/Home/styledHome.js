import styled from "styled-components";

export const StyledBody = styled.body`
  background-color: #ae5bae;
  width: auto;
  height: auto;
`;

export const StyledButton = styled.button`
  position: relative;
  padding: 1em 1.8em;
  outline: none;
  border: 1px solid #303030;
  background: #212121;
  color: #ae00ff;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 15px;
  overflow: hidden;
  transition: 0.2s;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
  margin: 1.0672358591248665vh 0.5208333333333334vw;
  &:hover {
    box-shadow: 0 0 10px #ae00ff, 0 0 25px #001eff, 0 0 50px #ae00ff;
    transition-delay: 0.6s;
  }
  /* &span {
    position: absolute;
  } */
`;
