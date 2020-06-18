import styled from 'styled-components'
import { BaseTitle } from '../../styles/Base'
import { AboutIlustration } from '../../components/AboutIlustration'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0 2em;
  @media screen and (min-width: 768px) {
    justify-content: center;
    align-items: center;
    padding: 4em;
  }
`

export const StyledAboutIlustration = styled(AboutIlustration)`
  @media screen and (min-width: 768px) {
    grid-column: 2/3;
    grid-row: 1/3;
    height: 450px;
    margin-top: -5em;
  }
`

export const Title = styled(BaseTitle)`
  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.deskH1};
  }
`

export const Grid = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2em;
    max-width: 1200px;
  }
`

export const Paragraph = styled.p`
  font-family: ${props => props.theme.fonts.secondary};
  font-size: ${props => props.theme.fontSizes.mobP};
  line-height: 2em;
  @media screen and (min-width: 768px) {
    max-width: 350px;
  }
`
