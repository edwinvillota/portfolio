import React from 'react'
import { Container } from './styles'
import { Logo } from '../Logo'
import { HamburguerButton } from '../HamburguerButton'

export const NavBar = () => (
  <Container>
    <Logo />
    <HamburguerButton />
  </Container>
)
