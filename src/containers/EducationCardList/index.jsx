import React from 'react'
import { useEducation } from '../../hooks/useEducation'
import { Container, Professional, Technology } from './styles'
import { EducationCard } from '../../components/EducationCard'

export const EducationCardList = () => {
  const [professional, technology] = useEducation()

  return (
    <Container>
      <Professional>
        Professional
      </Professional>
      {
        professional.map(e =>
          <EducationCard key={e.title} {...e} />
        )
      }
      <Technology>
        Technology
      </Technology>
      {
        technology.map(e =>
          <EducationCard key={e.title} {...e} />
        )
      }
    </Container>
  )
}
