import styled from "styled-components";

export const ContainerTeam = styled.div`
  width: 250px;
  position: relative;

  img {
    width: 100%;
  }

  &:hover {
    & > span {
      position: absolute;
      height: 100%;
      transition: all .2s;
    }
  }
`

export const DescriptionTeam = styled.div`
  width: 100%;

  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 2;

  text-align: center;
  color: #fff;

  h3 {
    font-size: 15px;
    margin-bottom: 3px;
  }

  span {
    display: block;
    font-size: 12px;
  }
`

export const Degrade = styled.span`
  width: 100%;
  height: 35%;
  display: block;

  position: absolute;
  bottom: 0;
  z-index: 1;
  cursor: pointer;

  background-image: linear-gradient(to top, #0F2260, transparent);

`