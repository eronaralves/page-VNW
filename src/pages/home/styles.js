import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  
`

export const Content = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-inline: auto;

`

export const ContainerAbout = styled.section`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

`

export const BoxLogo = styled.div`

  img {
    width: 400px;
  }

`

export const ContentAbout = styled.div`
  width: 100%;
  max-width: 600px;
  height: 570px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  

  h3 {
    font-size: 32px;
    font-weight: 800;
    text-align: center;
    margin-bottom: 16px;
    color: #0F2260;
  }

`

export const TextAbout = styled.div`
  
  display: flex;
  flex-direction: column;
  gap: 20px;

  p {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  }
  
`

export const ContainerFormation = styled.section`
  width: 100%;
  height: 570px;

  display: flex;
  align-items: center;

  margin-top: 18px;

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
    display: inline-block;
  }
`

export const TextFormation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > h3 {
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
  
  & > h3 {
    font-size: 32px;
    font-weight: 800;
    margin-bottom: 23px;
    color: #0F2260;
  }
`

export const ContainerBackgroundInput = styled.div`
  width: 100%;
  height: 70px;

  display: flex;
  align-items: center;
  
  margin-bottom: 20px;
  background-color: #0F2260;
`

export const BoxInput = styled.div`
  height: 25px;
  background-color: #0F2260;
  border: solid 1px #fff;
  display: flex;
  align-items: center;
  color: #fff;
  

  input {
    height: 100%;
    border: none;
    font-size: 16px;
    color: #fff;
    background-color: #0F2260;
  }

  img {
    width: 25px;
  }
`


export const TeamPhotos = styled.div`
  display: flex;
  flex: 1;
  gap: 12px;
  flex-wrap: wrap;
`
