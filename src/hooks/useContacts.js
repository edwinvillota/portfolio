import { useState, useEffect } from 'react'
import { contact } from '../mocks/portfolio'

export function useContacts () {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    setContacts(contact)
  }, [])

  return contacts
}
