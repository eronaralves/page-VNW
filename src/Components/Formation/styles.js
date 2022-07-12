import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  align-items: start;
  gap: 31px;
 
  img {
    display: block;
    width: 100px;
  }

  @media(max-width: 490px) {
    img {
      width: 70px;
    }
  }
`

export const TextFormation = styled.div`
  display: flex;
  flex-direction: column;

  gap: 12px;
  
  h3 {
    color: #0F2260;
    font-weight: 700;
    font-size: 20px;
  }
  
  p {
    font-size: 14px;
    font-weight: 500;
  }

  @media(max-width: 490px) {
    text-align: left;

    h3 {
      font-size: 18px;
    }

    p {
      font-size: 10px;
    }
  }

`