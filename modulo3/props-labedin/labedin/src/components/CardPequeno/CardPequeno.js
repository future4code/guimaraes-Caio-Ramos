import React from 'react'

import styled from 'styled-components'

const SmallcardTitle = styled.p`
  margin-bottom: 15px;
`
const SmallcardParagraph = styled.p`
  font-family: Arial, Helvetica, sans-serif;
`
const SmallcardContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 20px 10px;
  margin-bottom: 10px;
  height: 200px;
  img {
    height: 25px;
    width: 25px;
  }
`

const SmallcardSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
`

function CardPequeno(props) {
  return (
    <SmallcardContainer>
      <SmallcardSubContainer>
        <img src={props.imagem} />
        <SmallcardTitle>{props.titulo}</SmallcardTitle>
        <SmallcardParagraph>{props.texto}</SmallcardParagraph>
      </SmallcardSubContainer>
    </SmallcardContainer>
  )
}
export default CardPequeno
