import React from 'react'
import './App.css'
import CardGrande from './components/CardGrande/CardGrande'
import CardPequeno from './components/CardPequeno/CardPequeno'
import ImagemButton from './components/ImagemButton/ImagemButton'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>

        <CardPequeno
          imagem="http://assets.stickpng.com/images/584856b4e0bb315b0f7675ac.png"
          titulo="E-mail:"
          texto="qwertyuiopp@assdfmail.com"
        />

        <CardPequeno
          imagem="https://freepikpsd.com/file/2019/10/icone-endere%C3%A7o-png-Transparent-Images.png"
          titulo="Endereço:"
          texto="Rua do Sol, n. xx"
        />

        <CardGrande
          imagem="./components/CardGrande/imgs/avatarCaioCropped.png"
          nome="Caio Porto"
          descricao="Oi, eu sou o Caio Porto. Sou aluno da Labenu. Adoro reclamar de CSS e resolver problemas de lógica com JavaScript. Também estudo Rails nas horas vagas.  Acabei de concluir a fase de front-end do meu curso e estou me candidatando à vaga de desenvolvedor web na sua empresa. "
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          nome="Labenu"
          descricao="Estou em fase de transição de carreira e amando cada momento de aprendizado na área da tecnologia!"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  )
}

export default App
