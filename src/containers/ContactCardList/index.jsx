import React from 'react'
import { Container } from './styles'
import { useContacts } from '../../hooks/useContacts'
import { ContactCard } from '../../components/ContactCard'
import { Fade } from '../../components/Fade'

export const ContactCardList = () => {
  const contacts = useContacts()

  const cards = contacts.map(c =>
    <Fade key={c.url} direction='down'>
      <ContactCard {...c} />
    </Fade>
  )

  return (
    <Container>
      {cards}
    </Container>
  )
}
