import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background: ${props => props.theme.pallete.white};
  box-shadow: 2px 2px 3px rgba(0, 0, 0, .2);
  min-height: 170px;
  padding: 2em 1em;
  @media screen and (min-width: 768px) {
    min-height: 230px;
    box-shadow: none;
    border-top: solid 1px ${props => props.theme.pallete.gray3};
    padding: 2em 3em;
  }
`

export const Title = styled.h3`
  font-family: ${props => props.theme.fonts.primary};
  font-size: ${props => props.theme.fontSizes.mobH3};
  margin-bottom: .5em;
  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.deskH3};
  }
`

export const Institution = styled.span`
  font-size: ${props => props.theme.fontSizes.mobSmall};
  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.deskP};
  }
`

export const Details = styled.span`
  font-size: ${props => props.theme.fontSizes.mobExtraSmall};
  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.deskExtraSmall};
  }
`

export const Country = styled.span`
  color: ${props => props.theme.pallete.gray4};
`

export const Year = styled.span`
  color: ${props => props.theme.pallete.green1};
`
