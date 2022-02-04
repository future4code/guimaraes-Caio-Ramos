import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

class App extends React.Component {
  state = {
    users: [
      {
        name: "Lalaíne",
        userPhoto: "https://picsum.photos/51/50",
        photoPost: "https://picsum.photos/200/150",
      },

      {
        name: "CornoValue",
        userPhoto: "https://picsum.photos/51/50",
        photoPost: "https://picsum.photos/200/150",
      },

      {
        name: "PinkMila",
        userPhoto: "https://picsum.photos/51/50",
        photoPost: "https://picsum.photos/200/150",
      },
    ]
  };

transformInVar = () =>{

  const sameUsers = [ ...this.state.users];
  this.setState({people: users);
};


  render() {
    const usersList = this.state.sameUsers.map((person) => {
      return (
        <p>
          {person.name}</p>
         <img>{person.userPhoto}</img> 
         <img >{person.photoPost}</img> 
        
      );
    });

    return (
      <MainContainer>
        <Post>{usersList}</Post>
      </MainContainer>
    );
  }
}

/* 
      { <MainContainer>
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
    )  }
  }
}*/

export default App;
