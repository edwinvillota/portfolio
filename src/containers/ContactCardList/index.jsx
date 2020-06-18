import React from 'react'
import { Container } from './styles'
import { useContacts } from '../../hooks/useContacts'
import { ContactCard } from '../../components/ContactCard'

export const ContactCardList = () => {
  const contacts = useContacts()

  const cards = contacts.map(c =>
    <ContactCard key={c.url} {...c} />
  )

  return (
    <Container>
      {cards}
    </Container>
  )
}
