import React from "react";
import {Content} from "../../styles/global"

// icons Contact
import Facebook from "../../assets/images/facebook.svg"
import Linkedin from "../../assets/images/linkedin.svg"
import Instagram from "../../assets/images/instagram.svg"
import Youtube from "../../assets/images/youtube.svg"
import Medium from "../../assets/images/medium.svg"


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
              <a href="https://www.facebook.com/vainaweb" target="_blank"><img src={Facebook}/></a>

              <a href="https://www.instagram.com/vainaweb/" target="_blank"><img src={Instagram}/></a>

              <a href="https://br.linkedin.com/company/vainaweb" target="_blank"><img src={Linkedin}/></a>

              <a href="https://medium.com/@olavainaweb" target="_blank"><img src={Medium}/></a>

              <a href="/"><img src={Youtube}/></a>
            </BoxIconContact>
          </Contact>
        </BoxContact>
      </Content>
    </ContainerFooter>
  )
}