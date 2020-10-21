import React from 'react'
import { Container } from './styles'
import { ProjectHeader } from '../ProjectHeader'
import { ProjectFooter } from '../ProjectFooter'
import { Fade } from '../Fade'

export const Project = ({ details, links, direction, children }) => (
  <Container>
    <Fade direction={direction}>
      <ProjectHeader {...details} />
    </Fade>
    { children }
    <Fade direction={direction}>
      <ProjectFooter links={links}/>
    </Fade>
  </Container>
)
