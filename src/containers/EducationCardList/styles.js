import styled from 'styled-components'
import { BaseSubtitle } from '../../styles/Base'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 2em;
  margin-bottom: 2em;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    row-gap: 0;
    border-bottom: solid 1px ${props => props.theme.pallete.gray3};
  }
`
export const Category = styled(BaseSubtitle)`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center; 
    font-size: ${props => props.theme.fontSizes.deskH2};
    border-style: solid;
    border-width: 1px 1px 0 0;
    border-color: ${props => props.theme.pallete.gray3};
  }
`

export const Professional = styled(Category)`
  @media screen and (min-width: 768px) {
    grid-column: 1/1;
    grid-row: 1/3;
  }
`

export const Technology = styled(Category)`
  @media screen and (min-width: 768px) {
    grid-column: 1/1;
    grid-row: 3/5;
  }
`
