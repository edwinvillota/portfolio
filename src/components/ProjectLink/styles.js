import styled from 'styled-components'

export const Link = styled.a`
  display: flex;
  align-items: center;
  margin-left: 1em;
`

export const Text = styled.span`
  font-size: ${props => props.theme.fontSizes.mobSmall}
`
