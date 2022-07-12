import React from "react";
import {Content} from "../../global"

// icons
import { AiOutlineMedium, AiFillLinkedin, AiOutlineInstagram, AiFillYoutube, AiFillFacebook} from "react-icons/ai"

// Styles
import {
  ContainerFooter,
  BoxContact,
  Contact,
  BoxIconContact
} from "./styles"

export default function Footer() {

  return (
    <ContainerFooter>
      <Content>
        <BoxContact>
          <h2>Contato</h2>
          <Contact>
            <p>Siga nossas redes sociais e fique conectado com todas as novidades.</p>
            <BoxIconContact>
              <a href="https://www.facebook.com/vainaweb" target="_blank"><AiFillFacebook color="#0166E1"/></a>

              <a href="https://www.instagram.com/vainaweb/" target="_blank"><AiOutlineInstagram color="#8433B7"/></a>

              <a href="https://br.linkedin.com/company/vainaweb" target="_blank"><AiFillLinkedin color="#006397"/></a>

              <a href="https://medium.com/@olavainaweb" target="_blank"><AiOutlineMedium color="#110F0E"/></a>

              <a href="/"><AiFillYoutube color="#E81918"/></a>
            </BoxIconContact>
          </Contact>
        </BoxContact>
      </Content>
    </ContainerFooter>
  )
}