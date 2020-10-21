import React from 'react'
import { Container } from './styles'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

export const Fade = ({ direction = 'left', duration = '1s', children }) => {
  const [show, ref] = useIntersectionObserver()

  return (
    <Container visible={show} ref={ref} direction={direction} duration={duration}>
      {children}
    </Container>
  )
}
