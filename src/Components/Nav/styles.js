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
    font-weight: 400;
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
export const MenuMobile = styled.div`
  width: 80%;
  height: 100vh;

  position: fixed;

  z-index: 2;

  visibility: hidden;
  right: -100%;
  transition: 0.4s linear all;

  background: #00145D;
  color: #fff;

  &.isOpen {
    visibility: visible;
    right: 0%;
  }

  @media(min-width: 810px) {
    display: none;
  }
`;

export const ContentMenuMobile = styled.div`
  padding: 0 20px;
  text-align: center;

  .content-header {
    display: flex;
    align-items: center;
    height: 72px;
  }
    
`

export const ListMenuMobile = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin-top: 60px;
  list-style: none;

  li {
    font-weight: 400;
    font-size: 24px;

    line-height: 31px;
    text-align: center;

    cursor: pointer;
  }

  li:hover {
    opacity: .5;
    transition: all .3s;
  } 
`