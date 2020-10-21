import styled from 'styled-components'
import { fade } from '../../styles/Animations'

export const Container = styled.div`
  display: flex;
  ${props => props.visible && fade({ direction: props.direction, duration: props.duration })}
`
