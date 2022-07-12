import React from "react";

// Styles
import {
  ContainerTeam,
  DescriptionTeam,
  Degrade
} from "./styles"

export default function Team({image, name, post}) {
  return (
    <ContainerTeam>
      <img src={image} alt={`Foto de ${name}`}/>
      <DescriptionTeam>
        <h3>{name}</h3>
        <span>{post}</span>
      </DescriptionTeam>
      <Degrade/>
    </ContainerTeam>
  )
}