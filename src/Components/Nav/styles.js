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

  color: #fff;
  img {
    width: 55px;
    height: auto;
  }

  svg {
    display: none;
  }

  @media(max-width: 1420px) {
    padding-inline: 25px;
  }

  @media(max-width: 810px) {
    svg {
      display: block;
    }
  }

  @media(max-width: 400px) {
    padding-inline: 20px;
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

  @media(max-width: 810px) {
    display: none;
  }
  
`