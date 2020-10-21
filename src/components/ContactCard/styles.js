import styled from 'styled-components'

export const Container = styled.a`
  display: flex;
  background-color: ${props => props.theme.pallete.white};
  padding: 2em 1em;
  width: 100%;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, .2);
  @media screen and (min-width: 768px) {
    box-shadow: none;
    margin: auto;
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`

export const IconColumn = styled(Column)`
  margin-right: 1em;
`

export const Title = styled.h2`
  font-family: ${props => props.theme.fonts.primary};
  font-size: ${props => props.theme.fontSizes.mobH2};
`

export const Url = styled.span`
  font-size: ${props => props.theme.fontSizes.mobExtraSmall};
  color: ${props => props.theme.pallete.green1};
`
