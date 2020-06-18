import styled from 'styled-components'

export const Preview = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  row-gap: 2em;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
`

export const Img = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  @media screen and (min-width: 768px) {
    border-radius: 20px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, .2);
  }

  &:nth-child(1) {
    @media screen and (min-width: 768px) {
      grid-column: 1 / 3;
      grid-row: 1 / 3;
      z-index: 2;
    }
  }

  &:nth-child(2) {
    @media screen and (min-width: 768px) {
      grid-column: 2 / 4;
      grid-row: 2 / 5;
      z-index: 1;
    }
  }
`
