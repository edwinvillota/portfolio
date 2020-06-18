import styled from 'styled-components'

export const Preview = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  row-gap: 2em;
  
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(6, 100px);
    row-gap: 0;
    overflow: hidden;
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
`

export const DashboardImg = styled(Img)`
  @media screen and (min-width: 768px) {
    grid-column: 1 / 4;
    grid-row: 1 / 4;
    z-index: 3;
  }
`

export const BoxesImg = styled(Img)`
  @media screen and (min-width: 768px) {
    grid-column: 2 / 5;
    grid-row: 2 / 5;
    z-index: 2;
  }
`

export const UpdateDBImg = styled(Img)`
  @media screen and (min-width: 768px) {
    grid-column: 3 / 6;
    grid-row: 3 / 6;
    z-index: 1;
  }
`
