import React from "react";

// Styles
import { 
  Container,
  TextFormation
} from "./styles"

export default function Formation({title, text, icon}) {

  return (
    <Container>
      <img src={icon} alt="Icone de um computador"/>
      <TextFormation>
        <h3>{title}</h3>
        <p>{text}</p>
      </TextFormation>
    </Container>
  )
}