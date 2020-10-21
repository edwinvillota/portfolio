import React from 'react'
import { Section, Title } from './styles'
import { Fade } from '../../components/Fade'
import { SneakProject } from '../../components/SneakProject'
import { FMC1Project } from '../../components/FMC1Project'
import { PmpProject } from '../../components/PmpProject'
import { GeaProject } from '../../components/GeaProject'
import { DataCaptureProject } from '../../components/DataCaptureProject'

export const Projects = () => (
  <Section>
    <Fade direction='up' >
      <Title>
        Projects
      </Title>
    </Fade>
    <SneakProject />
    <FMC1Project />
    <PmpProject />
    <GeaProject />
    <DataCaptureProject />
  </Section>
)
