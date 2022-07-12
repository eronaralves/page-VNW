import styled from "styled-components";

// Images
import BackgroundFooter from "../../assets/background-footer.png"

export const ContainerFooter = styled.footer`
  width: 100%;
  height: 350px;

  background-image: url(${BackgroundFooter});
  background-size: cover;
  background-repeat: no-repeat;

  color: #fff;

  h2 {
    font-size: 32px;
    font-weight: 800;
  }
`

export const BoxContact = styled.div`
  height: 300px;
   
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Contact = styled.div`
  display: flex;
  gap: 32px;
  margin-top: 60px;

  p {
    width: 100%;
    max-width: 220px;
    line-height: 22px;
    font-weight: 700;
  }

  svg {
    cursor: pointer;

  }

  svg:hover {
    opacity: .7;
  }

  
`