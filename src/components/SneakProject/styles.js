import styled from 'styled-components'
export const Preview = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(6, 100px);
    overflow: hidden;
    padding: 3px;
  }
`

export const DesktopView = styled.div`
  @media screen and (min-width: 768px) {
    overflow: hidden;
    grid-column: 1 / 8;
    grid-row: 1 / 6;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, .2);
    border-radius: 20px;
  }
`

export const MobileView = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    grid-column: 7 / 9;
    grid-row: 2 / 7;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, .2);
  }
`

export const Img = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`
