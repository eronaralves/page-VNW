import React from "react";
import {Content} from "../../global"

// icons
import {TbBrandMedium, TbBrandYoutube, TbBrandInstagram, TbBrandLinkedin} from "react-icons/tb"
import {AiOutlineFacebook, AiOutlineMedium, AiFillLinkedin, AiOutlineInstagram, AiFillYoutube, AiFillFacebook} from "react-icons/ai"

// Styles
import {
  ContainerFooter,
  BoxContact,
  Contact
} from "./styles"

export default function Footer() {

  return (
    <ContainerFooter>
      <Content>
        <BoxContact>
          <h2>Contato</h2>
          <Contact>
            <p>Siga nossas redes sociais e fique conectado com todas as novidades.</p>
            <AiFillFacebook size={60} color="#000DF7"/>
            <AiOutlineInstagram size={60} color="#8433B7"/>
            <AiFillLinkedin size={60} color="#006397"/>
            <AiOutlineMedium size={60} color="#110F0E"/>
            <AiFillYoutube size={60} color="#E81918"/>
          </Contact>
        </BoxContact>
      </Content>
    </ContainerFooter>
  )
}