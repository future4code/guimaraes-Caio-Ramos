import React from 'react'
import styled from 'styled-components'

const BigcardContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 20px 10px;
  margin-bottom: 10px;
  height: 200px;
`
const BigcardImg = styled.img`
  width: 70px;
  margin-right: 10px;
  border-radius: 50%;
`
const BigcardSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
`
const BigcardTittle4 = styled.h4`
  margin-bottom: 15px;
`
const BigcardParagraph = styled.p``

function CardGrande(props) {
  return (
    <BigcardContainer>
      <BigcardImg src={props.imagem} />
      <BigcardSubContainer>
        <BigcardTittle4>{props.nome}</BigcardTittle4>
        <BigcardParagraph>{props.descricao}</BigcardParagraph>
      </BigcardSubContainer>
    </BigcardContainer>
  )
}

export default CardGrande
