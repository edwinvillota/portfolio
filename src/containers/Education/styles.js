import styled from 'styled-components'
import { BaseTitle } from '../../styles/Base'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.pallete.gray1};
  min-height: 100vh;
  padding: 0 2em;
  @media screen and (min-width: 768px) {
    margin: 0 auto;
    justify-content: center;
    background-color: ${props => props.theme.pallete.white};
    padding: 4em 0;
  }
`

export const Title = styled(BaseTitle)`
  @media screen and (min-width: 768px) {
    margin: 2em auto;
    font-size: ${props => props.theme.fontSizes.deskH1};
  }
`
