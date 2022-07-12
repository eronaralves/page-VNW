import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #root {
  width: 100%;
  height: 100vh;
}
`

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  font-family: "Montserrat", sans-serif;
`

export const Content = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-inline: auto;


  @media(max-width: 1420px) {
    padding-inline: 25px;
  }
`
