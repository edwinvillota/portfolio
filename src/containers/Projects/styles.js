import styled from 'styled-components'
import { BaseTitle } from '../../styles/Base'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 2em;
  
  @media screen and (min-width: 768px) {
    margin: auto;
    max-width: 1100px
  }
`
export const Title = styled(BaseTitle)`
`
