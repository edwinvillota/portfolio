import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
`

export const Name = styled.h2`
  font-family: ${props => props.theme.fonts.primary};
  font-size: ${props => props.theme.fontSizes.mobH2};
  margin-bottom: .5em;
`

export const Description = styled.p`
  font-size: ${props => props.theme.fontSizes.mobSmall};
  color: ${props => props.theme.pallete.gray4};
  margin-bottom: .5em;
`

export const Skills = styled.span`
  font-size: ${props => props.theme.fontSizes.mobExtraSmall};
  color: ${props => props.theme.pallete.green1};
`
