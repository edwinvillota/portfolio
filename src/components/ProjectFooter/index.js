import React from 'react'
import { Container } from './styles'
import { ProjectLink } from '../ProjectLink'

export const ProjectFooter = ({ links }) => {
  return (
    <Container>
      {
        links.map(ln =>
          <ProjectLink key={ln.url} {...ln} />
        )
      }
    </Container>
  )
}
