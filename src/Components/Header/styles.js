import styled from "styled-components"

// Images
import BackgroundHeader from "../../assets/background.png"

export const Container = styled.header`
  width: 100%;
  height: 100vh;
  
  background-image: url(${BackgroundHeader});
  background-position: top;
  background-size: cover;
`

export const Content = styled.div`
  width: 100%;
  max-width: 1300px;
  height: calc(80% - 70px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;

  h1 {
    font-size: 48px;
    font-weight: 800;
    color: #FFAC2D;

    span {
      color: #FF611E;
      font-weight: 300;
    }
  }

  @media(max-width: 1420px) {
    padding-inline: 25px;
  }

  @media(max-width: 910px) {
    h1 {
      font-size: 45px;
    }
  }

  @media(max-width: 540px) {
    height: calc(70% - 70px);

    h1 {
      font-size: 36px;
    }
  }

  @media(max-width: 500px) {
    h1 {
      font-size: 30px;
    }
  }

  @media(max-width: 400px) {
    padding-inline: 20px;
    margin-block: 32px;
  }

  @media(max-width: 360px) {
    h1 {
      font-size: 25px;
    }
  }
`

export const ContainerSbscription = styled.div`
  margin-top: 48px;

  & > strong {
    display: block;
    color: #FED5B2;
    margin-top: 8px;
    a {
      font-weight: 300;
      color: #FED5B2;
      text-decoration: none;
    }
  }

  @media(max-width: 500px) {
    strong {
      font-size: 17px;
      line-height: 28px;

      a {
        font-size: 18px;
      }
    }

  }
`

export const Subscription = styled.div`
  width: 100%;
  max-width: 520px;

  padding-inline: 15px;
  padding-block: 10px;

  border-radius: 15px;
  background-color: #fff;

  h2 {
    font-size: 32px;
    margin-top: 15px;
    color: #00145D;
  }

  hr {
    height: 6px;
    width: 90%;

    border-radius: 20px;
    background: #00145D;
  }

  & > span {
    display: block;

    font-size: 20px;
    font-weight: 500;

    margin-top: 10px;
    margin-bottom: 12px;

    color: #272727;
  }

  @media(max-width: 500px) {
    h2 {
      font-size: 30px;
    }
  }

  @media(max-width: 370px) {
    h2 {
      font-size: 25px;
    }
  }
`

export const MarkingSubscription = styled.div`
  display: flex;
  align-items: flex-start;

  gap: 5px;
  margin-bottom: 10px;

  span {
    width: 9px;
    height: 9px;
    
    display: block;
    border-radius: 20px;
    background-color: #00145D;
  }
`