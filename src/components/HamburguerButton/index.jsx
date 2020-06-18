import React from 'react'
import { FiMenu } from 'react-icons/fi'
import { Container, Label, Input } from './styles'

export const HamburguerButton = () => (
  <Container>
    <Label htmlFor="hamburguer">
      <FiMenu size={25}/>
    </Label>
    <Input type="checkbox" id='hamburguer'/>
  </Container>
)
