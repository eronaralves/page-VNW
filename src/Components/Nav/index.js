import React, { useState } from "react";

// Styles
import {
  Container,
  Content,
  List,
  MenuMobile,
  ContentMenuMobile,
  ListMenuMobile
} from "./styles"

// Icons
import {IoMenu} from "react-icons/io5"
import {AiOutlineClose} from "react-icons/ai"

// Images
import LogoVNW from "../../assets/images/logo-vnw.png"

export default function Nav() {
  const [menuMobileOpen, setMenuMobileOpen] = useState(false)

  return (
    <Container>
      <MenuMobile className={menuMobileOpen ? "isOpen" : ""}>
        <ContentMenuMobile>
          <div className="content-header">
            <AiOutlineClose size={35} onClick={() => {setMenuMobileOpen(false)}}/>
          </div>
          <ListMenuMobile>
            <li>Sobre</li>
            <li>Formação</li>
            <li>Equipe</li>
            <li>Eventos</li>
            <li>Contatos</li>
          </ListMenuMobile>
        </ContentMenuMobile>
      </MenuMobile>
      
      <Content>
        <img src={LogoVNW} alt="Logo Vai Na Web"/>
          <List>
            <li>Sobre</li>
            <li>Formação</li>
            <li>Equipe</li>
            <li>Eventos</li>
            <li>Contatos</li>
          </List>
          <IoMenu size={30} onClick={() => {setMenuMobileOpen(true)}}/>
      </Content>
    </Container>
  )
}