import React from 'react'
import { useEducation } from '../../hooks/useEducation'
import { Container, Professional, Technology } from './styles'
import { EducationCard } from '../../components/EducationCard'
import { Fade } from '../../components/Fade'

export const EducationCardList = () => {
  const [professional, technology] = useEducation()

  return (
    <Container>
      <Professional>
        <Fade >
            Professional
        </Fade>
      </Professional>
      {
        professional.map(e =>
          <Fade key={e.title} direction='right'>
            <EducationCard {...e} />
          </Fade>
        )
      }
      <Technology>
        <Fade>
          Technology
        </Fade>
      </Technology>
      {
        technology.map(e =>
          <Fade key={e.title} direction='right'>
            <EducationCard {...e} />
          </Fade>
        )
      }
    </Container>
  )
}
