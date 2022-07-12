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
    font-size: 55px;
    font-weight: 800;
    color: #FFAC2D;

    span {
      color: #FF611E;
      font-weight: 300;
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
`

export const Subscription = styled.div`
  width: 100%;
  max-width: 520px;

  background-color: #fff;

  padding-inline: 15px;
  padding-block: 10px;

  border-radius: 15px;

  h2 {
    font-size: 32px;
    color: #00145D;
    margin-top: 15px;
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
    color: #272727;
    margin-top: 10px;
    margin-bottom: 12px;
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