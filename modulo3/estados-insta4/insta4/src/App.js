import React from 'react'
import styled from 'styled-components'
import Post from './components/Post/Post'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/51/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'tapioquito'}
          fotoUsuario={'https://picsum.photos/51/50'}
          fotoPost={'https://picsum.photos/200/75'}
        />

        <Post
          nomeUsuario={'lalaine'}
          fotoUsuario={'https://picsum.photos/51/50'}
          fotoPost={'https://picsum.photos/200/89'}
        />
      </MainContainer>
    )
  }
}

export default App
