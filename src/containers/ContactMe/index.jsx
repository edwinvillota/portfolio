import React from 'react'
import { Section, Title } from './styles'
import { ContactCardList } from '../ContactCardList'
import { Fade } from '../../components/Fade'

export const ContactMe = () => (
  <Section>
    <Fade>
      <Title>
        Contact Me
      </Title>
    </Fade>
    <ContactCardList />
  </Section>
)
