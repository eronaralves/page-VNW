import styled from "styled-components";

// Images
import BackgroundFooter from "../../assets/images/background-footer.png"

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

  @media(max-width: 550px) {
    height: 350px;
  }
`

export const Contact = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 32px;
  margin-top: 60px;

  p {
    width: 100%;
    max-width: 220px;
    line-height: 22px;
    font-weight: 700;
  }
  
`

export const BoxIconContact = styled.div`
  display: flex;
  gap: 10px;

  img {
    cursor: pointer;
    width: 50px;
    color: #fff;
  }

  img:hover {
    opacity: .7;
  }

  @media(max-width: 450px) {
    margin-top: 30px;

    img {
      width: 45px;
    }
    
  }
`