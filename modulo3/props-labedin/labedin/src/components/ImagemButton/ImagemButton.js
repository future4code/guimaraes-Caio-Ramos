import React from 'react'
import styled from 'styled-components'

const ImageButtonContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 50px;
  width: 200px;
  padding: 15px 30px;
  margin: 10px auto;
`

const ImageButtonImg = styled.img`
  width: 30px;
  margin-right: 10px;
`

const ImageButtonParagraph = styled.p``

function ImagemButton(props) {
  return (
    <ImageButtonContainer>
      <ImageButtonImg src={props.imagem} />
      <ImageButtonParagraph>{props.texto}</ImageButtonParagraph>
    </ImageButtonContainer>
  )
}

export default ImagemButton
