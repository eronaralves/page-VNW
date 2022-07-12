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
            <div>
              <AiFillFacebook color="#0166E1"/>
              <AiOutlineInstagram color="#8433B7"/>
              <AiFillLinkedin color="#006397"/>
              <AiOutlineMedium color="#110F0E"/>
              <AiFillYoutube color="#E81918"/>
            </div>
          </Contact>
        </BoxContact>
      </Content>
    </ContainerFooter>
  )
}