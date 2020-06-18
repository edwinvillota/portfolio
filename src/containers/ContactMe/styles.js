import styled from 'styled-components'
import { BaseTitle } from '../../styles/Base'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 2em;
  background-color: ${props => props.theme.pallete.gray1};
  @media screen and (min-width: 768px) {
    padding: 2em;
    background-color: ${props => props.theme.pallete.white};    
    max-width: 800px;
    margin: auto;
  }
`

export const Title = styled(BaseTitle)`
  @media screen and (min-width: 768px) {
    margin: 2em auto;
    font-size: ${props => props.theme.fontSizes.deskH1};
  }
`
