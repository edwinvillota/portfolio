import React from 'react'
import { Container, Name, Description, Skills } from './styles'

export const ProjectHeader = ({ name, description, skills }) => (
  <Container>
    <Name>
      {name}
    </Name>
    <Description>
      {description}
    </Description>
    <Skills>
      {skills.join(' - ')}
    </Skills>
  </Container>
)
