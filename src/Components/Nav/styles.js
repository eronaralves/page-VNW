import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;

  display: flex;
  justify-content: center;

  `

export const Content = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: space-between;


  img {
    width: 55px;
    height: auto;
  }

  @media(max-width: 1420px) {
    padding-inline: 25px;
  }
  
`

export const List = styled.ul`
  display: flex;

  gap: 65px;

  list-style: none;
  color: #fff;

  li {
    font-size: 16px;
    line-height: 30px;
    font-weight: 500;
    cursor: pointer;
  }

  li:hover {
    opacity: .5;
    transition: all .3s;
  } 
  
`