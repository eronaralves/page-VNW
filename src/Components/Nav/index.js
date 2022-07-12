import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll"

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

  const menusItems = [
    {
      label: "Sobre",
      id: "#about"
    },
    {
      label: "Formação",
      id: "#formation"
    },
    {
      label: "Equipe",
      id: "#teams"
    },
    {
      label: "Eventos",
      id: "#events"
    },
    {
      label: "Contatos",
      id: "#footer"
    }
  ]

  return (
    <Container>
      <MenuMobile className={menuMobileOpen ? "isOpen" : ""}>
        <ContentMenuMobile>
          <div className="content-header">
            <AiOutlineClose size={35} onClick={() => {setMenuMobileOpen(false)}}/>
          </div>
          <ListMenuMobile>
            {menusItems.map(item => (
              <li><AnchorLink href={item.id} onClick={() => {setMenuMobileOpen(false)}}>{item.label}</AnchorLink></li>
            ))}
          </ListMenuMobile>
        </ContentMenuMobile>
      </MenuMobile>
      
      <Content>
        <img src={LogoVNW} alt="Logo Vai Na Web"/>
          <List>
            {menusItems.map(item => (
              <li><AnchorLink href={item.id} onClick={() => {setMenuMobileOpen(false)}}>{item.label}</AnchorLink></li>
            ))}
          </List>
          <IoMenu size={30} onClick={() => {setMenuMobileOpen(true)}}/>
      </Content>
    </Container>
  )
}