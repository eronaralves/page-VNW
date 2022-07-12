import React from "react";

// Styles
import {
  Container,
  Content,
  ContainerSbscription,
  Subscription,
  MarkingSubscription
} from "./styles"

export default function Header({children}) {

  return (
    <Container>
      {children}
      <Content>
        <h1><span>//</span> Quer construir uma carreira de sucesso como Desenvolvedor(a) Front-end? </h1>
        
        <ContainerSbscription>
          <Subscription>
            <MarkingSubscription>
              <span></span>
              <span></span>
              <span></span>
            </MarkingSubscription>
            <hr></hr>
            <h2>Inscreva-se no Vai na Web!</h2>
            <span>Inscrições 02 a 21 de Agosto</span>
          </Subscription>

          <strong>Link para o Formulário: <a href="#">bit.ly/CarreiraVaiNaWeb</a></strong>
        </ContainerSbscription>
      </Content>
    </Container>
  )
}