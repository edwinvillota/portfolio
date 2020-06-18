import styled from 'styled-components'

export const BaseTitle = styled.h1`
  font-family: ${props => props.theme.fonts.primary};
  font-size: ${props => props.theme.fontSizes.mobH1};
  margin: 1.5em 0;
`

export const BaseSubtitle = styled.h2`
  font-family: ${props => props.theme.fonts.primary};
  font-size: ${props => props.theme.fontSizes.mobH2};
`
