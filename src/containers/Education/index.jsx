import React from 'react'
import { Section, Title } from './styles'
import { EducationCardList } from '../EducationCardList'
import { Fade } from '../../components/Fade'

export const Education = () => (
  <Section>
    <Fade direction='up'>
      <Title>
        Education
      </Title>
    </Fade>
    <EducationCardList />
  </Section>
)
