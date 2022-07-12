import React from "react";

// Styles
import {
  Container,
  Content,
  List
} from "./styles"

// Icons
import {IoMenu} from "react-icons/io5"

// Images
import LogoVNW from "../../assets/logo-vnw.png"

export default function Nav() {
  let isMobileMenu = false

  return (
    <Container>
      <Content>
        <img src={LogoVNW} alt="Logo Vai Na Web"/>
          <List>
          <li>Sobre</li>
          <li>Formação</li>
          <li>Equipe</li>
          <li>Eventos</li>
          <li>Contatos</li>
          </List>
          <IoMenu size={30}/>
      </Content>
    </Container>
  )
}