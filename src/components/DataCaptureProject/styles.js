import styled from 'styled-components'

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  row-gap: 1em;
  column-gap: 1em;
  
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    column-gap: 2em;
  }
`
export const Img = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  @media screen and (min-width: 768px) {
    border-radius: 20px;
    filter: drop-shadow(0 0 5px ${props => props.theme.pallete.gray4})
  }
`
