import styled from 'styled-components'

export const Preview = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;

  @media screen and (min-width: 768px) {
    grid-template-columns: 4fr 1fr;
    grid-template-rows: 500px;
    overflow: hidden;
    column-gap: 2em;
    padding: 3px;
  }
`

export const DesktopView = styled.div`
  position: relative;
  height: 100%;
  @media screen and (min-width: 768px) { 
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, .2);
  }
`

export const MobileView = styled.div`
  display: none;
  @media screen and (min-width: 768px) { 
    position: relative;
    display: block;    
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, .2);
  }
`

export const Img = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    max-height: 100%;
  }

`

export const DesktopImg = styled(Img)`

`

export const MobileImg = styled(Img)`
  object-position: top;
`
