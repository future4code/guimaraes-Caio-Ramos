import React from 'react'
import styled from 'styled-components'

const IconContainer = styled.div`
  display: flex;
`
const IconImage = styled.img`
  margin-right: 5px;
`

/* registra o número de curtidas e comentários */

export function IconeComContador(props) {
  return (
    <IconContainer>
      <IconImage alt={'Icone'} src={props.icone} onClick={props.onClickIcone} />
      <p>{props.valorContador}</p>
    </IconContainer>
  )
}
