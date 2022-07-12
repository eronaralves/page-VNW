import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`

export const ContainerAbout = styled.section`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media(max-width: 1048px) {
    margin-block: 60px;
  }
`

export const BoxLogo = styled.div`
  margin-block: 20px;

  img {
    width: 400px;
  }

  @media(max-width: 650px) {
    width: 100%;
    display: flex;

    img {
      width: 300px;
      margin: 0 auto;
    }
  }

  @media(max-width: 400px) {
    img {
      width: 220px;
    }
  }

`

export const ContentAbout = styled.div`
  width: 100%;
  max-width: 600px;
  height: 570px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 32px;
    font-weight: 800;
    text-align: center;
    margin-bottom: 16px;
    color: #0F2260;
  }

  @media(max-width: 1048px) {
    h2 {
      text-align: left;
    }
  }

  @media(max-width: 560px) {
    margin-block: 14px;
  }

  @media(max-width: 370px) {
    margin-block: 100px;
  }

  
`

export const TextAbout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  p {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  }

  @media(max-width: 540px) {
    p {
      font-size: 15px;
      line-height: 20px;
    }
  }
  
`

export const ContainerFormation = styled.section`
  width: 100%;

  display: flex;
  align-items: center;

  margin-top: 50px;

`

export const ContentFormation = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

`

export const BoxCodePage = styled.div`
  width: 50%;

  img {
    width: 100%;
    height: 100%;
  }

  @media(max-width: 1048px) {
    width: 100%;
    margin-top: 52px;

    img {
    width: 100%;
    height: auto;
  }
  }
`

export const TextFormation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > h2 {
    font-size: 32px;
    font-weight: 800;
    margin-bottom: 23px;
    color: #0F2260;
  }

  & > div:nth-child(3) {
    margin-top: 32px;

  }
`

export const ContainerTeam = styled.div`
  margin-top: 150px;

  & > h2 {
    font-size: 32px;
    font-weight: 800;
    margin-bottom: 23px;
    color: #0F2260;
  }

  @media(max-width: 400px) {
    margin-top: 80px;
  }
`

export const ContainerBackgroundInput = styled.div`
  width: 100%;
  height: 70px;

  display: flex;
  align-items: center;

  padding-inline: 85px;
  margin-bottom: 20px;
  
  background-color: #0F2260;

  @media(max-width: 635px) {
    padding-inline: 20px;
    
  }
`

export const BoxInput = styled.div`
  height: 25px;

  display: flex;
  align-items: center;
  
  border: solid 1px #fff;
  color: #fff;
  background-color: #0F2260;

  input {
    height: 100%;

    font-size: 16px;
    border: none;
    padding: 8px;

    color: #fff;
    background-color: #0F2260;
  }

  img {
    width: 25px;
  }

  @media(max-width: 635px) {
    justify-content: center;
  }
`

export const TeamPhotos = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  @media(max-width: 635px) {
    justify-content: center;
  }
`

export const ContainerEvents = styled.section`
  margin-top: 120px;

  & > h2 {
    width: 100%;
    max-width: 1300px;
    margin-inline: auto;
    font-size: 32px;
    font-weight: 800;
    margin-bottom: 23px;
    color: #0F2260;
  }

  @media(max-width: 400px) {
    margin-top: 80px;
  }

`

export const ContentEvents = styled.div`
  width: 100%;
  
  display: flex;
  align-items: center;
  margin-bottom: 100px;

  img {
    width: 80%;
  }

  @media(max-width: 1165px) {

    img {
      width: 70%;
    }
  }

  @media(max-width: 988px) {
    flex-wrap: wrap;
    img {
      width: 100%;
    }
  }

`

export const TechGirls = styled.div`
  width: 100%;
  max-width: 500px;

  margin-top: 32px;

  h3 {
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 23px;
    color: #0F2260;
  }
  
  p {
    text-align: left;
    font-weight: 500;
    font-size: 15px;
  }
`
