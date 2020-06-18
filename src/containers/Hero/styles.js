import styled from 'styled-components'
import { HeroIlustration } from '../../components/HeroIlustration'

export const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(140deg, ${props => props.theme.pallete.gray1}, ${props => props.theme.pallete.gray3});
  padding: 0 2em;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: 768px) {
    max-width: 1200px;
    grid-template-columns: repeat(2, 1fr);
  }
`

export const StyledHeroIlustration = styled(HeroIlustration)`
  @media screen and (min-width: 768px) {
    grid-row: 1/3;
    height: 380px;
  }
`

export const Title = styled.h1`
  font-family: ${props => props.theme.fonts.primary};
  font-size: ${props => props.theme.fontSizes.mobH1};
  text-align: center;
  margin-top: 2em;
  margin-bottom: 1em;

  @media screen and (min-width: 768px) {
    text-align: left;
    grid-column: 2/3;
    font-size: ${props => props.theme.fontSizes.deskH1};
    line-height: 1.5em;
    margin-top: 0;
    margin-bottom: -50px;
    max-width: 370px;
  }
`

export const Description = styled.h3`
  font-family: ${props => props.theme.fonts.secondary};
  font-size: ${props => props.theme.fontSizes.mobP};
  font-weight: 400;
  text-align: center;
  margin-top: 1em;
  line-height: 2em;

  @media screen and (min-width: 768px) {
    text-align: left;
    grid-column: 2/3;
    font-size: ${props => props.theme.fontSizes.mobExtraSmall};
    line-height: 2em;
    max-width: 370px;
  }
`
