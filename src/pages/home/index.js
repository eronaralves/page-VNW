import React, { useEffect, useState } from "react";
import { TeamData } from "../../ultis";
import { Content} from "../../global"

// Styles
import {
  Container,
  ContainerAbout,
  BoxLogo,
  ContentAbout,
  TextAbout,
  ContainerFormation,
  ContentFormation,
  BoxCodePage,
  TextFormation,
  TeamPhotos,
  ContainerTeam,
  ContainerBackgroundInput,
  BoxInput,
  ContainerEvents,
  ContentEvents,
  TechGirls
} from "./styles"

// Components
import Header from "../../Components/Header"
import Nav from "../../Components/Nav";
import Formation from "../../Components/Formation";
import Team from "../../Components/Team"
import Footer from "../../Components/Footer";

// Images
import LogoVNW from "../../assets/logo-vnw.png"
import CodePage from "../../assets/code-page.png"
import IconComputer from "../../assets/icon.computer.svg"
import IconSearch from "../../assets/icon-search.svg"
import CallMeet from "../../assets/call-meet.png"

export default function Home() {
  const [teamData, setTeamData] = useState(TeamData)

  return (
    <Container>
      <Header>
        <Nav/>
      </Header>
      <Content>
        <ContainerAbout>
          <BoxLogo>
            <img src={LogoVNW} alt="Logo Vai na Web" />
          </BoxLogo>
          <ContentAbout>
            <h2>Sobre o Vai na Web</h2>
            <TextAbout>
              <p>Fundado em 2017, no Complexo do Alemão, o Vai na Web vem impactando e transformando a vida de jovens das classes C, D e E do Rio de Janeiro e de outros 18 estados do Brasil.</p>

              <p>Muito mais do que compartilhar conhecimento de programação front-end, o programa oferece aulas de inglês e desenvolvimento de habilidades humanas e socioemocionais, que preparam os futuros desenvolvedores para o mundo do trabalho e oferecem um espaço em que é possível descobrir a riqueza de áreas que a tecnologia tem.</p>

              <p> Com o objetivo de acentuar a potência mundial que é a juventude, o Vai na Web tem se tornado cada vez mais um lugar de transformação. Através da cultura do afeto, a equipe do programa entende que “educar não é impor informação, é trocar” e sua maior riqueza, segundo a coordenadora executiva, Cris dos Prazeres, “é respeitar a geração da juventude que está nesse processo de compartilhar”.</p>
            </TextAbout>
          </ContentAbout>
        </ContainerAbout>

        <ContainerFormation>
          <ContentFormation>
            <TextFormation>
              <h2>Formação</h2>
              <Formation title="FRONT-END" text="Quem trabalha com Front End é responsável por desenvolver por meio do código uma interface gráfica e, normalmente, com as tecnologias base da Web: HTML, CSS e JavaScript." icon={IconComputer}/>

              <Formation title="BACK-END" text="O Back-End trabalha em boa parte dos casos fazendo a ponte entre os dados que vem do navegador rumo ao banco de dados e vice-versa, sempre aplicando as devidas regras de negócio, validações e garantias num ambiente restrito ao usuário final (ou seja, onde ele não consegue acessar ou manipular algo)." icon={IconComputer}/>
            </TextFormation>
            <BoxCodePage>
              <img src={CodePage} alt="Pagina de Codigo Animada "/>
            </BoxCodePage>
          </ContentFormation>
        </ContainerFormation>

        <ContainerTeam>
          <h2>Equipe</h2>
          <ContainerBackgroundInput>
            <BoxInput>
              <input type="text" placeholder="Pesquisar..."/>
              <img src={IconSearch} alt="Icon de pesquisar"/>
            </BoxInput>
          </ContainerBackgroundInput>

          <TeamPhotos>
            {teamData.map(item => (
              <Team name={item.name} image={item.image} post={item.post}/>
            ))}
          </TeamPhotos>
        </ContainerTeam>

        <ContainerEvents>
        <h2>Eventos</h2>
        <ContentEvents>
          <img src={CallMeet} alt="Call no meet da Tech girls"/>
          <TechGirls>
            <h3>Tech Girls</h3>
            <p>Com o objetivo de promover network entre mulheres de tecnologia, conectar talentos femininos com oportunidades no mercado da tecnologia, oferecer experiências de troca através de eventos com mulheres que já têm experiência no mercado da tecnologia, acelerar os talentos com ajuda para custeio de luz e internet para facilitar o processo de estudo, promover mentoria para as participantes do grupo.</p>
          </TechGirls>
        </ContentEvents>
      </ContainerEvents>
      </Content>
      <Footer/>
    </Container>
  )
}