import React from 'react'
import { Container } from './styles'
import { ProjectHeader } from '../ProjectHeader'
import { ProjectFooter } from '../ProjectFooter'

export const Project = ({ details, links, children }) => (
  <Container>
    <ProjectHeader {...details} />
    { children }
    <ProjectFooter links={links}/>
  </Container>
)
